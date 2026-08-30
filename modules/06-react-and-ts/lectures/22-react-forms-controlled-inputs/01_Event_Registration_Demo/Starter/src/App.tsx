function App() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <h1>Event registration</h1>
        <p>We will connect this form control to React state during the lecture.</p>
      </header>

      <div className="demo-grid">
        <section className="panel">
          <div className="form-stack">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
            </div>
          </div>
        </section>

        <aside className="panel state-panel">
          <h2>Current React state</h2>
          <p>The input is not connected to component state yet.</p>
        </aside>
      </div>
    </main>
  );
}

export default App;
