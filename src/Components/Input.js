import React, { Component } from 'react';

// myObject = {
//   someProperty: 'Blah'
// };
// myObject.someProperty = 'Bleh'; // do NOT do this with state

export default class PlaceholderInput extends Component {
  constructor(props) {
    super(props);
    this.state = {inputText: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // update the state for each keystroke
    // entered into the input
    console.log('input changed');
    // event.target has information about the
    // element triggering the event
    console.log('====================================');
    console.log(event.target.value);
    console.log('====================================');
    // use this.setState() to update state.
    // update the new input text from event.target.value
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input 
          placeholder={this.props.placeholder} 
          style={inputStyles}
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <h3>{this.state.inputText}</h3>
      </div>
    );
  }
}

const inputStyles = {
  borderColor: 'blue',
  width: '300px'
}