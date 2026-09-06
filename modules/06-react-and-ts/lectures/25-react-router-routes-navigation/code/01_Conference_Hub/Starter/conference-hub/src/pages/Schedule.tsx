import { Link, Outlet } from "react-router-dom";

function Schedule() {
  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Schedule</h2>
      <p className="muted">The conference schedule is organized across two days.</p>

      <nav className="sub-nav">
        <Link to="/schedule/day-1">Day 1</Link>
        <Link to="/schedule/day-2">Day 2</Link>
      </nav>
      <Outlet />
    </section>
  );
}

export default Schedule;
