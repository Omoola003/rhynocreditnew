# RhynoCredit Security Implementation Notes

## Changes included in this patch

- Disables the `X-Powered-By` response header.
- Adds baseline security response headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS.
- Adds a **report-only** Content Security Policy so browser compatibility can be assessed before enforcement.
- Explicitly keeps Next.js SVG image optimisation disabled.
- Removes `dangerouslySetInnerHTML` from `AudienceSection`; its headings are rendered as ordinary React text.
- Extends `.gitignore` for local environment files and private key formats.
- Adds a safe `.env.example` placeholder with no credentials.

## Required before production deployment

1. Upgrade `next` and `eslint-config-next` from `15.5.5` to the patched `15.5.29` release on the 15.5 line, or a later vendor-supported patched release. Keep the two packages compatible.
2. Regenerate `package-lock.json` with `npm install` using a network-enabled, trusted build environment. Do not manually edit lockfile integrity hashes.
3. Run `npm ci`, `npm audit`, `npm run lint`, and `npm run build`; resolve findings and record results.
4. Test the report-only CSP in staging. Review browser console violations and adjust only for required trusted origins. Then plan an enforced CSP as a separate approved change.
5. Confirm all production hostnames are HTTPS-ready before relying on HSTS. If any subdomain is not HTTPS, do not add `includeSubDomains` or `preload`.
6. Verify headers on the deployed site using browser developer tools or an HTTP header inspection tool.
7. Review hosting, DNS, registrar, MFA, environment secrets, logs, backups and restore settings in their provider consoles. These cannot be configured from this source repository alone.

## Important operational boundaries

- This patch does not configure provider-level MFA, DNSSEC, WAF/CDN, account permissions, backups, log retention or alerting.
- Do not put credentials in `.env.example`, Git, client-side `NEXT_PUBLIC_` variables, screenshots or support tickets.
- No customer identity, loan, payment or investment data should be collected by this marketing website until a separately approved secure backend and privacy review exist.
- The supplied archive included Git metadata. Deployment artifacts must exclude `.git/`, `.env*` (except approved examples), `node_modules/` and local build output.

## CSP notes

The report-only policy is a conservative starting point, not proof of CSP compliance. Next.js hydration, Google-hosted font resources, image sources, analytics and other integrations may require policy tuning. Keep it report-only until staging validation is complete. Do not solve violations by broadly adding `*` or unsafe sources without a documented reason.
