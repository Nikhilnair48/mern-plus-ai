import TaskFeed from "./TaskFeed";

function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Task Feed</h1>
        <p>Tasks loaded from a remote API.</p>
      </header>

      <TaskFeed />
    </main>
  );
}

export default App;
