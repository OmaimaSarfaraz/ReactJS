//useState with Arrays
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  function addFruit() {
    setFruits([...fruits, "Mango"]);
  }

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </div>
  );
}



//useState with Objects
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Omaima",
    age: 20
  });

  function updateAge() {
    setUser({ ...user, age: user.age + 1 });
  }

  return (
    <div>
      <h1>{user.name} is {user.age} years old.</h1>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}

export default App;