# Conference Hub — Starter

This is the instructor teaching project for Lecture 25. It is intentionally runnable before routing is added. All non-routing UI, data, form state, child components, and styling are already prepared.

## Setup

```bash
npm install
npm run dev
```

The project already uses React + TypeScript. `npm install` installs the local TypeScript/type packages from `package.json`; no global TypeScript installation is required.

## Teaching sequence

Search the source for `TODO 1` through `TODO 9`.

| Step | File | Teaching change | Browser check |
|---|---|---|---|
| 1 | `src/main.tsx` | Wrap `App` with `BrowserRouter` | UI looks unchanged |
| 2 | `src/App.tsx` | Replace fixed `Home` with static routes | Type `/`, `/sessions`, `/schedule` |
| 3 | `src/App.tsx` | Add Home / Sessions / Schedule `Link`s | Click between destinations |
| 4 | `src/App.tsx` | Add `/sessions/:sessionId` | Type `/sessions/S-102`; detail component matches |
| 5 | `src/pages/SessionDetails.tsx` | Read and display `sessionId` with `useParams` | See `Session ID: S-102` |
| 6 | `src/pages/Sessions.tsx` | Turn session titles into dynamic `Link`s | Click S-101 / S-102 / S-103 |
| 7 | `src/pages/Sessions.tsx` | Use `useNavigate` in the existing form | Submit `S-103` |
| 8 | `src/App.tsx` | Make Schedule a parent with Day 1 / Day 2 child routes | Type `/schedule/day-1`; parent renders, child does not yet appear |
| 9 | `src/pages/Schedule.tsx` | Add day `Link`s and `Outlet` | Switch Day 1 / Day 2; parent stays visible |

## Recovery snippets

### Step 1 — BrowserRouter

```tsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

### Steps 2, 4 and 8 — route configuration

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sessions" element={<Sessions />} />
  <Route path="/sessions/:sessionId" element={<SessionDetails />} />

  <Route path="/schedule" element={<Schedule />}>
    <Route path="day-1" element={<DayOneSchedule />} />
    <Route path="day-2" element={<DayTwoSchedule />} />
  </Route>
</Routes>
```

### Step 3 — main navigation

```tsx
<nav className="main-nav">
  <Link to="/">Home</Link>
  <Link to="/sessions">Sessions</Link>
  <Link to="/schedule">Schedule</Link>
</nav>
```

### Step 5 — route parameter

```tsx
const { sessionId } = useParams();
```

### Step 6 — dynamic session link

```tsx
<Link className="text-link" to={`/sessions/${session.id}`}>
  {session.title}
</Link>
```

### Step 7 — programmatic navigation

```tsx
const navigate = useNavigate();

navigate(`/sessions/${sessionId}`);
```

### Step 9 — nested child navigation and Outlet

```tsx
<nav className="sub-nav">
  <Link to="/schedule/day-1">Day 1</Link>
  <Link to="/schedule/day-2">Day 2</Link>
</nav>

<Outlet />
```

The completed known-good implementation is in `../../Final/conference-hub`.
