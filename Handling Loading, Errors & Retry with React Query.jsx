//Setup React Query
//npm install @tanstack/react-query
//npm install @tanstack/react-query-devtools

//main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);



//Users.jsx

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => res.data),
    retry: 2,           // Retry 2 times on failure
    refetchOnWindowFocus: false, // Do not refetch when window gains focus
  });

  if (isLoading) return <h3>Loading users...</h3>;
  if (isError) return <h3 style={{ color: "red" }}>Error: {error.message}</h3>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users List with Loading & Retry</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

//export default Users;



//App.jsx

import React from "react";
import Users from "./Users";  // Users component import kiya

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>React Query Loading & Retry Demo</h1>
      <Users /> {/* Users component ko render kiya */}
    </div>
  );
}

export default App;