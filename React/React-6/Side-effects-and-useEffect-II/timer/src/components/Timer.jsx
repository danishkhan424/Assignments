import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(20);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
      let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            setIsActive(false);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
      }
      
      return () => clearInterval(interval)
          
      
  }, [isActive]);
  return (
    <>
      <h2>Timer left is {count}</h2>
      <button onClick={() => setIsActive(!isActive)}>Pause</button>
      <button onClick={() => setCount(20)}>Reset</button>
      <button onClick={() => setIsActive(true)}>Resume</button>
      <h4>Click the Toggle button to hide the timer</h4>
    </>
  );
}

export default Timer;
