import React, { Component } from 'react';

import OneButton from './Button';

// ES5 function vs ES6 method
// function handleClick(index) {
//   console.log(index);
// }

// ES5 class/object literal vs ES6 class
// var ButtonGroup = {
//   handleClick: function(index) {
//     console.log(index);
//   },
//   render: function() {
//     return <JSX></JSX>
//   }
// };

export default class Buttongroup extends Component {
  // props.buttons should be an array with
  // each element being the name of the button
  constructor(props) {
    super(props);
    this.state = {selectedIndex: null};
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        {
          this.props.buttons.map(
            (btnText, btnIndex) => 
            <OneButton 
              text={btnText} 
              onClick={() => this.props.onClick(btnIndex)} 
              active={this.props.selectedIndex === btnIndex}
              key={btnIndex}
            />
          )
        }
      </div>
    );
  }
}

Buttongroup.defaultProps = {
  onClick: () => {console.warn('Please attach a method to props.onClick(index)')}
}