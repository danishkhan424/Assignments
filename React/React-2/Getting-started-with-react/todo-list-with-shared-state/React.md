# Problem-11

## Instructions

##### Boilerplate Code for Students:

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
    <script src="<https://www.unpkg.com/react@18.2.0/umd/react.development.js>"></script>
    <script src="<https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js>"></script>
    <script src="<https://unpkg.com/@babel/standalone/babel.min.js>"></script>
    <script type="text/babel">
        // Code goes here
    </script>
    </html>

#### Overview

Create a Todo List application where the user can add, delete, and mark tasks as completed. Implement state upliftment to manage state across multiple components.

#### Instructions

- Design a parent component (`TodoApp`) and child components (`AddTodo`, `TodoList`).
- `AddTodo`: Input field and button to add new tasks.
- `TodoList`: Display list of tasks with options to delete or mark as completed.
- Use `useState` in the parent component to manage the list of tasks.
- Pass necessary state and functions as props to child components.