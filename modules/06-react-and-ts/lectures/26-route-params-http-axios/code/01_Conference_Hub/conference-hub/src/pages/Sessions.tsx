import { type FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { sessions } from "../data/sessions";

function Sessions() {
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  
  // const [selectedTrack, setSelectedTrack] = useState("all");
  const [sessionId, setSessionId] = useState("S-102");
  const navigate = useNavigate();

  // null coalescing
  const selectedTrack = searchParams.get("track") ?? "all";
  const visibleSessions =
    selectedTrack === "all"
      ? sessions
      : sessions.filter((session) => session.track === selectedTrack);

  function handleTrackChange(nextTrack: string) {
    if (nextTrack === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({ track: nextTrack });
    // setSelectedTrack(nextTrack);
  }

  /*
   * TODO - Slides 17-19
   * Read the current track selection from the browser address.
   * Give the missing value a clear meaning for this application.
   */

  /*
   * TODO - Slides 20-22
   * Make the browser address represent track-filter changes.
   * Keep one source for the selected track.
   */

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/sessions/${sessionId}`);
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Sessions</h2>
      <p className="muted">Browse the available conference sessions.</p>

      <div className="filter-bar" aria-label="Session track filter">
        {[
          // tuple -> 2 elements
          ["all", "All"],
          ["react", "React"],
          ["typescript", "TypeScript"],
        ].map(([value, label]) => (
          <button
            className={`filter-button ${selectedTrack === value ? "active" : ""}`}
            key={value}
            onClick={() => handleTrackChange(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="item-list">
        {visibleSessions.map((session) => (
          <li className="item-card" key={session.id}>
            <div className="item-copy">
              <Link className="text-link" to={`/sessions/${session.id}`}>
                {session.title}
              </Link>
              <span className="item-meta">Track: {session.track}</span>
            </div>
            <span className="item-id">{session.id}</span>
          </li>
        ))}
      </ul>

      <form className="form-card" onSubmit={handleSubmit}>
        <h3>Open a session</h3>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="session-id">Session ID</label>
            <input
              id="session-id"
              value={sessionId}
              onChange={(event) => setSessionId(event.target.value)}
            />
          </div>
          <button type="submit">Open session</button>
        </div>
      </form>
    </section>
  );
}

export default Sessions;
