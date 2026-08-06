<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Diyar Sanat project rules

Read `docs/PROJECT_CONTEXT.md` and `docs/DEVELOPMENT_LOG.md` before changing the
application. They are the product and implementation memory for Codex, Claude,
IDE agents, and human contributors.

## Non-negotiable engineering rules

- Bun is the only JavaScript package manager. Use `bun add`, `bun remove`, and
  `bun run`; commit `bun.lock`; never create `package-lock.json`, `yarn.lock`, or
  `pnpm-lock.yaml`.
- Before editing Next.js code, read the relevant guide in
  `node_modules/next/dist/docs/` for the installed version.
- Load and follow both Supabase agent skills in `.agents/skills/` before any
  Supabase or Postgres work.
- Every database change starts in `supabase/migrations/`. Never make a
  dashboard-only schema change. Update generated database types after schema
  changes and verify the full migration chain with `bun run db:reset` when a
  local container runtime is available.
- All exposed tables require explicit grants and Row Level Security. Never use a
  service-role or secret key in browser code, and never use user-editable
  metadata for authorization.
- The production target includes self-hosted Supabase. Avoid cloud-only database
  assumptions; migrations, seed data, and configuration must recreate the
  required schema on a fresh compatible Supabase instance.
- Prefer Server Components. Add Client Components only at interactive
  boundaries. Keep database access in `lib/` and presentation in `components/`.
- The public website is locale-prefixed (`/fa`, `/en`), Persian is RTL, and all
  public pages need semantic headings, accessible focus states, and SEO
  metadata.
- Do not publish unverified statistics, export claims, certificates, agents, or
  customer counts. “Global markets” is a direction, not a claim of active
  exports.
- Update `docs/DEVELOPMENT_LOG.md` in the same change for every feature, bug fix,
  schema change, or architectural decision. Record what changed, why, affected
  files/routes, migrations, and verification performed.
