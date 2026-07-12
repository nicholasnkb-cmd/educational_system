# EduConnect Interactive Portal

![Build](https://github.com/nicholasnkb-cmd/educational_system/actions/workflows/pages.yml/badge.svg)
![Tests](https://img.shields.io/badge/tests-Playwright-2ea44f)
![Deployment](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)

An interactive front-end prototype for a multi-tenant educational system. It includes platform governance, LMS tools, student missions, teacher workflows, parent views, messaging, community board approvals, local persistence, and demo reset behavior.

## Features

- Platform tenant selector with state, district, and school hierarchy
- LMS dashboard with assignments, offline packs, guardrails, notifications, and account switching
- Student mission completion with points and awards
- Teacher class filtering, assignment creation, activity refresh, and reply flows
- Parent progress dashboard and teacher messaging entry points
- Communication hub with work-hour restrictions and emergency override
- Community board submission, approver assignment, approval, rejection, and publishing
- Search, notifications, settings, compact mode, high-contrast mode, and demo state export
- Demo authentication for Admin, Teacher, Parent, and Student
- Role-aware permissions for tenant management, LMS controls, emergency override, and post approval
- Guided onboarding walkthrough for the main workflows
- JSON import/export for portable demo state
- Mock API mode backed by a local service abstraction
- Local persistence through `localStorage`

## Screenshots

![Teacher dashboard](stitch_educonnect_interactive_portal/teacher_dashboard/screen.png)

![Parent dashboard](stitch_educonnect_interactive_portal/parent_dashboard/screen.png)

![Communication hub](stitch_educonnect_interactive_portal/communication_hub/screen.png)

## Local Preview

```powershell
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://127.0.0.1:5173/`.

## Demo Logins

Use the **Signed in as** panel to switch between:

- District Admin: full tenant, LMS, messaging, emergency, and approval access
- Teacher: LMS, assignment, messaging, and post submission access
- Parent: messaging and community submission access
- Student: student mission access

Restricted actions remain visible but disabled with an explanatory permission note.

## Demo State

Open Settings in the top bar to:

- Export demo state as `educonnect-demo-state.json`
- Import a previously exported state file
- Switch between local demo persistence and mock API mode
- Toggle compact density and high-contrast panels

Mock API mode uses `src/mockApi.js`, which simulates async reads/writes while keeping the app fully local.

## Build

```powershell
npm run build
```

The production build is written to `dist/`.

## Tests

```powershell
npm test
```

The Playwright tests cover the main demo flows: navigation, LMS actions, messaging, community approvals, search, settings, and reset.

## GitHub Pages

This repository includes `.github/workflows/pages.yml`. After pushing to `main`, enable GitHub Pages with **Source: GitHub Actions** in the repository settings. The workflow builds the Vite app and deploys `dist/`.

Setup steps:

1. Push `main` to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Open **Pages**.
5. Set **Source** to **GitHub Actions**.
6. Run or wait for the `Deploy to GitHub Pages` workflow.
7. Open the deployment URL shown in the workflow summary.

## Hostinger Deployment

This app can also be deployed to a Hostinger subdomain as a static site.

```powershell
npm run build:hostinger
Compress-Archive -Path .\dist\* -DestinationPath .\deploy\educonnect-hostinger.zip -Force
```

See `HOSTINGER_DEPLOY.md` for the detected Hostinger target and upload steps.

Automated SFTP deploy is also available after creating a local `.env` file:

```powershell
npm run deploy:hostinger
```

Live smoke test:

```powershell
$env:LIVE_BASE_URL="https://educationalsystem.fieldserviceit.com"
npm run test:live
```

## Data Boundary

Mock records live behind `src/dataSource.js`. The current implementation re-exports local demo data, so future API work can replace that boundary without rewriting the UI renderers.
