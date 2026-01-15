//useToggle Hook
import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((prev) => !prev);
  }

  return [value, toggle];
}

export default useToggle;


//Using the Hook
import useToggle from "./useToggle";

function App() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p>Hello from Custom Hook!</p>}
    </div>
  );
}

//export default App; it's commented in this not in code



//useFetch Hook (Fetching Data)
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

//export default useFetch; it's commented in this not in code


//Using the Hook
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

//export default App;  it's commented in this not in code