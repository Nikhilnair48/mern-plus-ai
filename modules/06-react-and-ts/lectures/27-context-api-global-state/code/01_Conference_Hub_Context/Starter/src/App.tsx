import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import DayOneSchedule from "./pages/DayOneSchedule";
import DayTwoSchedule from "./pages/DayTwoSchedule";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import SessionDetails from "./pages/SessionDetails";
import Sessions from "./pages/Sessions";
import type { DisplayMode } from "./types/displayPreferences";

function App() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("comfortable");

  function handleDisplayModeChange(nextMode: DisplayMode) {
    setDisplayMode(nextMode);
  }

  return (
    <div className="app-shell">
      {/* TODO — Slides 17–22
       * Give distant descendants a shared access path
       * without moving this state out of App.
       */}
      <AppHeader displayMode={displayMode} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                displayMode={displayMode}
                onDisplayModeChange={handleDisplayModeChange}
              />
            }
          />
          <Route
            path="/sessions"
            element={<Sessions displayMode={displayMode} />}
          />
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
