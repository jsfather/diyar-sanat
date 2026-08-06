# Development log

Update this file with every feature, bug fix, schema change, or architecture
decision. Newest entries go first.

## 2026-08-06 — Foundation, catalog, and first responsive routes

- Added durable contributor instructions and consolidated the employer’s
  information architecture and design system into `docs/PROJECT_CONTEXT.md`.
- Standardized Bun as the only package manager and pinned Supabase CLI 2.111.0.
- Initialized the production-replayable Supabase layout and added the first
  catalog migration, RLS policies, explicit Data API grants, and development
  seed content for the four verified product groups.
- Added typed browser/server Supabase client utilities and a server-side catalog
  repository with a visible, safe fallback when migrations have not yet been
  deployed to the temporary remote project.
- Added locale-prefixed `/fa` and `/en` routing, with `/` redirected to `/fa`.
- Implemented the responsive homepage and product listing route from shared
  components, including desktop navigation, mobile navigation, theme control,
  structured metadata, sitemap, robots, and accessible interaction states.
- Added an AI-generated, brand-neutral industrial hero asset. It is a temporary
  visual and must be replaced with approved factory photography when available.
- Verification: `bun run lint` and `bun run typecheck` pass; the Next.js 16.3
  production build passes with the documented `--webpack` fallback. The default
  Turbopack build cannot bind its CSS worker port in the managed runner. The
  configured Supabase Auth health endpoint is reachable with the publishable
  key. Local `db:reset` is pending because Docker is not running. In-app visual
  QA was not completed because browser access to the local preview was declined.
