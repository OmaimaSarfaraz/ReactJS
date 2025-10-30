//If-Else
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) 
    {
    return <h1>Welcome back, User!</h1>;
  } 
  else
    {
    return <h1>Please log in</h1>;
  }
}


//Ternary
import { useState } from "react";

function App() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div>
      <h1>{isDay ? "Good Morning" : "Good Night"}</h1>
      <button onClick={() => setIsDay(!isDay)}>Toggle</button>
    </div>
  );
}


//Short-Circuit
import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <h2>This is a secret message</h2>}
    </div>
  );
}

export default App;