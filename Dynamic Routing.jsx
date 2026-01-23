//Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}
//export default Home; Uncomment in Program


//UserList.jsx
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Omaima" },
  { id: 2, name: "Mariyam" },
  { id: 3, name: "Sara" },
];

function UserList() {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
//export default UserList;  Uncomment in Program


//UserDetails.jsx
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details Page</h2>
      <p>Showing details for user with ID: {id}</p>
    </div>
  );
}
//export default UserDetails;   Uncomment in Program
/*import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Omaima", role: "Frontend Developer" },
  { id: 2, name: "Mariyam", role: "UI Designer" },
  { id: 3, name: "Sara", role: "Backend Engineer" },
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}

export default UserDetails;
*/


//App.jsx:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        {/* Dynamic Route */}
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;