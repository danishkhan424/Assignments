# Instructions

## Overview

In this assignment, you will create a React application that performs network requests to an API when a user clicks a button. This project aims to familiarize you with React functional components, hooks, and handling network requests in React.

### Objectives

- Create a functional React component that triggers a network request on a button click.
- Manage the state using React hooks.
- Display the data received from the network request in a presentable format.

### Prerequisites

- Basic understanding of JavaScript, HTML, and CSS.
- Familiarity with React and React Hooks.

### Setup Instructions

<b>1. Create a New React Project with Vite:</b>

- Run `npm create vite@latest <name-of-app> -- --template react` in your terminal to create a new React project using Vite.
- Navigate to your project directory using `cd <name-of-project>`.
- Install the necessary packages by running `npm install`.
- Start the development server with `npm run dev`.

<b>2. Project Structure:</b>

- Create the following file structure in your project:

    ├── src
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── App.jsx
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── components
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── DataDisplay.jsx
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── main.jsx

### Assignment Details

##### Basic Level

<b>1. Create `DataDisplay` Component:</b>

- Inside `DataDisplay.jsx`, create a functional component named `DataDisplay`.
- This component should accept `data` as props and display it in a formatted manner.

<b>2. Setup State in `App.jsx`:</b>

- Use `useState` to create three state variables: `data`, `isLoading`, and `error`.
- Initialize `data` as an empty array, `isLoading` as `false`, and `error` as `null`.

##### Intermediate Level

<b>1. Fetch Data Functionality:</b>

- In `App.jsx`, write an asynchronous function `fetchData` that makes a network request to an API endpoint (e.g., `https://jsonplaceholder.typicode.com/posts`).
- Use `try-catch` blocks to handle potential errors.
- Update the `data`, `isLoading`, and `error` states appropriately based on the request's outcome.

<b>2. Handle Loading and Error States:</b>

- Render different UI elements based on the state of `isLoading` and `error`.

##### Advanced Level

<b>1. Implement Button Click to Trigger Request:</b>

- Add a button to `App.jsx` that, when clicked, calls the `fetchData` function.
- Ensure that the UI reflects the loading state while the request is being made.

<b>2. Enhance `DataDisplay` Component:</b>

- Improve the `DataDisplay` component to elegantly display the data. Consider using CSS for styling.
- Display a message if there are no data items to show.

<b>3. Error Handling:</b>

- Improve error handling in `App.jsx` and display an appropriate message if an error occurs during the network request.

##### Deliverables

1. A functional React application that loads data from an API on a button click.
2. Proper state management using React hooks.
3. Clean and readable code with comments where necessary.
4. Styled components providing a good user experience.