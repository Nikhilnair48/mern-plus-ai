# Session Browser — Starter

This learner/instructor starter supports the Lecture 24 `useMemo` and `useCallback` demonstrations. It intentionally includes teaching-only CPU delays so unnecessary work is easy to observe.

## Run the project

```bash
npm install
npm run dev
```

You can also validate the project with:

```bash
npm run typecheck
npm run build
```

## TypeScript setup

This starter is already configured as a **React + TypeScript** Vite project. You do not need to install TypeScript globally.

`npm install` installs the project dependencies declared in `package.json`, including TypeScript and the React type definitions.

The `.tsx` files contain React components written with TypeScript. The included `tsconfig` files contain the TypeScript compiler settings for the project.

If you were creating a similar project from scratch with Vite, you could use the React TypeScript template:

```bash
npm create vite@latest my-app -- --template react-ts
```

## Tailwind setup

Tailwind CSS is already configured in this starter through the Vite plugin. You do not need to configure Tailwind before beginning the React task.

## Teaching-only slowdown

The helper in `src/performanceHelpers.ts` deliberately blocks the main thread for a short time. This is **not production filtering code**. It exists only so the class can feel when work repeats.

## Initial behavior

- Changing the search query is intentionally slow.
- Opening **Show tips** is also intentionally slow even though the query did not change.
- Session selection works.
