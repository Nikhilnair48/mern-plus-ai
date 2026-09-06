import type { Session } from "./sessionData";

type SessionListProps = {
  sessions: Session[];
  onSelect: (sessionId: string) => void;
};

export function SessionList({
  sessions,
  onSelect,
}: SessionListProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {sessions.slice(0, 8).map((session) => (
        <article
          key={session.id}
          className="rounded-xl border border-slate-200 bg-white p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">
                {session.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {session.speaker}
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              {session.level}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-blue-700">
              {session.track}
            </span>

            <button
              type="button"
              onClick={() => onSelect(session.id)}
              className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View session
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
