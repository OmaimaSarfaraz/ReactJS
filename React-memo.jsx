//Child.jsx
import React from "react";

function Child({ value }) {
  console.log("Child Rendered");
  return <h2>Child Value: {value}</h2>;
}

//export default React.memo(Child);




// App.jsx
import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <h1>React.memo Example</h1>

      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Parent</button>

      <hr/>

      <Child value={other} />
      <button onClick={() => setOther(other + 1)}>Increase Child</button>
    </div>
  );
}

export default App;