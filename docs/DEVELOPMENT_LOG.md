# Development log

Update this file with every feature, bug fix, schema change, or architecture
decision. Newest entries go first.

## 2026-08-06 — RTL hero placement and Supabase seed verification

- Corrected the desktop hero’s logical auto margin so Persian content occupies
  the right side and English content remains on the left without physical
  left/right CSS overrides.
- Supabase verification: pending migration replay, seed, RLS/API checks, and
  application catalog read.

## 2026-08-06 — Locale-aware typography and bidirectional layout

- Added the project-supplied IRANYekanX Pro variable WOFF2 fonts via
  `next/font/local`.
  Persian routes use the FaNum face for Persian digits; English routes use the
  standard face for Latin digits. Eager preload is disabled so each locale only
  downloads the face it actually applies.
- Reduced the supplied font bundle to the two production web fonts and retained
  its license notice beside them; removed static, desktop, demo, and metadata
  files that are not shipped by the application.
- Audited shared directionality beyond text alignment: CTA groups and header
  controls now mirror by locale, directional chevrons flip in RTL, mobile menu
  content restores the document direction, intrinsically LTR email content is
  isolated, and mobile navigation ordering mirrors around the centered home
  action.
- Updated the permanent agent and product-context rules so future shared UI work
  must preserve FaNum/LTR numerals and structural RTL behavior.
- Affected routes: `/fa`, `/en`, `/fa/products`, and `/en/products`. No database
  migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass. The optimized CSS contains both variable
  faces with locale-selectable font variables and no eager preload. A new local
  runtime preview could not bind a port in the managed runner (`listen EPERM`),
  so this pass did not add browser-based visual QA.

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
