//src/api/userResource.js

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    });
}

// Suspense Wrapper
function wrapPromise(promise) {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

export function getUserResource() {
  return {
    users: wrapPromise(fetchUsers()),
  };
}




//src/UserList.jsx

export default function UserList({ resource }) {
  const users = resource.users.read(); // Suspense will pause here

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}




//src/App.jsx
import { Suspense } from "react";
import { getUserResource } from "./api/userResource";
import UserList from "./UserList";

const resource = getUserResource();

export default function App() {
  return (
    <div>
      <h1>React 18 Suspense for Data Fetching</h1>

      <Suspense fallback={<h3>Loading users...</h3>}>
        <UserList resource={resource} />
      </Suspense>
    </div>
  );
}