import './App.css';

function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card" aria-labelledby="welcome-title">
        <p className="eyebrow">OMNISIMULATORS</p>
        <h1 id="welcome-title">OmniSim</h1>
        <p className="welcome-copy">
          Your React project is ready. Start building the first feature here.
        </p>
        <div className="ready-indicator">
          <span className="ready-dot" aria-hidden="true" />
          Development environment ready
        </div>
      </section>
    </main>
  );
}

export default App;
