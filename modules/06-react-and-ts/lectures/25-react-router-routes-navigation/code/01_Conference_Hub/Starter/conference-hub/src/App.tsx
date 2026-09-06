import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions";
import Schedule from "./pages/Schedule";
import SessionDetails from "./pages/SessionDetails";
import DayOneSchedule from "./pages/DayOneSchedule";
import DayTwoSchedule from "./pages/DayTwoSchedule";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Conference Hub</h1>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/sessions">Sessions</Link>
          <Link to="/schedule">Schedule</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/:sessionId" element={<SessionDetails />} />
          
          <Route path="/schedule" element={<Schedule />}>
            <Route path="day-1" element={<DayOneSchedule />} />
            <Route path="day-2" element={<DayTwoSchedule />} />
          </Route>
        </Routes>
        

        {/* TODO 4: Add the dynamic session-detail route when that concept is introduced. */}
        {/* TODO 8: Later, turn Schedule into a parent route with Day 1 and Day 2 children. */}
      </main>
    </div>
  );
}

export default App;
