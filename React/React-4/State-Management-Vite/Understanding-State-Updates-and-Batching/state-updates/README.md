# Understanding-State-Updates-and-Batching

## Batching

    import React from 'react'
    // Your task is to explain why the console.log shows the older value of count
    function App() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count); // You will see the older value of count in console
    };

    return (
        <div>
        <p>Button is clicked {count} times</p>
        <button onClick={handleClick}>Click Me</button>
        </div>
    );
    }

    export default App


Whenever we update `state` with the help of `useState` then react will eventually re-render the whole component to reflect the `new state`, but this `re-render` doesn't happen instantly, it's `scheduled` and managed by react's reconciliation process, that's why it's `asynchronous`, so when we try to update the count it will updated instantly but not reflect right away, it scheduled to `happen later`, this process known as `batching`.

<hr/>

    import React from 'react'

    // Your task is to explain why count value is not updated to 3 as expected
    function App() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
            console.log(count);
    };

    return (
        <div>
        <p>Button is clicked {count} times</p>
        <button onClick={handleClick}>Click Me</button>
        </div>
    );
    }

    export default App


- Each `setCount(count + 1)` call doesn't immediately update the `count`. They all see the same initial value of `count`.
- Due to React's batching, all these updates are processed together.
- As a result, `count` increases only by 1, not 3, even though `setCount` is called three times.

As when we need to update state value multiple times, we should use functional form of the state updater function (eg. `setCount(count => count+1)`). this will ensure to update the value correctly and immediately. 