import {useState} from 'react'
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      {!showComponent && <p>Click the Toggle button to show the timer</p>}
      <button onClick={() => setShowComponent(!showComponent)}>Toggle</button>
      {showComponent && <><Timer /> <p>Click the Toggle button to hide the timer</p></>}
    </>
  );
}

export default App;
