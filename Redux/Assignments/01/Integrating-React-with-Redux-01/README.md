## Instructions

### Assignment: Integrating React with Redux
**Level:** Level 1  
**Time to solve:** 40 mins

### Overview
This assignment focuses on integrating React with Redux, a predictable state container for JavaScript applications. You will learn how to set up a React application with Redux and manage state efficiently using Redux principles. By completing this assignment, you will gain practical experience in integrating Redux into React applications and understand how to organize Redux logic within a React project.

**Use of Chakra UI is mandatory**

### Detailed Explanation
#### Topics
- Setting up Redux in a React application
- Creating actions, reducers, and the Redux store
- Connecting React components to the Redux store
- Dispatching actions to update the Redux state
- Accessing state data from the Redux store in React components

### Problem Statement
You are tasked with integrating Redux into a React application. Follow these guidelines:

1. **Redux Setup:** Initialize a Redux store with an initial state and a reducer function.
2. **React Integration:** Connect React components to the Redux store using the hooks provided by react-redux.
3. **Define Actions:** Create action types and action creators to represent different actions that can be performed in the application.
4. **Implement Reducers:** Write reducer functions to handle each action type and update the Redux state accordingly.
5. **Dispatch Actions:** Dispatch actions to the Redux store from React components to trigger state updates.
6. **Access State:** Access state data from the Redux store in React components using `mapStateToProps` function.

### Create a Todo Application
Todo app should have the below given functionalities:

- Adding a new todo
- Updating the status of a todo
- Deleting the todo

#### Structure of todo
```javascript
const todo = {
    title: "string",
    status: "boolean",
    id: "UniqueId"
}
```

### Submission Guidelines
1. Push your code to GitHub and share the GitHub repository link.
2. Ensure that your React application runs without errors and integrates Redux as described in the problem statement.
3. Include any additional observations or learnings in the README.md file of your project.