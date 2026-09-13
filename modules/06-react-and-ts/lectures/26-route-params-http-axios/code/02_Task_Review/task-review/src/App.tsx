import { Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Task Review</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
