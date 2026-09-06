import { useCallback, useMemo, useState } from "react";
import { slowFilterSessions } from "./performanceHelpers";
import { allSessions } from "./sessionData";
import { SessionList } from "./SessionList";

export function SessionBrowser() {
  const [query, setQuery] = useState("");
  const [showTips, setShowTips] = useState(false);
  const [selectedSessionId, setSelectedSessionId] =
    useState<string | null>(null);

  // this is causing the delay in our application
  // when you need react to remember a computed value -> useMemo
  const visibleSessions = useMemo(
    () => slowFilterSessions(
      allSessions,
      query,
    ),
    [query]
  )

  // equivalent of memoization, but for functions
  // when you need react to remember a function -> useCallback
  const handleSelectSession = useCallback((sessionId: string) => {
    setSelectedSessionId(sessionId);
  }, []);

  // function handleSelectSession(sessionId: string) {
  //   setSelectedSessionId(sessionId);
  // }

  const selectedSession = allSessions.find(
    (session) => session.id === selectedSessionId,
  );

  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Conference directory
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Conference sessions
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setShowTips((value) => !value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          {showTips ? "Hide tips" : "Show tips"}
        </button>
      </div>

      <div className="mt-7">
        <label
          htmlFor="session-query"
          className="text-sm font-medium text-slate-700"
        >
          Search sessions
        </label>

        <input
          id="session-query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try react"
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {showTips && (
        <aside className="mt-4 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
          Tip: search by title, track, or speaker.
        </aside>
      )}

      <div className="mt-6 flex items-center justify-between">
        <p className="font-medium text-slate-800">
          {visibleSessions.length} matching sessions
        </p>
        <p className="text-sm text-slate-500">
          Showing first 8
        </p>
      </div>

      <div className="mt-4">
        <SessionList
          sessions={visibleSessions}
          onSelect={handleSelectSession}
        />
      </div>

      <section className="mt-6 rounded-xl bg-slate-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Selected session
        </p>

        {selectedSession ? (
          <>
            <h2 className="mt-2 font-semibold text-slate-900">
              {selectedSession.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {selectedSession.speaker} · {selectedSession.track} ·{" "}
              {selectedSession.level}
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm text-slate-500">
            Choose a session to see its details.
          </p>
        )}
      </section>
    </main>
  );
}
