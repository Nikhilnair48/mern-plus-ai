# Museum Guide — Learner Activity Starter

The components, styling, exhibit data, and controlled **Open exhibit** form state are already provided. Your task is to add the routing and navigation behavior from Lecture 25.

## Setup

```bash
npm install
npm run dev
```

This is already a React + TypeScript project. `npm install` installs the local TypeScript/type packages declared in `package.json`; no global TypeScript installation is required.

## Required destinations

| Path | Expected UI |
|---|---|
| `/` | Home |
| `/exhibits` | Exhibits |
| `/exhibits/:exhibitId` | Exhibit details |
| `/visit/hours` | Visit + Opening Hours |
| `/visit/directions` | Visit + Directions |

## Your routing challenge

1. Provide browser routing and define the main routes.
2. Use visible navigation links for Home, Exhibits, and Visit.
3. Create one dynamic exhibit-detail route and display the captured exhibit ID.
4. Turn the exhibit titles into links to their individual detail destinations.
5. Make Visit the parent of Opening Hours and Directions, keeping Visit visible while its child changes.
6. Complete the **Open exhibit** form so submitting an ID navigates to that exhibit's detail destination.

## Completion checks

- `/` renders Home.
- Selecting Exhibits changes the path to `/exhibits`.
- Opening Modern Design changes the path to `/exhibits/E-205` and shows `Exhibit ID: E-205`.
- `/visit/hours` keeps Visit visible while Opening Hours appears in the child area.
- Switching to Directions keeps the parent visible and changes only the child content.
- Submitting `E-310` in **Open exhibit** navigates to `/exhibits/E-310`.

Use Lecture 25 concepts only. Do not add Axios, API requests, query parameters, `useSearchParams`, or additional routing libraries.
