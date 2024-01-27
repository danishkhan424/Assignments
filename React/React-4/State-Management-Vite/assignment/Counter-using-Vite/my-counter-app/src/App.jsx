import { useState } from 'react';
import Counter from './Counter.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App
