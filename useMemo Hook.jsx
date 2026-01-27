import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const slowCalculation = (num) => {
    console.log("Running heavy calculation...");
    let value = 0;
    for (let i = 0; i < 1000000000; i++) {
      value += 1;
    }
    return num * 2;
  };

  const expensiveValue = useMemo(() => slowCalculation(count), [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>useMemo Example</h1>

      <h2>Expensive Value: {expensiveValue}</h2>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>

      <input 
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Typing: {text}</p>
    </div>
  );
}

export default App;