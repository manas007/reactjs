//Step 1. Import the react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component. A component is a class or a function that produces HTML to show the user(using JSX) and handles the feedback from user (using event handlers) 
const App = function(){  // this is a function component.

    const buttonText = 'Click Me';

    return (
        <div>Hi There! this is a JSX . JSX is not HTML. It is Javascript. Most browsers dont understand JSX. We write JSX and babel converts it to JS.
            <label htmlFor="name"> Enter Name: </label>
            <input id= "name" type="text" />
            <button style = {{ backgroundColor : 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div> 
        );
};

// take the react component and show it on the screen using ReactDOM.
ReactDOM.render(
    <App />,
    document.querySelector('#root') // public directory's index.html file is the one whichis served on the loacalhost. 
);

// In the terminal, do npm start. 


// Difference between HTML and JSX :  
// HTML : <div style = "background-color:red;"></div>
// JSX : <div style = {{backgroundColor: 'red' }}></div>

// HTML : <div class = "someclass"></div>
// JSX : <div className = "someclass"></div>

// JSX can reference JS variables. 