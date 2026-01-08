//useEffect with Dependencies
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  useEffect(() => {
    console.log("useEffect ran because count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>{text}</h2>
      <button onClick={() => setText("Hi!")}>Change Text</button>
    </div>
  );
}



//Multiple Dependencies 
useEffect(() => {
  console.log("Either count or text changed!");
}, [count, text]);



//Cleanup Function
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect started");
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Cleanup: Timer stopped");
    };
  }, []);

  return <h1>Count: {count}</h1>;
}



//Cleanup on Dependency Change
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect running for count:", count);

    return () => {
      console.log("Cleanup before next effect run");
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;