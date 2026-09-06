import { useReducer, useState } from "react";
import {
  initialReadingItems,
  type ReadingItem,
} from "./readingData";

const statusLabels = {
  queued: "Queued",
  reading: "Reading",
  finished: "Finished",
} as const;

const statusStyles = {
  queued: "bg-blue-50 text-blue-700 ring-blue-600/20",
  reading: "bg-amber-50 text-amber-700 ring-amber-600/20",
  finished: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
} as const;

// 1. define the ReadingAction -> { type, itemId }
// using the pipe operator (|)
type ReadingAction = 
  | { type: "started"; itemId: string; }
  | { type: "finished"; itemId: string; }
  | { type: "removed"; itemId: string; }
  | { type: "reset"; };


// 2. define the reducer function
// Input: items: ReadingItem[], action: ReadingAction
// Pure function
function readingReducer(items: ReadingItem[], action: ReadingAction): ReadingItem[] {
  switch (action.type) {
    case "started":
      return items.map((item) =>
        item.id === action.itemId ? { ...item, status: "reading" } : item);
    case "finished":
      return items.map((item) =>
        item.id === action.itemId ? { ...item, status: "finished" } : item);
    // case "removed":
    // case "reset":
    default:
      return items;
  }
}

export function ReadingQueue() {
  // const [items, setItems] = useState(initialReadingItems);

  // 3. define a reducer which connects the component to:
  // a) reducer function b) initialReadingItems for the initial reducer state
  const [items, dispatch] = useReducer(readingReducer, initialReadingItems);

  function handleStart(itemId: string) {
    // 4. Dispatch will trigger the reducer function with an action
    dispatch(
      { type: "started", itemId }
    );
  }

  function handleFinish(itemId: string) {
    dispatch(
      { type: "finished", itemId }
    );
  }

  function handleRemove(itemId: string) {
    // setItems(
    //   items.filter((item) => item.id !== itemId),
    // );
  }

  function handleReset() {
    // setItems(initialReadingItems);
  }

  return (
    <QueueView
      items={items}
      onStart={handleStart}
      onFinish={handleFinish}
      onRemove={handleRemove}
      onReset={handleReset}
    />
  );
}

type QueueViewProps = {
  items: ReadingItem[];
  onStart: (id: string) => void;
  onFinish: (id: string) => void;
  onRemove: (id: string) => void;
  onReset: () => void;
};

function QueueView({
  items,
  onStart,
  onFinish,
  onRemove,
  onReset,
}: QueueViewProps) {
  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Learning library
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Reading Queue
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {items.length} items
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Reset queue
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-200 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {item.id}
                </p>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[item.status]}`}
              >
                {statusLabels[item.status]}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.status === "queued" && (
                <button
                  type="button"
                  onClick={() => onStart(item.id)}
                  className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Start
                </button>
              )}

              {item.status === "reading" && (
                <button
                  type="button"
                  onClick={() => onFinish(item.id)}
                  className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Finish
                </button>
              )}

              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
