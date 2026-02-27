// Installing Jest in a React Project run these in terminal
//npm install --save-dev jest @testing-library/react @testing-library/jest-dom
//npm install --save-dev babel-jest @babel/preset-env @babel/preset-react


// Include this in package.json
// "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview",
//     "test": "jest"
//   },

// Then make jest.config.cjs put this
// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};

// Then make babel.config.cjs put this
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

// Then make Button.jsx
import React from "react"; 
export default function Button({ label }) {
  return <button>{label}</button>;
}


// Then make Button.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with label", () => {
  render(<Button label="Click Me" />);
  const btn = screen.getByText("Click Me");
  expect(btn).toBeInTheDocument();
});


// Run the Test with
// npm test