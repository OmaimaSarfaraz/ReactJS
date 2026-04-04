import { useState } from 'react';

// A basic functional component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="World" />
    </div>
  );
}
