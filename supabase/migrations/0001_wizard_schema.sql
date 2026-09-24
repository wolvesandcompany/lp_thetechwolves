-- TheTechWolves internal "website maker" wizard — initial schema.
-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query → paste → Run).

-- Extends auth.users with an app-level role. Row is created automatically
-- on signup by the trigger below.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null check (role in ('sales', 'admin')) default 'sales',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Auto-create a profiles row whenever a new auth user signs up.
-- New users default to 'sales'; promote to 'admin' manually via SQL
-- (see bottom of this file) after they're created.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, new.raw_user_meta_data->>'full_name', 'sales');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- One row per generated business site.
create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  template text not null,
  agent_id uuid not null references public.profiles(id),
  status text not null check (status in ('draft', 'pending_approval', 'live')) default 'draft',
  profile_data jsonb not null default '{}'::jsonb,
  payment_reference text,
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists businesses_agent_id_idx on public.businesses(agent_id);
create index if not exists businesses_status_idx on public.businesses(status);

alter table public.businesses enable row level security;

-- Content isn't sensitive (it's marketing copy for a business's own page),
-- and /preview/<slug> + /company/<slug> both need to render for anonymous
-- visitors. All writes go through server-side API routes using the
-- service-role key (bypasses RLS), so no anon/authenticated write policies
-- are needed here — default-deny covers writes.
create policy "public can read businesses"
  on public.businesses for select
  using (true);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists businesses_set_updated_at on public.businesses;
create trigger businesses_set_updated_at
  before update on public.businesses
  for each row execute function public.set_updated_at();

-- ─────────────────────────────────────────────────────────────────
-- After running the above, create your admin user normally via the
-- wizard's signup (or Supabase Dashboard → Authentication → Add user),
-- then promote them:
--
--   update public.profiles set role = 'admin' where id =
--     (select id from auth.users where email = 'you@example.com');
-- ─────────────────────────────────────────────────────────────────
