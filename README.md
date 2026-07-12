# EduConnect Interactive Portal

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

## Data Boundary

Mock records live behind `src/dataSource.js`. The current implementation re-exports local demo data, so future API work can replace that boundary without rewriting the UI renderers.
