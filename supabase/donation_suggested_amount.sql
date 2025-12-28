-- 1) Table: store the suggested donation amount and the daily tick state.
create table if not exists public.donation_suggested_amount (
  key text primary key,
  base_amount integer not null default 1299,
  daily_increase integer not null default 5,
  amount integer not null default 1299,
  -- Keep last_tick_date for backward-compat (older function versions used it).
  -- Default uses Asia/Shanghai day boundary (Beijing time).
  last_tick_date date not null default ((now() at time zone 'Asia/Shanghai')::date),
  -- New source of truth for "next tick" (rolling 24h from last_tick_at).
  last_tick_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Backward-compatible migration for existing projects.
do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'donation_suggested_amount'
      and column_name = 'last_tick_date'
  ) then
    execute 'alter table public.donation_suggested_amount alter column last_tick_date set default ((now() at time zone ''Asia/Shanghai'')::date)';
    execute 'update public.donation_suggested_amount set last_tick_date = (now() at time zone ''Asia/Shanghai'')::date where last_tick_date is null';
    execute 'alter table public.donation_suggested_amount alter column last_tick_date set not null';
  else
    execute 'alter table public.donation_suggested_amount add column last_tick_date date not null default ((now() at time zone ''Asia/Shanghai'')::date)';
  end if;
end
$$;

alter table public.donation_suggested_amount
  add column if not exists last_tick_at timestamptz;

update public.donation_suggested_amount
set last_tick_at = coalesce(
  last_tick_at,
  (last_tick_date::timestamp at time zone 'UTC')
)
where last_tick_at is null;

alter table public.donation_suggested_amount
  alter column last_tick_at set default now();

alter table public.donation_suggested_amount
  alter column last_tick_at set not null;

-- 2) updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists donation_suggested_amount_set_updated_at on public.donation_suggested_amount;
create trigger donation_suggested_amount_set_updated_at
before update on public.donation_suggested_amount
for each row
execute function public.set_updated_at();

-- 3) Seed row (idempotent)
insert into public.donation_suggested_amount ("key", last_tick_date, last_tick_at)
values ('default', (now() at time zone 'Asia/Shanghai')::date, now())
on conflict ("key") do nothing;

-- 4) RPC: tick once per day (Asia/Shanghai) and return the current amount + next tick time.
create or replace function public.tick_donation_suggested_amount(p_key text default 'default')
returns table (
  donation_key text,
  base_amount integer,
  daily_increase integer,
  amount integer,
  next_tick_at timestamptz
)
language plpgsql
security definer
as $$
declare
  tz text := 'Asia/Shanghai';
  now_ts timestamptz := now();
  today date := (now_ts at time zone tz)::date;
  day_diff integer;
begin
  insert into public.donation_suggested_amount ("key", last_tick_date, last_tick_at)
  values (p_key, today, now_ts)
  on conflict ("key") do nothing;

  select
    greatest(0, (today - d.last_tick_date))::int
  into day_diff
  from public.donation_suggested_amount d
  where d."key" = p_key;

  if day_diff > 0 then
    update public.donation_suggested_amount as d
    set
      amount = d.amount + day_diff * d.daily_increase,
      last_tick_date = today,
      last_tick_at = now_ts
    where d."key" = p_key;
  end if;

  return query
  select
    d."key" as donation_key,
    d.base_amount,
    d.daily_increase,
    d.amount,
    (((today + 1)::timestamp) at time zone tz) as next_tick_at
  from public.donation_suggested_amount d
  where d."key" = p_key;
end;
$$;
