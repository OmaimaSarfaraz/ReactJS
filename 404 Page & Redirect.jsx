//NotFound.jsx

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{ color: "blue" }}>
        Go Back Home
      </Link>
    </div>
  );
}

//export default NotFound;


//App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* 404 Page Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

//export default App;



//Redirecting Users (Navigate)
//Redirect from old route  //App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Redirect old page to new one */}
        <Route path="/old-about" element={<Navigate to="/about" />} />

        {/* 404 Page */}
        <Route path="*" element={<h2>404 Page Not Found 🚫</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;