# Hostinger Subdomain Deployment

Target detected from the Hostinger API:

- Domain: `educationalsystem.fieldserviceit.com`
- Dedicated API: `https://api.educationalsystem.fieldserviceit.com`
- Hostinger username: `u209468809`
- Web root: `/home/u209468809/domains/educationalsystem.fieldserviceit.com/public_html`

## Build for Hostinger

```powershell
npm run build:hostinger
```

This writes the static production site to `dist/` with root-relative assets for the Hostinger subdomain.

## Package for Upload

```powershell
New-Item -ItemType Directory -Force deploy
Compress-Archive -Path .\dist\* -DestinationPath .\deploy\educonnect-hostinger.zip -Force
```

Upload `deploy/educonnect-hostinger.zip` to the subdomain web root in Hostinger File Manager, then extract it in:

```text
/home/u209468809/domains/educationalsystem.fieldserviceit.com/public_html
```

Important: extract the contents into `public_html`, not into a nested `dist` folder.

## One-Command SFTP Deployment

Create a local `.env` from `.env.example` and fill in the Hostinger SFTP password:

```powershell
Copy-Item .env.example .env
notepad .env
```

Then deploy:

```powershell
npm run deploy:hostinger
```

The deploy script builds with `npm run build:hostinger` and uploads the contents of `dist/` to:

```text
/home/u209468809/domains/educationalsystem.fieldserviceit.com/public_html
```

Do not commit `.env`; it is ignored by Git.

## Live Smoke Test

After uploading, run:

```powershell
$env:LIVE_BASE_URL="https://educationalsystem.fieldserviceit.com"
npm run test:live
```

This checks the live home, messages, and community routes.

## Dedicated API

The frontend should use:

```text
https://api.educationalsystem.fieldserviceit.com
```

The dedicated API files live in `api/` and are deployed to the Hostinger subdomain directory:

```text
/home/u209468809/domains/educationalsystem.fieldserviceit.com/public_html/educonnect-api
```

Deploy only the education API with:

```powershell
npm run deploy:hostinger:api
```

The deployment command refuses any destination other than
`api.educationalsystem.fieldserviceit.com`, preventing it from overwriting the
FieldserviceIT API.

Required health check:

```text
https://api.educationalsystem.fieldserviceit.com/api/health
```

Admin operations page:

```text
https://api.educationalsystem.fieldserviceit.com/admin.html
```

Current production hardening:

- SQLite-backed API storage on Hostinger when PDO SQLite is available, with JSON fallback.
- Rate limiting for API traffic and login attempts.
- Password hashing for new or reset passwords, with migration support for older demo hashes.
- Admin-only setup/status/backup endpoints.
- Upload size and MIME-type limits.
- Security headers and CORS restricted to the education frontend.

## Hostinger hPanel Steps

1. Open Hostinger hPanel.
2. Go to **Websites**.
3. Open the dashboard for `educationalsystem.fieldserviceit.com`.
4. Open **File Manager**.
5. Go to `public_html`.
6. Upload `educonnect-hostinger.zip`.
7. Extract it in `public_html`.
8. Visit `https://educationalsystem.fieldserviceit.com`.

## Notes

- The app uses hash routes like `/#messages`, so no server rewrite rules are required.
- `public/.htaccess` is included so direct paths fall back to `index.html` on Apache.
- `public/404.html` and `public/maintenance.html` are included as deploy safety pages.
- If you create a different subdomain later, build with `npm run build:hostinger` again and upload the new `dist` contents to that subdomain's `public_html`.
- Keep the Hostinger API token out of Git. `.env` and `.env.*` are ignored.
