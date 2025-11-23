//Input Field
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}


//Textarea
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <textarea 
        placeholder="Write your feedback" 
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)} 
      />
      <p>Your Feedback: {feedback}</p>
    </div>
  );
}


//Select (Dropdown)
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("JavaScript");

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>JavaScript</option>
        <option>Python</option>
        <option>Java</option>
        <option>C++</option>
      </select>
      <h2>Selected: {language}</h2>
    </div>
  );
}

export default App;