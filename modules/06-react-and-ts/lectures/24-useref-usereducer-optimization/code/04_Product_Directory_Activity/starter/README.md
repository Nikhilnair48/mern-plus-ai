# Product Directory Activity — Starter

The Product Directory is functionally correct but intentionally slow during an unrelated **Show help** update. Your task is to remove unnecessary work without changing the feature behavior.

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

`src/performanceHelpers.ts` contains deliberate CPU delays. They are classroom infrastructure, not production patterns.

## Task

### Part 1 — Product filtering

Inspect how `visibleProducts` is calculated. Prevent the expensive calculation from repeating when the values needed for filtering are unchanged. Search and category changes must still produce new results.

### Part 2 — Product list rendering

`ProductList` is already memoized. Inspect the function passed through its `onSelect` prop. Prevent an unrelated parent update from giving the child a new callback when the callback's dependencies have not changed.

## Verify

- Search still updates products.
- Category still updates products.
- Show help responds without unnecessary delay.
- Product selection still works.
