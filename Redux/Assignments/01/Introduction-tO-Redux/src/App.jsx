import { useState } from "react";
import "./App.css";
import { legacy_createStore } from "redux";

const updateCount = "updateCount";
const reset = "reset";
const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case updateCount:
      return payload;
    case reset:
      return 0;
    default:
      return state;
  }
}


const store = legacy_createStore(counterReducer);
function App() {
  const [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState());
    console.log(store.getState());
  })

  return (
    <>
      <div>
        <pre className="counter">
          <div>
            <h2>Counter: {JSON.stringify(store.getState())}</h2>
          </div>
        </pre>
        <div className="counterButtons">
          <button
            onClick={() =>
              store.dispatch({
                type: updateCount,
                payload: store.getState() - 1,
              })
            }
          >
            Decrease
          </button>
          <button onClick={() => store.dispatch({ type: reset })}>Reset</button>
          <button
            onClick={() =>
              store.dispatch({
                type: updateCount,
                payload: store.getState() + 1,
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
