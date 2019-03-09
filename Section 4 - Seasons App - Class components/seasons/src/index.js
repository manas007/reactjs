import React from 'react';
import ReactDOM from 'react-dom';

// functional component
/* const App = () => {
    window.navigator.geolocation.getCurrentPosition( //getting user's location using the deafult function provided by almost all browsers
      (position) => console.log(position),
      (err) => console.log(err)  
    );

    return <div> Latitude : </div>
}; */

// class component
class App extends React.Component {
  render() {

    window.navigator.geolocation.getCurrentPosition( //getting user's location using the deafult function provided by almost all browsers
      (position) => console.log(position),
      (err) => console.log(err)  
    );

    return <div> Latitude </div>
  }
}


ReactDOM.render (
    <App/>, 
    document.querySelector('#root')
);