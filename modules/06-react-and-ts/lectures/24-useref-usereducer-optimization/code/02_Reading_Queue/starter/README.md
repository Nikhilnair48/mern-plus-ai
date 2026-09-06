# Reading Queue — Starter

This learner starter is the working `useState` version used before the Lecture 24 reducer refactor. All four interactions already work.

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

## Learning task

Follow the lecture refactor from familiar `useState` update handlers to a typed reducer. The browser behavior should remain the same while the state-transition rules move into one reducer.

## Current interactions

- Start a queued item.
- Finish a reading item.
- Remove an item.
- Reset the queue.
