import { Link, Route, Routes } from "react-router-dom";
import DayOneSchedule from "./pages/DayOneSchedule";
import DayTwoSchedule from "./pages/DayTwoSchedule";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import SessionDetails from "./pages/SessionDetails";
import Sessions from "./pages/Sessions";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Conference Hub</h1>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/sessions">Sessions</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/:sessionId" element={<SessionDetails />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/schedule" element={<Schedule />}>
            <Route path="day-1" element={<DayOneSchedule />} />
            <Route path="day-2" element={<DayTwoSchedule />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
