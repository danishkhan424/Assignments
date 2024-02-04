import {useState} from 'react'
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      {!showComponent && <h2>Click the Toggle button to show the timer</h2>}
      <button onClick={() => setShowComponent(!showComponent)}>Toggle</button>
      {showComponent && <Timer />}
    </>
  );
}

export default App;
