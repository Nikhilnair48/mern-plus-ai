function Planner() {
  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>My Planner</h2>
      <p className="muted">Keep track of the sessions you plan to attend.</p>
      <div className="empty-state">
        <p>No sessions saved yet.</p>
        <p className="muted">Save a session from the Sessions page to see it here.</p>
      </div>
    </section>
  );
}

export default Planner;
