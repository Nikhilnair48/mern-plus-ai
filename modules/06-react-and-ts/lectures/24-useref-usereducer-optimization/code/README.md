# Lecture 24 Code References

Runnable examples for **Specialized Hooks and performance**.

All projects use React, TypeScript, Vite, Tailwind CSS, and React Strict Mode.

## Included projects

| Lecture section | Folder | Use |
| --- | --- | --- |
| `useRef` DOM access | `01_Search_Focus` | `starter` + `final` |
| `useReducer` state transitions | `02_Reading_Queue` | `starter` + `final` |
| `useMemo` / `useCallback` | `03_Session_Browser` | `starter` + `final` |
| In-class activity | `04_Product_Directory_Activity` | learner `starter` + reference `final` |
| Homework | `05_Delivery_Tracker_Homework` | reference `final` |

## Running a project

Open the required `starter` or `final` folder and run:

```bash
npm install
npm run dev
```

Optional checks:

```bash
npm run typecheck
npm run build
```

Learner starter READMEs explain the TypeScript and Tailwind setup. No global TypeScript installation is required.

## Slide-to-code guide

### Search Focus — Slides 10–16

Start with `01_Search_Focus/starter`.

- Show that the controlled input and `query` state already work.
- Add the typed ref, attach it to the input, then implement `handleFocusSearch`.
- `01_Search_Focus/final` is the completed reference.

### Reading Queue — Slides 18–30

Start with `02_Reading_Queue/starter`.

- Demonstrate Start, Finish, Remove, and Reset with the working `useState` version.
- Use Slides 21–27 to introduce actions and the reducer progressively.
- Compare with `02_Reading_Queue/final`, where the same UI behavior is managed with `useReducer` and `dispatch`.

### Session Browser — Slides 32–46

Start with `03_Session_Browser/starter`.

- Search changes are intentionally slow.
- **Show tips** is also slow even though the search query did not change.
- Introduce `useMemo` to remove the unnecessary filtering cost.
- Then introduce the intentionally slow memoized `SessionList` to demonstrate the separate callback-reference problem.
- `03_Session_Browser/final` contains the completed `useMemo` + `memo` + `useCallback` reference.

The delays in `performanceHelpers.ts` are teaching-only and should not be copied into production code.

### Product Directory Activity — Slide 47

Give learners `04_Product_Directory_Activity/starter` and its README.

The application already works. Learners remove unnecessary performance work while preserving search, category filtering, help toggling, and product selection.

Use `final` only as the reference solution.

### Delivery Tracker Homework — Slide 53

`05_Delivery_Tracker_Homework/final` is the reference solution for the typed `useReducer` homework.

## Teaching note

The slide excerpts intentionally omit most Tailwind classes so the React and TypeScript logic remains readable. Component names, state names, actions, button labels, and core behavior match the runnable examples.
