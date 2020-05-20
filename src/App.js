import React, { Component } from 'react';
import './App.css';


//1st way of create a React component / Regular function
// function HELLO (props) {
//   return <h1>{props.title}</h1>
// }

//2nd way of create a React component / Arrow function
// const HELLO = (props) => <h1>{props.title}</h1>

//3rd way of create a React component / Classes 
//Importante: dar contexto con 'this' porque render no acepta parámetros y, por lo tanto, no podemos pasarle las props


class App extends Component {

  handleClick() {
    return alert('hi there');
  }

  render() {
    return (
      <div>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>click me</button>
        
      </div>
    );
  }
} 

export default App;
