# Conference Hub Redux — Starter

Starter project for the main Lecture 28 live-coded example.

This is the completed Lecture 27 Conference Hub plus the **Planner route, navigation link, and empty Planner page shell**. Redux is intentionally **not installed or implemented yet** because Slide 20 performs the exact package installation.

Existing state responsibilities remain unchanged:

- URL search parameters → selected session track
- React Context → display mode
- page/local state → Feedback and component-only UI state
- props → direct component data

## Run

```bash
npm ci
npm run typecheck
npm run dev
```

On Slide 20, install the frozen lecture versions:

```bash
npm install --save-exact @reduxjs/toolkit@2.12.0 react-redux@9.3.0
```
