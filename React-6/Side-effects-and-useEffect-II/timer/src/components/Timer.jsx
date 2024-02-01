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
      <h3>Countdown timer is {count}</h3>
          <button onClick={() => setIsActive(!isActive)}>Pause</button>
          <button onClick={() => setCount(20)}>Reset</button>
          <button onClick={()=> setIsActive(true)}>Resume</button>
    </>
  );
}

export default Timer;
