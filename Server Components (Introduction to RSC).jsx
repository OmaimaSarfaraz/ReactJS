//app/page.jsx
// This is a Server Component by default

import UserList from "./UserList";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h1>React Server Component Example</h1>
      <UserList users={users} />
    </div>
  );
}



//app/UserList.jsx

"use client"; // This makes it a Client Component

export default function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}


//Make sure you have Next.js 13 or later:
//Run these commands on terminal to make new app file
//npx create-next-app@latest my-next-app
//cd my-next-app