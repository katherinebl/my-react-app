import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//1st way of create a React component / Regular function
// function HELLO (props) {
//   return <h1>{props.title}</h1>
// }

//2nd way of create a React component / Arrow function
// const HELLO = (props) => <h1>{props.title}</h1>

//3rd way of create a React component / Classes 
//Importante: dar contexto con 'this' porque render no acepta parámetros y, por lo tanto, no podemos pasarle las props
class HELLO extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HELLO title="Hello from props :)"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
