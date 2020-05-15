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

class TEXT extends Component {
  render() {
    const { 
      arrayOfNumbers, 
      boolean, 
      isActivated, 
      multiply, 
      number, 
      text,
      title
    } = this.props;

    const showIfTrue = boolean ? 'Es cierto!' : 'Es falso!';
    const showIfActivated = isActivated ? 'On!' : 'Off!';
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return <div>
      {title}
      <h1>{text}</h1>
      <p>{number}</p>
      <p>{showIfTrue}</p>
      <p>{showIfActivated}</p>
      <p>{mappedNumbers.join(', ')}</p>
    </div>
    
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HELLO title="Hello :)"/>
        <TEXT arrayOfNumbers= {[2, 4, 6]}
              boolean={false} 
              isActivated
              multiply = {number => number * 3}
              number={2*2} 
              text="Soy un texto desde props :)"
              title = {<h1>React element as prop</h1>} />
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
