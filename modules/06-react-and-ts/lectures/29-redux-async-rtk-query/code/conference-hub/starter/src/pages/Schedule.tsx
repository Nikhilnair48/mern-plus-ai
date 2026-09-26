import { NavLink, Outlet } from "react-router-dom";

function Schedule() {
  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Schedule</h2>
      <nav className="sub-nav" aria-label="Schedule days">
        <NavLink to="day-1">Day 1</NavLink>
        <NavLink to="day-2">Day 2</NavLink>
      </nav>
      <div className="child-panel">
        <Outlet />
      </div>
    </section>
  );
}

export default Schedule;
