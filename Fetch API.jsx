//App.jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Fetching Data with Fetch API</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ margin: "10px 0" }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;