# Hostinger Subdomain Deployment

Target detected from the Hostinger API:

- Domain: `educationalsystem.fieldserviceit.com`
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
- If you create a different subdomain later, build with `npm run build:hostinger` again and upload the new `dist` contents to that subdomain's `public_html`.
- Keep the Hostinger API token out of Git. `.env` and `.env.*` are ignored.
