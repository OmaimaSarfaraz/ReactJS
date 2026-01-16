//Without Context (Problem)
function App() {
  const user = "Omaima";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}</h1>;
}



//With Context API
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = "Omaima";
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext);
  return <h1>Hello, {user}</h1>;
}

export default App;