# Portfolio

Personal portfolio and blog — home, projects, and blog pages built with the
Next.js App Router and rendered via ISR from content stored in Supabase.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase (Postgres + Studio for content editing)
- Vercel (hosting)

## Getting started

```bash
npm install
npm run dev        # start the dev server at http://localhost:3000
npm run test        # unit tests (Vitest)
npm run e2e          # end-to-end tests (Playwright)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project's URL
and anon key:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Editing content

All content (projects, blog posts) is managed in Supabase Studio, not in the
codebase. Edits made there appear on the live site within about 5 minutes,
via Next.js ISR revalidation — no redeploy needed.

## Docs

The original spec and implementation plan for this rebuild live in the v1
repo, [`yogaprastyoo/yogaprastyoo.github.io`](https://github.com/yogaprastyoo/yogaprastyoo.github.io),
under `docs/superpowers/`.
