-- 1) Table: store the suggested donation amount and the daily tick state.
create table if not exists public.donation_suggested_amount (
  key text primary key,
  base_amount integer not null default 1299,
  daily_increase integer not null default 5,
  amount integer not null default 1299,
  last_tick_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Backward-compatible migration (if you previously used last_tick_date).
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
insert into public.donation_suggested_amount ("key", last_tick_at)
values ('default', now())
on conflict ("key") do nothing;

-- 4) RPC: tick once per 24h and return the current amount + next tick time.
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
  now_ts timestamptz := now();
  ticks integer;
begin
  insert into public.donation_suggested_amount ("key", last_tick_at)
  values (p_key, now_ts)
  on conflict ("key") do nothing;

  select
    greatest(
      0,
      floor(extract(epoch from (now_ts - d.last_tick_at)) / 86400.0)
    )::int
  into ticks
  from public.donation_suggested_amount d
  where d."key" = p_key;

  if ticks > 0 then
    update public.donation_suggested_amount as d
    set
      amount = d.amount + ticks * d.daily_increase,
      last_tick_at = d.last_tick_at + make_interval(days => ticks)
    where d."key" = p_key;
  end if;

  return query
  select
    d."key" as donation_key,
    d.base_amount,
    d.daily_increase,
    d.amount,
    (d.last_tick_at + interval '1 day') as next_tick_at
  from public.donation_suggested_amount d
  where d."key" = p_key;
end;
$$;
