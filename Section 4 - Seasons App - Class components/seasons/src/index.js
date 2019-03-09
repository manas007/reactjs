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

  // this is a javascript function which is defined in ES 2015, not a React function
  constructor(props) {
    super(props);

    // this is the only time we do a direct assignment on the state.
    this.state = {lat : null, errorMessage : ''}; // creating a state object and adding a latitude property because we plan to show the latitude data

    window.navigator.geolocation.getCurrentPosition( //getting user's location using the deafult function provided by almost all browsers
      (position) => this.setState({lat: position.coords.latitude}), // you will call only the setState to set any values.
      (err) => this.setState({errorMessage: err.message}) 
    );
  }

  // have to define render that should return some JSX
  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error : {this.state.errorMessage} </div>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude : {this.state.lat} </div>
    }

    if(!this.state.errorMessage && !this.state.lat){
      return <div>Loading</div>
    }

  }
}


ReactDOM.render (
    <App/>, 
    document.querySelector('#root')
);