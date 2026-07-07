create table projects (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  title       text not null,
  summary     text not null,            -- short card text
  body_md     text not null default '', -- detail page, markdown
  tech        text[] not null default '{}',
  repo_url    text,
  demo_url    text,
  cover_path  text,                     -- path in 'covers' bucket
  featured    boolean not null default false,
  sort_order  integer not null default 0,
  published   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  excerpt      text not null,
  body_md      text not null,
  cover_path   text,
  tags         text[] not null default '{}',
  published    boolean not null default false,
  published_at timestamptz,
  updated_at   timestamptz not null default now()
);

create type skill_category as enum
  ('backend', 'frontend', 'iot-robotics', 'devops', 'database');

create table skills (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  category    skill_category not null,
  is_learning boolean not null default false, -- true = "want to learn"
  sort_order  integer not null default 0
);

alter table projects enable row level security;
alter table posts enable row level security;
alter table skills enable row level security;

create policy "public read published projects" on projects
  for select using (published = true);
create policy "public read published posts" on posts
  for select using (published = true);
create policy "public read skills" on skills
  for select using (true);

create or replace function set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger projects_updated_at before update on projects
  for each row execute function set_updated_at();
create trigger posts_updated_at before update on posts
  for each row execute function set_updated_at();

insert into storage.buckets (id, name, public) values ('covers', 'covers', true);
