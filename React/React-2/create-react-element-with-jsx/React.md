# Problem-03

#### Instructions

###### Frontend Web Development Assignment: JSX and Babel

#### Introduction
In this assignment, you will explore the power of JSX and Babel in React. JSX allows you to write HTML-like syntax within JavaScript, making your development process more efficient. Babel is a JavaScript compiler that transforms JSX into regular JavaScript, understandable by browsers. This task will enhance your understanding of how JSX and Babel work together in React applications.

#### Task Overview

Your main task is to create a paragraph (`<p>`) element using JSX that displays the text "Seize the day". This exercise will be divided into three levels: basic, intermediate, and advanced, each requiring different complexities and implementations.
<hr>

## Basic Level: Simple JSX Element

#### Objective

Create a simple JSX element displaying the text "Seize the day".

#### Requirements

1. Use the provided boilerplate HTML code.
2. Inside the `<script>` tag, create a JSX element that represents a paragraph (`<p>`).
3. Render this element inside the `div` with the id `root`.

#### Boilerplate Code:

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>JSX and Babel</title>
    </head>
    <body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        // Your JSX code here
    </script>
    </body>
    </html>


## Intermediate Level: Dynamic Content in JSX

#### Objective

Enhance the paragraph element to include dynamic content.

#### Requirements

1. Define a JavaScript variable that holds a string with the text "Seize the day".
2. Use this variable within your JSX to set the content of the paragraph.
3. Ensure the paragraph is still rendered inside the `div` with the id `root`.


## Advanced Level: Conditional Rendering in JSX

#### Objective

Implement conditional rendering within your JSX element.

#### Requirements

1. Create a JavaScript variable that holds a boolean value.
2. Use this variable to conditionally render one of two different paragraphs:
    - If the variable is `true`, display a paragraph with the text "Seize the day".
    - If the variable is `false`, display a paragraph with the text "Make the most of it".
3. Ensure the correct paragraph is rendered inside the `div` with the id `root`.