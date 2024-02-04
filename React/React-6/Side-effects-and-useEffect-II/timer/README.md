# Instructions

## Overview

In this assignment, you will develop a React application with a Timer component. This exercise will enhance your understanding of state management, component lifecycle, and effects in React functional components.

### Objectives

- Create a Timer component that counts down from a specified number.
- Use `useEffect` for side effects and cleanup related to the timer.
- Manage the visibility of the `Timer` component in the parent component.

### Prerequisites

- Basic knowledge of JavaScript, HTML, CSS, and React.
- Familiarity with React hooks, including `useState` and `useEffect`.

### Setup Instructions

<b>1. Create a React Project:</b>

- Initialize a new React project using Vite: Run `npm create vite@latest <name-of-app> -- --template react`.
- Navigate to the project directory: `cd <name-of-app>`.
- Install dependencies: `npm install`.
- Start the development server: `npm run dev`.

<b>2. Project Structure:</b>

- Organize your project files as follows:

        ├── src
        │   ├── App.jsx
        │   ├── components
        │   │   └── Timer.jsx
        │   └── main.jsx

### Assignment Details

##### Basic Level

<b>1. Setup `App.jsx`:</b>

- In `App.jsx`, implement a state `showComponent` using `useState` to toggle the visibility of the Timer component.
- Add a button to toggle the `showComponent` state.
- Conditionally render the Timer component based on the `showComponent` state.

<b>2. Create `Timer` Component:</b>

- In `Timer.jsx`, create a functional component named `Timer`.
- Initialize a state `count` using `useState` to track the countdown.

##### Intermediate Level

<b>1. Implement Countdown Logic:</b>

- Use `useEffect` to set up an interval that decreases the `count` state every second.
- Ensure that the countdown stops when `count` reaches zero.

<b>2. Cleanup in `useEffect`:</b>

- Implement a cleanup function in `useEffect` to clear the interval when the component unmounts or before re-running the effect.

##### Advanced Level

<b>1. Enhance Timer Functionality:</b>

- Add functionality to reset the timer to its initial value.
- Implement additional controls to pause and resume the countdown.

<b>2. Styling and User Interface:</b>

- Style the Timer component and its controls for a better user experience.
- Display the countdown timer in a visually appealing format.

### Deliverables

A React application with a functional Timer component.
Effective use of `useState` and `useEffect` hooks for managing the timer.
A toggle button in `App.jsx` to show or hide the Timer component.
Source code with appropriate comments explaining key functionalities.