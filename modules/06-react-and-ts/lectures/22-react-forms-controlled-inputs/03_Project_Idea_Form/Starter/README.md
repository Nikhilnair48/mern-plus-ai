# Project Idea Form - Starter

Homework starter for **Lecture 22, Slides 44 to 45**.

## Run

```bash
npm install
npm run dev
```

## Already completed

- Project title input
- Summary textarea
- Category select with the approved options
- Project stage radio group
- Open to collaborators checkbox
- Project preview layout
- styling

The React form-data model and state logic are intentionally absent.

## Your task

1. Create a typed form-data model with `title`, `summary`, `category`, `stage`, and `openToCollaborators`.
2. Store the related values in state.
3. Make all five controls controlled.
4. Use typed extracted change handlers.
5. Use `.value` and `.checked` for the appropriate controls.
6. Preserve the other form properties when one field changes.
7. Render the Project preview from the current form state.
8. Limit Summary to 140 characters and derive the remaining count.
9. Derive whether the form is ready to submit.
10. Handle submission locally with `event.preventDefault()`.

The form is ready when the title has at least 3 characters, the summary has at least 20 characters, a category is selected, and a stage is selected. The collaboration checkbox is optional.

## Completion check

Use these values:

```text
Project title: Study Planner
Summary: Plan focused study sessions and track progress.
Category: Productivity
Stage: Prototype
Open to collaborators: checked
```

Expected results:

```text
Summary length: 47
Characters remaining: 93
Ready to submit: Yes
```

Explain why the ready-to-submit value should be calculated from the current form state instead of stored separately.
