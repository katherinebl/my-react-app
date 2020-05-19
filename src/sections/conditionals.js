import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return <button>Iniciar Seción</button>
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <h4>Hola Usuario!</h4>
        <button>Cerrar Sesión</button>
      </div>
    )
  }
}

export default class ConditionalBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {isUserLogged: false}
    // Change state to true and see the change in render
  }

  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {this.state.isUserLogged ? <LogoutButton /> : <LoginButton />}
      </div>
    )
  }
}