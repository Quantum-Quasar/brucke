# Deployment

Brücke is a static Next.js app (`bun run build` pre-renders every route). The only
runtime configuration is the public site URL used for social metadata.

## Vercel

1. Import the GitHub repository into Vercel.
2. Framework preset: **Next.js**.
3. Install command: `bun install --frozen-lockfile`.
4. Build command: `bun run build`.
5. Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example
   `https://brucke.example.com`). Without it, Open Graph URLs fall back to
   `http://localhost:3000`.
6. Deploy, then run the smoke suite against the deployed URL:

```bash
PLAYWRIGHT_WEB_SERVER="bun run start" \
PLAYWRIGHT_PORT=3111 \
CHROMIUM_PATH=/usr/bin/chromium \
bunx playwright test tests/e2e/smoke.spec.ts
```

## Pre-deploy checks

```bash
bun run test
bun run typecheck
bun run lint
bun run build
bun scripts/audit-word-refs.ts
bun scripts/audit-teasers.ts
bun scripts/audit-wording.ts
bun scripts/audit-vocab-balance.ts --strict
```

The app has no accounts, server database, or cloud TTS. Progress is local to the
browser; deployment is static hosting plus the optional public URL variable.
