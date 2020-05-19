import React, { Component } from 'react';
import ConditionalBlock from './sections/conditionals';
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConditionalBlock />
      </header>
    </div>
  );
}

export default App;
