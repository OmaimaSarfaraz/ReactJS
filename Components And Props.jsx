function Welcome() {
  return <h1>Hello, React!</h1>;
}
export default Welcome;


//In separate File 
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Omaima" />
      <Welcome name="Mariyam" />
    </div>
  );
}

export default App;