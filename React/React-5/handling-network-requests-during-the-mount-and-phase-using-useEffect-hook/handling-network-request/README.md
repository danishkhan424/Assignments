# Instructions

## Overview

This assignment will guide you through creating a React application that automatically fetches data when the component mounts and implements pagination. You will utilize the `useEffect` hook for side effects and manage state changes to handle pagination.

### Objectives

- Learn to use the useEffect hook for performing side effects in functional components.
- Implement pagination logic in a React application.
- Handle network requests and state updates efficiently.

### Prerequisites

- Basic understanding of JavaScript, React, HTML, and CSS.
- Familiarity with React Hooks, particularly useState and useEffect.

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
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── PostItem.jsx
    │   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── main.jsx

### Assignment Details

##### Basic Level

<b>1. Automatic Data Fetch on Component Mount:</b>

- Modify App.jsx to fetch data from an API (e.g., https://jsonplaceholder.typicode.com/posts?_limit=10) using the useEffect hook when the component mounts.
- Implement state management for loading, posts, and error.

<b>2. Display Posts:</b>

- Use the PostItem component to display each post.
- Handle loading and error states with appropriate UI elements.

##### Intermediate Level

<b>1. Implement Pagination State:</b>

- Add a page state in App.jsx to manage the current page number.
- Initialize page with a default value of 1.

<b>2. Update Data Fetch on Page Change:</b>

- Modify the useEffect dependency array to include page.
- Update the API URL dynamically based on the current page number.

##### Advanced Level

<b>1. Pagination Controls:</b>

- Add "Previous" and "Next" buttons to navigate through pages.
- Update the page state correctly when these buttons are clicked.

<b>2. Enhanced Pagination Logic:</b>

- Implement logic to prevent navigating to a previous page if already on the first page.
- Similarly, add a condition to restrict further page increments if the end of data is reached (if applicable).

##### Deliverables

1. A functional React application that automatically fetches data on component mount.
2. Pagination feature to navigate through data in a paginated format.
3. Appropriate handling of loading, error, and data states.
4. Clear and concise code with comments for important sections.
