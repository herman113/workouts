import React, { Component } from 'react';
// var Component = React.Component;

export default class Button extends Component {
  getClassName() {
    if (this.props.active) {
      console.log('active button style is active');
      return 'btn-active';
    } else {
      console.log('Active button style is shadow');
      return 'shadow-btn';
    }
  }

  render() {
    return (
      <button 
        style={buttonStyle}
        // onClick={() => alert('Hello button clicked')}
        className={this.getClassName()}
        onClick={this.props.onClick}
      >{this.props.text}</button>
    );
  }
}

Button.defaultProps = {
  onClick: () => {console.warn('Please attach a method to props.onClick')}
}

let buttonStyle = {
  borderRadius: "5px",
  width: "5rem",
  height: "1.5rem",
  margin: ".5rem .2rem"
};
