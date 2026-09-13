# Task Review — Starter

## Part 1: URL-backed filtering

Required views:

- `/tasks` shows all tasks
- `/tasks?status=open` shows open tasks
- `/tasks?status=completed` shows completed tasks

A missing `status` parameter means the All view. Do not create a second independent state value for the selected status.

## Part 2: mark a task complete

When **Mark complete** is selected, update that task through the API and use the returned task to update the current list.

JSONPlaceholder simulates the PATCH write. The completion check is the returned response plus the current React state.

The source contains two TODO markers matching Slides 39–41. They state the task without embedding the final solution.
