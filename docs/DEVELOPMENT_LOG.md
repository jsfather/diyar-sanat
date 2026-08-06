# Development log

Update this file with every feature, bug fix, schema change, or architecture
decision. Newest entries go first.

## 2026-08-06 — Theme switch and About navigation icon

- Replaced the compact icon/text theme button with a clear two-state sun/moon
  switch, animated selection thumb, visible light/dark state, keyboard focus,
  mobile sizing, and dark-surface styling.
- Replaced the Iran-map icon used for About in mobile bottom navigation with a
  neutral, recognizable information icon.
- Affected surfaces: global header and mobile bottom navigation. No database
  migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully.

## 2026-08-06 — Locale switcher and mobile footer/navigation refinement

- Replaced the FA/EN segmented control with a clearer single-action language
  switcher showing the active language, destination locale, and a visual
  language symbol; switching now preserves the current route.
- Replaced the unused Account destination in mobile bottom navigation with the
  real localized About route and an appropriate Iran/company icon.
- Returned mobile copyright and design credit to one aligned horizontal level,
  with balanced widths and RTL/LTR-aware end alignment.
- Affected surfaces: global header, mobile bottom navigation, and footer. No
  database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully.

## 2026-08-06 — Mobile controls, footer, hero spacing, and dark-theme audit

- Replaced the one-way native-details mobile menu with a controlled accessible
  drawer that closes through its visible close button, backdrop, Escape key, or
  route navigation.
- Made the mobile theme control visually explicit with a compact action label
  and stronger day/night icon contrast.
- Replaced the homepage badge artwork with the complete Iran-shaped official
  flag asset and separated the badge from the highlights panel on desktop and
  mobile.
- Rebuilt the mobile footer into a clear single-column stack, removed text
  collisions, and moved Back to top into normal footer flow so it cannot cover
  legal or credit copy.
- Corrected the mobile bottom navigation so its active state follows the current
  route instead of always highlighting Home.
- Audited shared dark-mode surfaces across homepage, representatives, forms,
  careers, products, media, contact, About, navigation, and mobile bottom nav;
  added consistent dark backgrounds, borders, headings, body copy, and form
  controls while preserving media and brand accents.
- Affected surfaces: all localized public pages. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully. Automated browser review
  was attempted, but no in-app or connected browser was available in the
  environment; the existing local development server remained untouched.

## 2026-08-06 — Browser-extension hydration warning suppression

- Added scoped hydration-warning suppression to the locale layout `body`
  element because browser extensions can inject attributes such as
  `cz-shortcut-listen` before React hydrates the server-rendered document.
- Kept the existing root direction/language structure unchanged and scoped the
  suppression to the exact externally mutated element rather than masking
  hydration differences throughout the application tree.
- Affected routes: all localized public pages. No database migration.
- Verification: `bun run lint` and `bun run typecheck` completed successfully.

## 2026-08-06 — Long-form article stress test and media UX refinement

- Added approximately 1,500 words of clearly labeled placeholder copy to each
  article template so typography, vertical rhythm, sticky contents navigation,
  lists, CTAs, and related content can be evaluated under realistic length.
- Increased and grouped publication date, reading time, and editorial identity
  into a high-contrast metadata surface suitable for desktop and mobile.
- Refined archive hierarchy so the lead story spans the full grid, secondary
  cards maintain equal structure, excerpts and headings clamp consistently,
  filters remain discoverable, and mobile shows every card vertically instead
  of hiding the archive behind horizontal scrolling.
- Improved long-form body width, paragraph size, line height, heading anchors,
  sample-content separation, and narrow-screen reading behavior.
- Affected routes: `/[lang]/media` and `/[lang]/media/[slug]`. No database
  migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully for all localized media
  routes.

## 2026-08-06 — SEO media archive and long-form article system

- Restored Media to the primary navigation and connected homepage journal cards
  and footer access to real localized media routes.
- Added a responsive archive for News, Blog, and Tutorial content with category
  filtering, text search, featured-story hierarchy, honest empty state, and
  direct canonical article URLs.
- Added long-form article pages supporting cover images, optional native video,
  semantic sections, sticky contents navigation, contextual CTA, related
  articles, breadcrumb navigation, and accessible responsive behavior.
- Added per-article metadata, Open Graph/Twitter fields, Article or NewsArticle
  JSON-LD, publisher/author identity, canonical URLs, static route generation,
  and sitemap discovery. Content avoids unverified product and export claims.
- Affected routes: `/[lang]/media` and `/[lang]/media/[slug]`, plus global
  navigation and homepage journal links. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully; all eight localized
  article URLs were statically generated.

## 2026-08-06 — Product micro-interactions, archive hierarchy, and working search

- Replaced the simplified origin stripes with the complete Iran-shaped flag
  asset and elevated the key product specification into a dedicated technical
  badge instead of plain inline text.
- Reworked archive category headers and cards with category accents, structured
  labels, stronger specification chips, branded depth, clearer actions, and
  mobile-aware layouts.
- Added click/tap product-image zoom with a modal lightbox, Escape and backdrop
  dismissal, accessible labels, and preserved thumbnail selection.
- Replaced the inert header search icon with a keyboard-accessible site-search
  dialog and localized, filterable links to products and core public routes.
- Affected surfaces: global header, `/[lang]/products`, and
  `/[lang]/products/[slug]`. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully.

## 2026-08-06 — Product-detail visual uplift and product mega menu

- Added an accessible desktop mega menu under Products with four product-group
  entry points, concise descriptions, archive CTA, route-aware active state,
  hover/focus-within behavior, and RTL/LTR mirroring.
- Enriched the product-detail hero with layered brand surfaces, a prominent
  Iran-flag origin badge, stronger product stage, branded background motif,
  elevated benefit/specification cards, and clearer purchase CTAs.
- Changed journal category labels (guide, blog, and news) to the requested red
  background with white text across featured and compact cards.
- Affected surfaces: global desktop header, homepage journal, and
  `/[lang]/products/[slug]`. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully.

## 2026-08-06 — Product archive and product-detail experience

- Completed the localized product archive with category navigation, branded
  product mockups, responsive product cards, and direct SEO-friendly detail
  links instead of in-page placeholder anchors.
- Added dynamic product-detail routes sourced from the same catalog model, with
  breadcrumb and Product structured data, gallery, key facts, benefit summary,
  tabbed description/applications/features/technical/download states, contact
  CTA, archive return, and related products.
- Avoided publishing unverified API grades, approvals, packaging volumes, test
  results, or downloadable documents. The UI explicitly marks technical files
  as pending approved product datasheets.
- Added a representative product-detail URL to sitemap discovery and supplied
  mobile-specific archive scrollers and stacked product presentation.
- Affected routes: `/[lang]/products` and `/[lang]/products/[slug]`. No database
  migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully; the dynamic product
  detail route appears in the production route manifest.

## 2026-08-06 — About, contact map, international navigation, and CAPTCHA coverage

- Added a localized About route covering the company, factory and production
  direction, research and development, quality control, and future-market
  vision without publishing unverified capacities or export claims.
- Added International Cooperation to desktop/mobile menu content and changed
  About navigation from a homepage anchor to its dedicated route.
- Expanded Contact with typed email, phone/address verification states, and an
  OpenStreetMap view of the general Tabriz area. An exact marker is intentionally
  withheld until the employer supplies a verified full address.
- Applied an accessible arithmetic CAPTCHA to every active inquiry form,
  including representative applications, résumé intake, contact, and
  international cooperation.
- Added About to sitemap discovery and refined responsive contact/about layouts.
- Affected routes: `/[lang]/about`, `/[lang]/contact`, and all active public
  forms. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully for all localized routes.

## 2026-08-06 — Contact, careers, and international cooperation routes

- Added localized contact, careers, general résumé detail, and international
  cooperation routes with canonical/hreflang metadata and sitemap discovery.
- Built responsive forms for departmental contact, general résumé intake, and
  international partnership inquiries, including requested attachments,
  consent controls, contact CAPTCHA, and native validation semantics.
- Added career department/work-type filters and an honest empty state because
  no employer-approved vacancies were supplied. A permanent general résumé
  route remains available without presenting a fictional job opening.
- Result states generate preview reference codes and clearly say that no request
  is persisted until the server-side intake is connected.
- Updated header, mobile navigation, and footer links for direct route access.
- Affected routes: `/[lang]/contact`, `/[lang]/careers`,
  `/[lang]/careers/general-application`, and
  `/[lang]/international-cooperation`. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` completed successfully for all localized routes.

## 2026-08-06 — Representatives page UX and accurate Iran provinces

- Replaced approximate Iran map points with the real SVG geometry of all 31
  provinces; the entire province surface is now the hover, keyboard-focus,
  active, and navigation target.
- Rebuilt the page context area with a dedicated, truncation-safe breadcrumb
  bar that supports long province names without overlap on desktop or mobile.
- Refined the page hero, elevated country/region controls, map surface, selected
  area header, empty state, spacing, contrast, and responsive hierarchy.
- Retained the dropdown-only mobile alternative and canonical province URLs,
  while adding source attribution for the MIT-licensed province geometry.
- Affected routes: `/fa/representatives/**` and `/en/representatives/**`. No
  database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and a clean isolated
  `bun run build -- --webpack` pass. The standard `.next` directory was still
  holding a temporary test-log handle, so verification used a disposable build
  output directory that was removed afterward.

## 2026-08-06 — Header navigation redesign and representatives runtime fix

- Replaced the loose desktop links with a compact navigation surface using
  consistent hit areas, restrained hover feedback, a clear active pill, and a
  red route indicator. Active state now follows the real pathname instead of
  permanently highlighting Home.
- Refined header translucency, spacing, shadow, and the representative CTA while
  preserving the established logo, language control, theme control, RTL/LTR
  mirroring, keyboard focus, and mobile menu.
- Fixed the representatives page runtime failure by replacing `Map.groupBy`,
  which was unavailable in the current server runtime, with a compatible typed
  reducer. Header and mobile links now reach the route normally.
- Affected routes: all public routes and `/[lang]/representatives/**`. No
  database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass; the production route manifest includes the
  representatives catch-all route after the runtime-incompatible call removal.
  A temporary production server returned HTTP 200 for both
  `/fa/representatives` and
  `/fa/representatives/iran/east-azerbaijan` with complete rendered HTML.

## 2026-08-06 — SEO-ready Iran and Iraq representatives finder

- Added a localized representatives route supporting the index, country, and
  province/governorate URLs, including
  `/fa/representatives/iran/east-azerbaijan`.
- Built desktop Iran/Iraq tabs, an accessible SVG map with hover, focus, and
  active states, and a results panel designed to group approved records by city.
- Added mobile country and province selects as a complete map alternative; both
  controls navigate to canonical URLs instead of hiding filter state in client
  memory.
- Added all 31 Iranian provinces and 19 Iraqi governorates to the navigation
  model. Representative records remain intentionally empty until employer-
  approved names, managers, addresses, phones, WhatsApp numbers, and directions
  are supplied; the page communicates that state without publishing samples.
- Updated header, representative CTA, mobile navigation, sitemap, localized
  metadata, breadcrumbs, and map-source attribution.
- Affected routes: `/fa/representatives/**` and `/en/representatives/**`. No
  database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass. The build registers the optional catch-all
  representatives route successfully.

## 2026-08-06 — Fully visible mobile trust grids

- Removed horizontal scrolling from the homepage highlights and credentials on
  mobile so all five items are discoverable without swipe gestures.
- Reflowed both sections into compact two-column grids with the fifth item
  spanning the full row, preserving a balanced silhouette and clear completion.
- Tightened mobile icon, type, and spacing scales while retaining readable
  labels, full identifiers, RTL/LTR structure, and narrow 360px support.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass.

## 2026-08-06 — News section editorial hierarchy refinement

- Reworked the equal-weight news cards into an editorial layout with one large
  lead story and three compact supporting stories, making priority and scanning
  order immediately clear.
- Replaced the lead story's product-packaging thumbnail with the existing
  factory teaser image so the section reads as company media rather than a
  duplicate product catalog.
- Reduced repeated metadata on compact cards, constrained long headings,
  enlarged the lead-story action, and preserved full-card image links plus
  keyboard focus behavior.
- Kept mobile purpose-built as a snap scroller with a wider lead card, stable
  touch targets, and consistent reading order in RTL and LTR.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass.

## 2026-08-06 — Editorial news and verified credentials redesign

- Corrected the teaser play glyph to point physically right in both RTL and LTR
  layouts.
- Rebuilt the news area with editorial image cards, compact reading metadata,
  equal-height content, clearer article actions, accessible linked covers, and
  a refined all-news CTA with stronger keyboard and hover feedback.
- Replaced pending credential placeholders with five employer-supplied records:
  Iran National Standard 338, ASTM D3306, standard number 10001517, operating
  license 7206290, and business number 12452916074.
- Redesigned credentials as a high-contrast trust panel with scannable labels,
  isolated LTR identifiers, restrained category accents, and a touch-friendly
  mobile scroller. No third-party certification logo was implied.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass.

## 2026-08-06 — Factory teaser and visual-number cleanup

- Removed decorative numbering from both the homepage highlight tiles and the
  product cards to reduce visual noise and keep attention on content.
- Rebuilt the company introduction as a responsive editorial section with a
  concise intro, a large cinematic teaser cover, clear play affordance, player
  styling, and a supporting four-item value grid.
- Generated an original, text-free industrial teaser cover specifically for the
  section and kept all captions in accessible HTML rather than inside the image.
- Refined hierarchy, contrast, touch sizing, RTL/LTR behavior, responsive grid
  collapse, and reduced-motion compatibility. The player is presentation-ready;
  an approved video source can be connected when supplied.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass.

## 2026-08-06 — Product-card UX audit and CTA refinement

- Replaced the straight emphasis underline with a centered, symmetric red mark that tapers at both ends and remains thickest beneath the middle of “عملکرد بهتر.”
- Redesigned the all-products CTA as a high-contrast navy action with a dedicated directional affordance, stronger touch target, hover/focus feedback, and locale-aware padding.
- Audited the product cards for equal heights, content alignment, contrast, keyboard focus, mobile scrolling, directional behavior, and motion. Cards now use flex-based equal-height content, bottom-aligned actions, protected heading space, darker accessible gold/blue accents, and matching hover/focus-within states.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Branded product mockups and premium product cards

- Replaced the CSS placeholder bottles with four original product mockups for engine oil, gear oil, brake fluid, and antifreeze, each using the employer-supplied DST logo as the mandatory brand reference.
- Rebuilt the product cards with larger editorial imagery, numbered glass labels, category icon badges, color-coded edge accents, elevated shadows, hover depth, and circular directional actions.
- Changed the Persian section label from “دیار شیمی” to “محصولات ما” and added a red emphasis underline beneath “عملکرد بهتر” in the main heading; added equivalent English copy.
- Kept generated packaging free from unverified specifications, certificates, statistics, and performance claims.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass. The four final web assets were resized to 900×900 JPEGs for delivery efficiency.

## 2026-08-06 — Desktop hero set to 600px

- Set the desktop hero and photo height to exactly 600px, up from 555px.
- Preserved the existing purpose-built mobile heights.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Additional desktop hero height

- Increased the desktop hero and photo height by another 50px, from 505px to 555px.
- Preserved the existing 390px and 330px purpose-built mobile heights.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Desktop hero height and badge corner direction

- Increased the desktop hero and photo height from 490px to 505px while leaving the purpose-built mobile heights unchanged.
- Removed the RTL corner reversal from the Made in Iran badge: its physical left edge is square and its two right corners, facing into the image, remain rounded in both locales.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Physical left badge fix and segmented language switcher

- Corrected the Made in Iran badge with physical `left` and `bottom` positioning so Persian direction can no longer move it to the image's right edge.
- Replaced the header language dropdown with a compact, always-visible `FA | EN` segmented control modeled after the supplied reference, with a clear active state and direct one-click switching.
- Kept accessible language labels, `hrefLang`, language metadata, focus states, and a compact mobile treatment.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Hero cleanup and professional header language control

- Pinned the Made in Iran badge directly to the physical left edge of the hero on desktop and mobile.
- Reduced the Persian hero copy's right-side padding and removed its width cap to eliminate the unused right gutter.
- Removed the duplicate hamburger menu and language/theme controls from inside the hero.
- Replaced the single-language header link with an accessible two-option language menu showing the active language, locale code, and clear Persian/English choices.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Fixed physical hero placement and shared Iran SVG

- Set the desktop hero to a physical LTR grid so the image remains on the left and copy remains on the right on Persian routes, while the copy itself keeps correct RTL reading direction.
- Removed the image mirror transform; the factory image now keeps its natural orientation while occupying the requested left side.
- Replaced the improvised CSS gear with the established detailed gear icon from the site icon system.
- Added one accurate CC0 SVG map of Iran and replaced abstract Iran icons in the hero highlights and footer credentials with a shared reusable map component.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Exact reference hero and accurate Iran mark

- Tightened the desktop hero proportions, circular photo crop, typography, CTA ordering, dotted technical background, slide indicators, and embedded language/menu controls to match the supplied close-up reference.
- Replaced the abstract Iran icon in the Made in Iran badge with an accurate public-domain flag map of Iran sourced from Wikimedia Commons, paired with the reference-style industrial gear.
- Preserved the exact approved Persian message “ساخت ایران، حرکت به جلو” and the safe future-market positioning.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Persian hero mirroring and reference-matched footer

- Explicitly placed Persian hero copy on the right and the industrial image on the left, with a horizontal image mirror on RTL desktop layouts.
- Rebuilt the Made in Iran badge with a dedicated Iran outline, three-color Iranian flag, and the exact approved “ساخت ایران، حرکت به جلو” message.
- Expanded the footer to match the supplied reference structure: newsletter bar, five information columns, contact details, pending credentials, customer-service links, product links, quick access, legal bar, and back-to-top control.
- Kept unverified phone and licensing details visibly pending rather than publishing fabricated values.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass.

## 2026-08-06 — Reference-led homepage visual rebuild

- Rebuilt the Persian and English homepage presentation to closely follow the supplied desktop reference: compact branded navigation, split industrial hero, overlapping highlight panel, four product-category cards, three-column factory story, four-item media row, credential strip, newsletter, and structured footer.
- Added purpose-built mobile behavior with horizontal product, metric, media, and credential scrollers while preserving structural RTL/LTR mirroring and the mobile bottom navigation.
- Kept all public claims within verified project facts; numerical export, representative, award, certificate, and capacity claims from the visual reference were intentionally not copied.
- Added a project-specific social preview card and wired Open Graph and X metadata to it.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and `bun run build -- --webpack` pass. The production build required execution outside the managed runner after its first child-process spawn was denied with `EPERM`.

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
## 2026-08-06 — Homepage highlight strip UI/UX redesign

- Rebuilt the five homepage highlights below the hero as a semantic list with a
  stronger title/detail hierarchy, restrained color coding, consistent icon
  containers, and quiet numeric wayfinding.
- Reworded the labels for clearer product, production, process, support, and
  growth messaging without adding unverified statistics or market claims.
- Replaced separator-only columns with balanced information tiles while keeping
  them visibly non-interactive, so the cards do not imply unavailable links.
- Added an RTL/LTR-safe, touch-friendly mobile scroller with snap alignment,
  contained overscroll, compact spacing, and hidden scrollbars.
- Affected routes: `/fa` and `/en`. No database migration was required.
- Verification: `bun run lint`, `bun run typecheck`, and
  `bun run build -- --webpack` pass.
## 2026-08-06 — Iraq map and representative application flow

- Replaced approximate Iraq map points with selectable SVG governorate
  boundaries. Kept Halabja in the country/region selector rather than drawing an
  unverified border absent from the licensed geometry source.
- Added a responsive partnership banner below the representatives workspace and
  connected its CTA, plus the global header CTA, to the new localized
  representative-application route.
- Built a five-step accessible application experience for personal, business,
  distribution, document, and review information, followed by an explicit
  confirmation state and generated reference code. The current result clearly
  states that persistence still needs a database connection and does not imply
  that a request was transmitted.
- Added localized metadata, canonical URLs, sitemap entries, responsive states,
  keyboard focus behavior, validation feedback, and map-source attribution.
- Affected routes: `/[lang]/representatives/**` and
  `/[lang]/representative-application`. No database migration.
- Verification: `bun run lint`, `bun run typecheck`, and an isolated
  `bun run build -- --webpack` all completed successfully. The isolated output
  was used because an unrelated running process held a legacy `.next` log open.
