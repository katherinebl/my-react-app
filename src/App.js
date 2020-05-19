import React, { Component } from 'react';
import cars from './data/cars.json'
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
  render() {

    return (
      <div>
        <h4>Listas de objetos</h4>
        <ul> { cars.map(car => {
                return (
                  <li key={car.id}>
                    <p><strong>Nombre: </strong>{car.name}</p>
                    <p><strong>Marca: </strong>{car.company}</p>
                  </li>
                ) 
              })
            }
        </ul>
      </div>
    );
  }
} 

export default App;
