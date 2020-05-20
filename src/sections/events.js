import React, { Component } from 'react';

class Events extends Component {
  constructor() {
    super() 
    this.state = { mouseX: 0, mouseY: 0 }
  }

  handleClick() {
    return alert('hi there');
  }


  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }


  render() {
    return (
      <div>

        <h4>Hi from ClickEvent component! :)</h4>

        <button onClick={this.handleClick}>click me</button>     

        <div
          onMouseMove={this.handleMouseMove}
          style={{ border: '2px solid purple', marginTop: 20, padding: 10 }}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>  

      </div>
    );
  }
} 

export default Events;