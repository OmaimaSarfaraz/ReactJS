//Normal CSS File (Traditional Way)
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Hello React Styling</h1>
    </div>
  );
}

//export default App;



//CSS Modules (Modern & Safer)
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello React Styling in CSS Modules</h1>
    </div>
  );
}

//export default App;



//Inline Styles (Quick Dynamic Styling)
function App() {
  const containerStyle = {
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "12px"
  };

  const headingStyle = {
    color: "#007bff",
    fontSize: "2rem"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Inline Styles in React</h1>
    </div>
  );
}

export default App;