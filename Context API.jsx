//Create a new file UserContext.jsx

import { createContext, useState } from "react";

// Step 1: Create Context
export const UserContext = createContext();

// Step 2: Create Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState("Omaima");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}



//Update main.jsx:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);


//In Navbar.jsx:

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <h3>Welcome, {user}!</h3>
    </nav>
  );
}

//export default Navbar;


//In Dashboard.jsx:

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User Dashboard</h2>
      <p>Logged in as: {user}</p>
      <button onClick={() => setUser("Mariyam")}>Switch User</button>
    </div>
  );
}

//export default Dashboard;



//Code (App.jsx):

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;