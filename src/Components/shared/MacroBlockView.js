import React, { Component } from 'react';
import './macroBlockView.css';


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <div className="micro__output">{props.value}</div>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return (
    <div className="micro">
      <div className="micro__label">Micro</div>
      {listItems}
    </div>
  )
}

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52
];
class MacroBlock extends Component {


  render() {
    return (
      <div className="macro-block-container">
        <div className="program">
          <div className="program__item program__label">Program Name</div>
          <div className="program__item program__output">The Revolution</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Macro</div>
          <div className="macro__item macro__output">ATC</div>
        </div>
        <div className="month">
          <div className="month__item month__label">Month</div>
          <div className="month__item month__output">Jun</div>
          <div className="month__item month__output">Jul</div>
          <div className="month__item month__output">Aug</div>
          <div className="month__item month__output">Sep</div>
          <div className="month__item month__output">Oct</div>
          <div className="month__item month__output">Nov</div>
          <div className="month__item month__output">Dec</div>
          <div className="month__item month__output">Jan</div>
          <div className="month__item month__output">Feb</div>
          <div className="month__item month__output">Mar</div>
          <div className="month__item month__output">Apr</div>
          <div className="month__item month__output">May</div>
          <div className="month__item month__output">Jun</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Stage</div>
          <div className="macro__item macro__output">Prepatory</div>
          <div className="macro__item macro__output">Precompetition</div>
          <div className="macro__item macro__output">Competition</div>
          <div className="macro__item macro__output">Transition</div>
          <div className="macro__item macro__output">Prepatory</div>
          <div className="macro__item macro__output">Precompetition</div>
          <div className="macro__item macro__output">Competition</div>
          <div className="macro__item macro__output">Transition</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Events</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
          <div className="macro__item macro__output">Event</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Body Goals</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Performance Goals</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Training Phase</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
        </div>
        <div className="macro">
          <div className="macro__item macro__label">Sport Phase</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
          <div className="macro__item macro__output">Goal</div>
        </div>
        <NumberList numbers={numbers} />  
        
      </div>
    )
  }
}
 
export default MacroBlock;