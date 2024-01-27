
 function Counter({count,setCount}) {
    return (
      <div>
        <h2>My count is: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    );
}

export default Counter