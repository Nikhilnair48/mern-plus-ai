# Conference Hub — Starter

Starting point for Lecture 27.

This project begins from the completed Lecture 26 Conference Hub app and adds a
new display-preference feature that already works through props.

## What already works

- `/sessions?track=react` and `/sessions?track=typescript`
- `useSearchParams` as the source for the selected track
- no `track` parameter for the unfiltered All view
- existing feedback loaded with GET
- typed outgoing POST and PATCH data
- POST response added to current React state
- PATCH response replacing the matching state item
- DELETE followed by a local filter update
- JSONPlaceholder `/comments` used as stand-in Conference Hub feedback data
- `displayMode` owned by `App`
- `DisplayModeBadge`, `DisplayModeControls`, and `SessionList` working through props

## Goal for Lecture 27

Refactor the shared display-preference feature to typed Context without changing
where the state is owned.

## Run

```bash
npm ci
npm run typecheck
npm run dev
```
