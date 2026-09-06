# Search Focus — Starter

The controlled search field already works. The **Focus search** button is present, but its DOM-focus behavior has not been implemented yet.

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

Add the ref-based behavior demonstrated in the lecture so that clicking **Focus search** moves browser focus into the existing input. Keep the controlled input behavior intact.

## Success checks

- Typing updates the preview text.
- Clicking **Focus search** moves focus into the input.
- The visible focus ring appears.
- Focusing the input does not clear or modify the current query.
