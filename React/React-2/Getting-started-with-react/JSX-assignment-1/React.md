# Problem-04

### Instructions

## Task Overview
Create a React element using JSX with specific requirements. Your task is to demonstrate understanding of React Fragments, JSX syntax, class handling, and event handling in React.

#### Requirements

Template: 

    <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script type="text/babel">
    </script>
    </body>
    </html>

1. <b>React Fragment Wrapper:</b> The entire structure should be wrapped within a React Fragment (`<React.Fragment>` or `<>`).
2. <b>Paragraph Element:</b> Include a paragraph (`<p>`) element with the text “React is a javascript library”.
3. <b>Div Element with Class `main`:</b> 
    - This `div` should have the class name `main`.
    - It should contain the following elements: 
        - A paragraph (`<p>`) element with the text “Click the below button to alert 'Hello'”.
        - A button element with the text “Alert Hello”.
4. <b>Button Functionality:</b>
    - Clicking the button should trigger an alert with the message “Hello”.


## Assignment Instructions

1. <b>Setting Up Your React Component:</b>
    - Create a functional component named `MyComponent`.
    - Inside this component, return the JSX structure as per the requirements.
2. <b>Implementing React Fragment:</b>
    - Use `<React.Fragment>` or `<>` to wrap your JSX elements.
3. <b>Creating Elements:</b>
    - Add the required `p` and `div` elements inside the React Fragment.
    - Apply the class `main` to the `div` element.
4. <b>Handling the Button Click:</b>
    - Define a function inside your component that triggers an `alert('Hello')` when called.
    - Attach this function to the onClick event of the button.
5. <b>Rendering Your Component:</b>
    -Ensure your component is correctly rendered within a React application (e.g., use it in `App.js` or any other parent component).

### Example Code

    import React from 'react';

    function MyComponent() {
    const showAlert = () => {
        alert('Hello');
    };

    return (
        <React.Fragment>
        <p>React is a javascript library</p>
        <div className="main">
            <p>Click the below button to alert 'Hello'</p>
            <button onClick={showAlert}>Alert Hello</button>
        </div>
        </React.Fragment>
    );
    }

    export default MyComponent;

### Additional Challenges (Optional)

1. <b>Styling:</b> Apply inline styles to the `div` element to make it visually appealing.
 
2. <b>Dynamic Text:</b> Modify the button to change its text on each click, toggling between “Alert Hello” and “Alert Bye”.

Remember to test your component to ensure it works as expected. Happy coding!🚀