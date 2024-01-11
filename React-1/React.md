#####Que - What is React?
**Ans -** React is a JavaScript library created by Facebook. It serves as a User Interface (UI) library and a powerful tool for constructing UI components.

#####Que - Who made React?
**Ans -** React was created by Jorden Walke who is a software engineer at Meta (Facebook).

#####Que - What is Babel?
Ans - Babel is JavaScript compiler that can translate the markup and programming languages into JavaScript.

#####Que - How does Babel convert html code in React into valid code?
**Ans -** As babel is a JavaScript compiler so that primerily focuses on JavaScript code and it is not directly handle HTML code in React. In react we use JSX syntex extention that allo;ws us to write XML-like (HTML) code within JavaScript.

**Example:-**
#####JSX -
    const Element = <h1>Hello from React!</h1>;   //creating a React element with help of JSX (XML-like) syntex
#####BABEL WILL CONVERTS INTO JAVASCRIPT --->
#####JavaScript -
    const Element = React.createElement("h1", nul/{}, "Hello from React!");         //creating a React element with javascript

#####Que - What is ReactDOM used for? Write an example?
**Ans -** ReactDOM is a package in React. it is used to render the React elements to the HTML DOM. 

**Example:-**
#####JSX -
    const root = document.getElementById("root"); //getting HTML element which have id "root";
    const Element = () => {
    return <h1>Hello from React element</h1>;
    };                                            //creating an React component which returns an React element;
    const reactRoot = ReactDOM.createRoot(root);  // creating a react root element;
    reactRoot.render(<Element />);                //rendering react element to the DOM

#####Que - What are the packages that you need to import for react to work with?
**Ans -** We must import two essential packages for building React applications:
1. **React:** Used for defining React components and employing JSX syntax.

        import React from 'react';

2. **ReactDOM:** Used to render React applications into the DOM.     

        import ReactDOM from 'react-dom';

#####Que - How do you add react to a web application?
**Ans -** If we want to add React to any web application, then we simply need to add these below scripts :
                    
    <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>                            // it is for React
    <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>                            // it is for ReactDOM
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>                                              // it is for Babel
#####Que - What is React.createElement?
**Ans -** 
#####Que - What are the three properties that createElement accept?
**Ans -**
#####Que - What is the meaning of render and root?
**Ans -**
