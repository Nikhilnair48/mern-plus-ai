import { useRef, useState } from "react";

export function SearchFocus() {
  const [query, setQuery] = useState("");
  // after the component is mounted -> it won't be null
  // searchInputRef.current
  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleFocusSearch() {
    // put the input field in focus state
    console.log(searchInputRef);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }

  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium text-blue-600">
        Conference directory
      </p>

      <h1 className="mt-1 text-2xl font-semibold text-slate-900">
        Session search
      </h1>

      <div className="mt-8">
        <label
          htmlFor="session-search"
          className="block text-sm font-medium text-slate-700"
        >
          Search sessions
        </label>

        <input
          id="session-search"
          type="text"
          ref={searchInputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try React or TypeScript"
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <button
        type="button"
        className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        onClick={handleFocusSearch}
      >
        Focus search
      </button>

      <p className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
        {query
          ? `Searching for "${query}"`
          : "Type a topic to begin searching."}
      </p>
    </main>
  );
}
