-- 1) Table: store the suggested donation amount and the daily tick state.
create table if not exists public.donation_suggested_amount (
  key text primary key,
  base_amount integer not null default 1299,
  daily_increase integer not null default 5,
  amount integer not null default 1299,
  last_tick_date date not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

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
insert into public.donation_suggested_amount ("key", last_tick_date)
values ('default', (now() at time zone 'UTC')::date)
on conflict ("key") do nothing;

-- 4) RPC: tick once per day (UTC) and return the current amount + next tick time.
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
  today date := (now() at time zone 'UTC')::date;
begin
  insert into public.donation_suggested_amount ("key", last_tick_date)
  values (p_key, today)
  on conflict ("key") do nothing;

  update public.donation_suggested_amount
  set
    amount = amount + greatest(0, (today - last_tick_date)) * daily_increase,
    last_tick_date = today
  where donation_suggested_amount."key" = p_key;

  return query
  select
    d."key" as donation_key,
    d.base_amount,
    d.daily_increase,
    d.amount,
    ((today + 1)::timestamp at time zone 'UTC') as next_tick_at
  from public.donation_suggested_amount d
  where d."key" = p_key;
end;
$$;
