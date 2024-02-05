# Problem-08

## Instructions
#### Objective: 
Render a list of items dynamically using props.

##### Boilerplate Code :

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boilerplate Code</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        // Code goes here
    </script>
    </html>

##### Instructions:

1. Create a component named `ItemList`.
2. This component should accept a prop named `items`, an array of strings.
3. Render each item in the array as a list item (`<li>`) within an unordered list (`<ul>`).
4. Test the component by passing different arrays (e.g., `["Apple", "Banana", "Cherry"]`).

##### Challenge: 
Implement a conditional rendering to display a message like "No items found" when the `items` array is empty.

#### Notes for Students
- Remember to import React and ReactDOM at the beginning of your script.
- Make sure to capitalize your component names; this is essential in React.
- Experiment with different props and states to see how they affect the rendering of your components.
- Use the React Developer Tools browser extension to inspect your components and understand their structure and behavior.

###### Good luck and have fun with these assignments! They are designed to strengthen your understanding of React components and props, laying a solid foundation for more advanced topics in React development.