import PackingList from "./components/PackingList";
import SupportDashboard from "./components/SupportDashboard";

function Counter() {
  let count = 0;

  function handleClick() {
    count++;
    console.log(count);
  }
  // Fragments: <> ... </>
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  )
}

// return <Counter />;
function App() {
    return (
      <main className="page">
        <SupportDashboard />
        <PackingList />
      </main>
    );
}

export default App;

