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
    const showIfTrue = this.props.boolean ? 'Es cierto!' : 'Es falso!';
    const showIfActivated = this.props.isActivated ? 'On!' : 'Off!';
    const mappedNumbers = this.props.arrayOfNumbers.map(number => number * 2);
    return <div>
      <h1>{this.props.text}</h1>
      <p>{this.props.number}</p>
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
        <HELLO title="Hello from props :)"/>
        <TEXT arrayOfNumbers= {[2, 4, 6]}
              boolean={false} 
              isActivated
              number={2*2} 
              text="Soy un texto desde props :)"/>
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
