import React, { Component } from 'react';

class ClickEvent extends Component {

  handleClick() {
    return alert('hi there');
  }

  render() {
    return (
      <div>
        <h4>Hi from ClickEvent component! :)</h4>
        <button onClick={this.handleClick}>click me</button>       
      </div>
    );
  }
} 

export default ClickEvent;