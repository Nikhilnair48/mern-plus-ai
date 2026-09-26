# React + TypeScript Practice
## Lectures 21 to 24

These exercises are designed to make you **read, debug, change, and build React code**.

You will work with the ideas covered across Lectures 21 to 24:

- state and collections
- controlled forms and typed events
- Effects, dependencies, cleanup, and external data
- `useRef`, `useReducer`, `useMemo`, and `useCallback`

This is not a syntax quiz. In several exercises, the code already works partly. Your job is to understand what is happening before you change it.

### Before you begin

Use a React + TypeScript project. You can reuse your course project or create a fresh Vite React + TypeScript project.

For Exercises 1 to 8, the starter code is intended to be placed in `App.tsx` unless the exercise says otherwise.

Styling is optional. Focus on behaviour and TypeScript correctness.

If you use a fresh project for an exercise that uses Axios, install Axios first:

```bash
npm install axios
```

---

# Exercise 1: The Wrong Item Was Deleted

**Type:** Debugging  
**Suggested time:** 15 to 20 minutes

## The situation

You are working on a resource manager.

The page can show all resources or only the resources that are currently available. The list looks correct, but there is a bug:

1. Select **Available**.
2. Click **Remove** next to **Whiteboard**.
3. A different resource may disappear.

The visible item and the item removed from state are not always the same.

## Starter code

```tsx
import { useState } from "react";

type Resource = {
  id: string;
  name: string;
  available: boolean;
};

const initialResources: Resource[] = [
  { id: "R-101", name: "Projector", available: true },
  { id: "R-102", name: "HDMI adapter", available: false },
  { id: "R-103", name: "Whiteboard", available: true },
  { id: "R-104", name: "Laptop stand", available: true },
];

type Filter = "all" | "available";

function App() {
  const [resources, setResources] =
    useState<Resource[]>(initialResources);

  const [filter, setFilter] =
    useState<Filter>("all");

  const visibleResources =
    filter === "available"
      ? resources.filter((resource) => resource.available)
      : resources;

  function handleRemove(visibleIndex: number) {
    const nextResources = resources.filter(
      (_, index) => index !== visibleIndex
    );

    setResources(nextResources);
  }

  return (
    <main>
      <h1>Resource Manager</h1>

      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button onClick={() => setFilter("available")}>
        Available
      </button>

      <ul>
        {visibleResources.map((resource, index) => (
          <li key={resource.id}>
            {resource.name}
            {" "}
            <button onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
```

## Your task

Reproduce the bug before changing the code.

Then repair the removal flow so that the resource the user clicks is the resource that is removed, regardless of the current filter.

Your solution should use the resource's existing identity rather than its current position on the screen.

## Keep these constraints

- Keep `resource.id` as the rendered key.
- Do not mutate the current `resources` array.
- Do not remove the filtering feature.
- Do not create a separate copy of the resource list just to support deletion.

## Explain

After fixing the code, answer this in 2 to 3 sentences:

**Why can the visible array index point to the wrong item in the original `resources` array?**

## Done when

- Removing an item works in **All**.
- Removing an item works in **Available**.
- The correct item disappears every time.
- The project has no unintended TypeScript errors.

---

# Exercise 2: The Notification Checkbox Will Not Stay Off

**Type:** Bug investigation  
**Suggested time:** 15 to 20 minutes

## The situation

A profile settings form contains a display name, a digest frequency, and a checkbox for product updates.

The text and select controls work.

The checkbox does not.

Once the checkbox becomes selected, clicking it again does not correctly store `false`.

## Starter code

```tsx
import { useState } from "react";

type Preferences = {
  displayName: string;
  digest: "daily" | "weekly";
  receiveUpdates: boolean;
};

function App() {
  const [preferences, setPreferences] =
    useState<Preferences>({
      displayName: "Mira",
      digest: "weekly",
      receiveUpdates: false,
    });

  function handleReceiveUpdatesChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPreferences({
      ...preferences,
      receiveUpdates: Boolean(
        event.currentTarget.value
      ),
    });
  }

  return (
    <main>
      <h1>Profile Settings</h1>

      <label>
        Display name
        <input
          value={preferences.displayName}
          onChange={(event) => {
            setPreferences({
              ...preferences,
              displayName: event.currentTarget.value,
            });
          }}
        />
      </label>

      <label>
        Digest frequency
        <select
          value={preferences.digest}
          onChange={(event) => {
            setPreferences({
              ...preferences,
              digest: event.currentTarget.value as
                Preferences["digest"],
            });
          }}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          checked={preferences.receiveUpdates}
          onChange={handleReceiveUpdatesChange}
        />
        Receive product updates
      </label>

      <pre>
        {JSON.stringify(preferences, null, 2)}
      </pre>
    </main>
  );
}

export default App;
```

## Your task

Investigate why the checkbox cannot correctly store both `true` and `false`.

Repair only the checkbox behaviour.

Do not change `receiveUpdates` from a Boolean.

## Test it

Try this sequence after your fix:

1. Start with the checkbox cleared.
2. Select it.
3. Clear it again.
4. Select it once more.

Watch the JSON output after every click.

## Explain

Answer both questions:

1. What value was the original handler reading?
2. What property should a controlled checkbox use when you need its Boolean state?

## Done when

The JSON output changes correctly between:

```text
receiveUpdates: true
```

and:

```text
receiveUpdates: false
```

---

# Exercise 3: Switching Profiles Shows Old Activity

**Type:** Effect debugging  
**Suggested time:** 20 to 25 minutes

## The situation

A profile viewer loads activity from JSONPlaceholder.

The first profile works correctly.

The problem appears when the user switches profiles without leaving the page:

- the heading changes to the new user
- the activity list still belongs to the old user

## Starter code

```tsx
import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const users = [
  { id: 1, name: "Mira" },
  { id: 2, name: "Arun" },
  { id: 3, name: "Leah" },
];

function ActivityPanel({ userId }: { userId: number }) {
  const [activity, setActivity] =
    useState<Todo[]>([]);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadActivity() {
      setIsLoading(true);
      setError("");

      try {
        const response = await axios.get<Todo[]>(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );

        setActivity(response.data);
      } catch {
        setError("Could not load activity.");
      } finally {
        setIsLoading(false);
      }
    }

    void loadActivity();
  }, []);

  if (isLoading) {
    return <p>Loading activity...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h2>Activity for user {userId}</h2>

      <ul>
        {activity.slice(0, 5).map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const [userId, setUserId] =
    useState(1);

  return (
    <main>
      <h1>Profile Activity</h1>

      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => setUserId(user.id)}
        >
          {user.name}
        </button>
      ))}

      <ActivityPanel userId={userId} />
    </main>
  );
}

export default App;
```

## Your task

Run the application and reproduce the stale-data problem.

Then inspect the relationship between:

```text
userId
the Effect
the API request
the next render
```

Repair the component so that changing the selected user causes the activity for that user to load.

## Keep these constraints

- Keep the API request inside the Effect.
- Keep `userId` as a prop of `ActivityPanel`.
- Keep loading and failure feedback.
- Do not add request cancellation or another library for this exercise.

## Explain

In 2 to 3 sentences:

**Why should a change to `userId` matter to this Effect?**

## Done when

Clicking Mira, Arun, and Leah causes the displayed activity to correspond to the selected user.

---

# Exercise 4: The Save Shortcut Fires More Than Once

**Type:** Effect lifecycle debugging  
**Suggested time:** 15 to 20 minutes

## The situation

A small editor listens for the keyboard shortcut:

```text
Ctrl + S
or
Command + S
```

The shortcut works, but after the editor is closed and opened again, one shortcut can trigger the save logic more than once.

## Starter code

```tsx
import { useEffect, useState } from "react";

function DraftEditor() {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isSaveShortcut =
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "s";

      if (!isSaveShortcut) {
        return;
      }

      event.preventDefault();

      console.count("Save shortcut triggered");
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );
  }, []);

  return (
    <section>
      <h2>Draft Editor</h2>
      <p>
        Press Ctrl + S or Command + S and watch
        the console.
      </p>
    </section>
  );
}

function App() {
  const [isEditorOpen, setIsEditorOpen] =
    useState(true);

  return (
    <main>
      <h1>Document Workspace</h1>

      <button
        onClick={() =>
          setIsEditorOpen((current) => !current)
        }
      >
        {isEditorOpen
          ? "Close editor"
          : "Open editor"}
      </button>

      {isEditorOpen && <DraftEditor />}
    </main>
  );
}

export default App;
```

## Your task

Use the browser console while testing.

Open and close the editor several times, then use the save shortcut.

Find the lifecycle problem in `DraftEditor` and repair it.

The code that establishes the browser relationship should also define how that relationship is removed when React tears it down.

## Keep these constraints

- Keep the listener on `window`.
- Keep the listener registration inside the Effect.
- Do not solve the problem by moving the listener outside React.
- Use the same handler reference when removing the listener.

## Explain

Complete this statement in your own words:

> Setup adds __________. Cleanup removes __________.

## Done when

Reopening the editor does not cause old keyboard listeners to accumulate.

---

# Exercise 5: Add the Next Tag Without Reaching for the Mouse

**Type:** UX improvement  
**Suggested time:** 15 to 20 minutes

## The situation

A quick-entry form allows a user to add several tags.

Adding tags works, and the input is cleared after each submission.

There is one usability problem: after adding a tag, the user has to click the input again before typing the next one.

## Starter code

```tsx
import {
  type FormEvent,
  useState,
} from "react";

function App() {
  const [tag, setTag] =
    useState("");

  const [tags, setTags] =
    useState<string[]>([]);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const nextTag = tag.trim();

    if (!nextTag || tags.includes(nextTag)) {
      return;
    }

    setTags([
      ...tags,
      nextTag,
    ]);

    setTag("");

    // Improve the keyboard workflow here.
  }

  return (
    <main>
      <h1>Quick Tags</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={tag}
          onChange={(event) =>
            setTag(event.currentTarget.value)
          }
          placeholder="Add a tag"
        />

        <button type="submit">
          Add
        </button>
      </form>

      <ul>
        {tags.map((currentTag) => (
          <li key={currentTag}>
            {currentTag}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
```

## Your task

Improve the form so that after a **successful** tag addition, keyboard focus returns to the input automatically.

Use React's DOM-access pattern from Lecture 24.

## Keep these constraints

- Do not use `document.querySelector`.
- Do not store the DOM element in state.
- Type the DOM reference correctly.
- Do not move focus when the submission is rejected because the tag is empty or already exists.

## Explain

Why is the input element itself not a good value to store in component state?

## Done when

You can repeatedly:

```text
type -> Enter -> type -> Enter -> type -> Enter
```

without touching the mouse.

---

# Exercise 6: The Issue Tracker Works, but the Update Logic Is Scattered

**Type:** Refactoring  
**Suggested time:** 25 to 35 minutes

## The situation

The issue tracker below works.

The problem is maintainability.

Several event handlers all update the same collection, and every handler contains its own state-transition logic.

Your goal is to reorganize **how the next issue state is calculated** without changing what the user sees.

## Starter code

```tsx
import { useState } from "react";

type Issue = {
  id: string;
  title: string;
  resolved: boolean;
};

const initialIssues: Issue[] = [
  {
    id: "I-101",
    title: "Checkout button overlaps footer",
    resolved: false,
  },
  {
    id: "I-204",
    title: "Invoice total is incorrect",
    resolved: false,
  },
  {
    id: "I-318",
    title: "Profile image fails to upload",
    resolved: true,
  },
];

function App() {
  const [issues, setIssues] =
    useState<Issue[]>(initialIssues);

  function handleResolve(issueId: string) {
    setIssues(
      issues.map((issue) =>
        issue.id === issueId
          ? { ...issue, resolved: true }
          : issue
      )
    );
  }

  function handleReopen(issueId: string) {
    setIssues(
      issues.map((issue) =>
        issue.id === issueId
          ? { ...issue, resolved: false }
          : issue
      )
    );
  }

  function handleRemove(issueId: string) {
    setIssues(
      issues.filter(
        (issue) => issue.id !== issueId
      )
    );
  }

  function handleReset() {
    setIssues(initialIssues);
  }

  return (
    <main>
      <h1>Issue Tracker</h1>

      <button onClick={handleReset}>
        Reset issues
      </button>

      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <strong>{issue.title}</strong>
            {" - "}
            {issue.resolved ? "Resolved" : "Open"}

            {!issue.resolved && (
              <button
                onClick={() =>
                  handleResolve(issue.id)
                }
              >
                Resolve
              </button>
            )}

            {issue.resolved && (
              <button
                onClick={() =>
                  handleReopen(issue.id)
                }
              >
                Reopen
              </button>
            )}

            <button
              onClick={() =>
                handleRemove(issue.id)
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
```

## Your task

Refactor the issue collection to use `useReducer`.

The visible behaviour must remain the same.

Your reducer should own the rules for these transitions:

```text
resolve an issue
reopen an issue
remove an issue
reset the collection
```

Define a typed action union so TypeScript can describe the allowed actions and the data each action needs.

Event handlers should dispatch what happened rather than calculate the next issue array themselves.

## Keep these constraints

- Keep the reducer pure.
- Do not mutate the current issue array.
- Do not call browser APIs from the reducer.
- Do not keep a second `useState` copy of the issue collection.
- Keep the existing rendered behaviour.

## Trace one interaction

After your refactor, trace this case:

```text
Current state:
I-204 is Open

User action:
Click Resolve

Then:
event handler -> dispatch -> action -> reducer -> next state -> render
```

Write one short line for each step.

## Done when

All four interactions still work, but the state-transition rules are centralized in the reducer.

---

# Exercise 7: Why Does Opening Help Run the Product Search Again?

**Type:** Performance investigation  
**Suggested time:** 20 to 25 minutes

## The situation

A product explorer contains:

- a product list
- a search field
- an unrelated **Show help** button

The product search is intentionally expensive.

Searching should recalculate the results.

Opening or closing the help panel should not need to repeat the same product search when the products and query have not changed.

## Starter code

```tsx
import { useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
};

const products: Product[] = [
  { id: "P-1", name: "Coffee Grinder", category: "Kitchen" },
  { id: "P-2", name: "Desk Lamp", category: "Office" },
  { id: "P-3", name: "Coffee Press", category: "Kitchen" },
  { id: "P-4", name: "Laptop Stand", category: "Office" },
  { id: "P-5", name: "Travel Mug", category: "Travel" },
];

function slowSearchProducts(
  source: Product[],
  query: string
) {
  console.count("slowSearchProducts");

  // Simulates an expensive calculation.
  const started = performance.now();

  while (performance.now() - started < 30) {
    // Intentionally busy for this exercise.
  }

  const normalizedQuery =
    query.trim().toLowerCase();

  return source.filter((product) =>
    product.name
      .toLowerCase()
      .includes(normalizedQuery)
  );
}

function ProductExplorer({
  source,
}: {
  source: Product[];
}) {
  const [query, setQuery] =
    useState("");

  const [showHelp, setShowHelp] =
    useState(false);

  const visibleProducts =
    slowSearchProducts(source, query);

  return (
    <section>
      <h1>Product Explorer</h1>

      <input
        value={query}
        onChange={(event) =>
          setQuery(event.currentTarget.value)
        }
        placeholder="Search products"
      />

      <button
        onClick={() =>
          setShowHelp((current) => !current)
        }
      >
        Show help
      </button>

      {showHelp && (
        <p>
          Search matches product names.
        </p>
      )}

      <p>
        {visibleProducts.length} matching products
      </p>

      <ul>
        {visibleProducts.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <ProductExplorer source={products} />
  );
}

export default App;
```

## Investigate first

Open the console.

Try these separately:

1. Change the search query.
2. Click **Show help** several times.

Watch the `slowSearchProducts` counter.

If your development setup performs extra checks and you see more than one call, do not rely on the exact number. Compare whether the **Show help** interaction causes new search calculations before and after your change.

Before editing the code, answer:

**Which values can actually change the result of `slowSearchProducts(source, query)`?**

## Your task

Make the smallest React change that allows the previous calculation result to be reused when the values needed by that calculation have not changed.

Do not remove the simulated expensive work.

## Verify your change

After your solution:

- changing the query should calculate new results
- toggling **Show help** should be able to reuse the previous calculation result
- the calculation should still declare every changing input it depends on

## Explain

Why would you **not** automatically apply the same optimization to every small calculation in a React component?

---

# Exercise 8: The Memoized Result List Still Renders

**Type:** Performance investigation  
**Suggested time:** 20 to 30 minutes

## The situation

A search page already memoizes its filtered results.

Its result list is also wrapped in `memo` because rendering that child is expensive.

There is still a problem:

Clicking **Show help** causes the result list to render again even though:

- the query has not changed
- the filtered results have not changed

## Starter code

```tsx
import {
  memo,
  useMemo,
  useState,
} from "react";

type Result = {
  id: string;
  title: string;
};

const allResults: Result[] = [
  { id: "R-1", title: "React state patterns" },
  { id: "R-2", title: "TypeScript with components" },
  { id: "R-3", title: "React performance notes" },
  { id: "R-4", title: "Testing frontend applications" },
];

type ResultListProps = {
  results: Result[];
  onChoose: (resultId: string) => void;
};

const ResultList = memo(
  function ResultList({
    results,
    onChoose,
  }: ResultListProps) {
    console.count("ResultList render");

    return (
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.title}
            {" "}
            <button
              onClick={() =>
                onChoose(result.id)
              }
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
    );
  }
);

function App() {
  const [query, setQuery] =
    useState("");

  const [showHelp, setShowHelp] =
    useState(false);

  const [message, setMessage] =
    useState("Nothing selected");

  const visibleResults =
    useMemo(() => {
      const normalized =
        query.trim().toLowerCase();

      return allResults.filter((result) =>
        result.title
          .toLowerCase()
          .includes(normalized)
      );
    }, [query]);

  function handleChoose(resultId: string) {
    setMessage(
      `Selected ${resultId} from query "${query}"`
    );
  }

  return (
    <main>
      <h1>Search Results</h1>

      <input
        value={query}
        onChange={(event) =>
          setQuery(event.currentTarget.value)
        }
        placeholder="Search"
      />

      <button
        onClick={() =>
          setShowHelp((current) => !current)
        }
      >
        Show help
      </button>

      {showHelp && (
        <p>
          Search the available learning resources.
        </p>
      )}

      <p>{message}</p>

      <ResultList
        results={visibleResults}
        onChoose={handleChoose}
      />
    </main>
  );
}

export default App;
```

## Investigate first

Open the console and compare these interactions:

1. Toggle **Show help**.
2. Change the search query.

Focus on whether an interaction causes another `ResultList` render. Your development setup may perform additional checks, so the exact starting count is less important than the before-and-after behaviour.

Inspect the props passed to `ResultList`.

One prop already keeps the same reference when its inputs have not changed.

Another prop is created again when `App` renders.

## Your task

Preserve the callback reference when the values used by that callback have not changed.

Be careful: `handleChoose` reads a changing value from the component.

Your dependency choice must preserve the current message behaviour.

## Verify your change

After your solution:

- toggling **Show help** should not require a new result-list render when its props are unchanged
- changing the query should still update the filtered results
- choosing a result should still include the current query in the message

## Explain

Answer in 2 to 3 sentences:

**Would wrapping every event handler in the same Hook automatically make a React application faster? Why or why not?**

---

# Exercise 9: Build an API Team Directory

**Type:** Independent mini build  
**Suggested time:** 45 to 60 minutes

## The product brief

Build a small **Team Directory**.

When the page opens, it should load users from:

```text
https://jsonplaceholder.typicode.com/users
```

A user record from this API contains information such as:

```text
id
name
email
company.name
```

Your interface should let someone search the loaded directory by name or email.

## Expected experience

A possible starting state:

```text
Team Directory

[ Search by name or email ]

Loading team...
```

After the request succeeds:

```text
Team Directory

[ Search by name or email ]

Leanne Graham
Sincere @ Apricot
leanne@example.com

...
```

The exact visual design is up to you.

## Your task

Build the feature from scratch using React and TypeScript.

Your implementation should include:

### External data

Define a TypeScript type for the user data you actually use.

Load the users with Axios.

Use an Effect to perform the initial request.

### Request state

The interface must be able to represent all four situations:

```text
loading
request failed
request succeeded but no users are available
users are available
```

### Search

Add a controlled search field.

Search should work on the users that have already been loaded.

Typing in the search field should **not** make another API request.

Search by:

```text
name
or
email
```

If the request succeeded but the current query matches nobody, show a clear message such as:

```text
No matching users.
```

### Rendering

Render the matching users from the current data.

Use the API user's `id` as the stable key.

Do not store a second independent copy of `filteredUsers` in state if it can be calculated from the current users and query.

## Keep the scope focused

Do not add:

- routing
- Context
- Redux
- POST, PATCH, or DELETE requests
- additional state-management libraries

## Testing the request states

Make sure you can observe the states you implemented. If needed while testing, temporarily use an invalid endpoint to force the failure state, then restore the correct endpoint. You can also temporarily test with an empty user array to confirm the successful-empty state.

## Done when

Verify all of these:

- Refreshing the page loads users.
- Loading feedback appears while the request is in progress.
- A failed request has a visible failure state.
- Searching immediately changes the visible users.
- Search does not trigger another API request.
- No-match feedback appears when appropriate.
- TypeScript describes the API data you render.
- List items use stable IDs.

---

# Exercise 10: Build an Issue Triage Board

**Type:** Independent mini build  
**Suggested time:** 60 to 75 minutes

## The product brief

Build a small internal **Issue Triage Board**.

A team receives issues such as:

```text
Checkout button overlaps footer
Invoice total is incorrect
Profile image fails to upload
```

Each issue has:

```tsx
type Priority =
  | "low"
  | "medium"
  | "high";

type Issue = {
  id: string;
  title: string;
  priority: Priority;
  resolved: boolean;
};
```

Start with these issues:

```tsx
const initialIssues: Issue[] = [
  {
    id: "I-101",
    title: "Checkout button overlaps footer",
    priority: "high",
    resolved: false,
  },
  {
    id: "I-204",
    title: "Invoice total is incorrect",
    priority: "high",
    resolved: false,
  },
  {
    id: "I-318",
    title: "Profile image fails to upload",
    priority: "medium",
    resolved: true,
  },
];
```

You may use this helper when creating a new issue:

```tsx
function createIssueId() {
  return `I-${Date.now()}`;
}
```

## Required behaviour

The user should be able to:

```text
add an issue
resolve an issue
reopen an issue
remove an issue
reset the board
```

## Part 1: Build the issue form

Create a controlled form with:

```text
Issue title
Priority
Add issue
```

The title is required.

After a successful addition:

- clear the title field
- return keyboard focus to the title input

Use React's typed DOM-access pattern for the focus behaviour.

## Part 2: Manage issue transitions

Manage the issue collection with `useReducer`.

Design a typed action union that can represent everything your board supports.

The reducer should calculate replacement state for the collection.

Keep the reducer pure.

Event handlers should dispatch actions rather than calculate the next issue array themselves.

## Part 3: Render the board

For every issue, show at least:

```text
title
priority
current status
available actions
```

Use `issue.id` as the list key.

For example:

```text
Invoice total is incorrect
Priority: High
Status: Open
[ Resolve ] [ Remove ]
```

A resolved issue should offer **Reopen** rather than **Resolve**.

## Part 4: Show a live summary

Display:

```text
Total issues: ...
Open issues: ...
Resolved issues: ...
```

Calculate these values from the current issue collection.

Do not maintain three extra state variables for these counts.

## Part 5: Reset

Add **Reset board**.

Reset should restore the original `initialIssues`.

## Performance decision

Do **not** add `useMemo` or `useCallback` simply because they were covered in Lecture 24.

This board has no supplied performance problem.

If you believe one of those Hooks is justified, write one sentence describing the measured or observable problem it solves before adding it.

## Done when

Your board should satisfy all of these:

- The form uses controlled React state.
- Blank titles are not added.
- New issues receive an ID.
- The issue collection is managed with a typed reducer.
- Resolve, Reopen, Remove, and Reset work.
- Reducer updates are immutable.
- The title input regains focus after a successful addition.
- Total, open, and resolved counts always match the current board.
- `issue.id` is used as the rendered key.
- The project has no unintended TypeScript errors.

---

# Final self-check

Before you consider the exercise set complete, ask yourself:

1. When I updated a collection, did I calculate replacement state instead of mutating the current state?
2. When I used an Effect, could I explain what outside system or request it was synchronizing with?
3. If an Effect established ongoing external behaviour, did I think about cleanup?
4. Did my Effect dependencies match the changing values used by the synchronization?
5. Did I use state only for information the component actually needs to remember?
6. Did I calculate derived values from existing state when possible?
7. Did I use a ref for DOM access rather than storing a DOM element in state?
8. When I used a reducer, were the possible transitions easy to identify?
9. If I used memoization, could I point to the repeated work or reference-identity problem it was solving?
10. Does the user-visible behaviour still work after my refactor or optimization?
