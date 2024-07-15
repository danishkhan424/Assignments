import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decreament, Increament, Reset } from "./Redux/actionTypes";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const { increament, decreament } = store;

  return (
    <>
      <div>
        <pre className="counter">
          <div>
            <h2>Counter: {JSON.stringify(store)}</h2>
          </div>
        </pre>
        <div className="counterButtons">
          <button
            onClick={() =>
              dispatch({
                type: Decreament,
                payload: decreament - 1,
              })
            }
          >
            Decrease
          </button>
          <button onClick={() => dispatch({ type: Reset })}>Reset</button>
          <button
            onClick={() =>
              dispatch({
                type: Increament,
                payload: increament + 1,
              })
            }
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
