# Lecture 14 instructor code

This folder is intentionally flat. Open the required HTML file with Live Server.

## Demonstrations

| Slides | Open | JavaScript focus | Expected result |
|---|---|---|---|
| 12-17 | `12-17-ticket-destructuring.html` | Object and array destructuring | Ticket fields and tag positions appear |
| 18-25 | `18-25-ticket-spread-rest.html` | Spread, rest, and updated copies | Original and updated values remain distinct |
| 28-37 | `28-37-modules.html` | Named exports and imports | Ticket renders from separate modules |
| 42-50 | `42-50-promises.html` | Promise chain, return flow, catch | Success and failure paths work |
| 52-58 | `52-58-async-await.html` | async, await, try, catch | Same service works with async syntax |

## Activity

Open `59-64-equipment-checkout.html`.

- It runs `59-equipment-solution.js` by default.
- Change the script source to `59-equipment-starter.js` to show the starter state.
- Learners edit only their copy of `59-equipment-app.js`.

Expected success:

```text
Request EQ-2047
Requester: Naveen Rao
Item: USB microphone
Duration: 3 days
Status: Approved
```

Expected failure: `Checkout request could not be loaded`

## Debug clinic

Open `66-68-debug-clinic.js` in the editor. It contains the three broken and fixed snippets without extra browser pages.

## Homework

Open `70-72-maintenance-request.html`.

- It runs `70-maintenance-solution.js` by default.
- Change the script source to `70-maintenance-starter.js` to show the starter state.
- Learners edit only their copy of `70-maintenance-app.js`.

Expected success:

```text
Request MT-3185
Resident: Devika Sen
Area: Kitchen
Issue: Tap leak
Priority: Medium
Status: Scheduled
```

Expected failure: `Maintenance request could not be loaded`

## Live Server

1. Open this folder in VS Code.
2. Start Live Server from the HTML file you are teaching.
3. Confirm the browser address begins with `http://`.
