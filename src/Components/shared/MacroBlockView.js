import React, { Component } from 'react';
import './macroBlockView.css';


function ListItem(props) {
  return <div className="micro__value">{props.value}</div>; // Correct! There is no need to specify the key here:
}

const micros = [
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

function MicroList({micros}) {
  // const micros = props.micros;
  const listItems = micros.map(micro => ( 
    <ListItem key={micro.toString()} value={micro} /> // Correct! Key should be specified inside the array.
  ));
  return (
    <div className="micro">
      <div className="micro__name">Micro</div>
      {listItems}
    </div>
  )
}

class MacroBlock extends Component {

  render() {
    return (
      <div className="macro-block-container">

        <div className="program">
          <div className="program__name">Program Name</div>
          <div className="program__value">The Revolution</div>
        </div>

        <div className="macro">
          <div className="macro__name">Macro</div>
          <div className="macro__value">ATC</div>
        </div>

        <div className="month">
          <div className="month__name">Month</div>
          <div className="month__value">Jun</div>
          <div className="month__value">Jul</div>
          <div className="month__value">Aug</div>
          <div className="month__value">Sep</div>
          <div className="month__value">Oct</div>
          <div className="month__value">Nov</div>
          <div className="month__value">Dec</div>
          <div className="month__value">Jan</div>
          <div className="month__value">Feb</div>
          <div className="month__value">Mar</div>
          <div className="month__value">Apr</div>
          <div className="month__value">May</div>
          <div className="month__value">Jun</div>
        </div>

        <div className="macro">
          <div className="macro__name">Stage</div>
          <div className="macro__value">Prepatory</div>
          <div className="macro__value">Precompetition</div>
          <div className="macro__value">Competition</div>
          <div className="macro__value">Transition</div>
          <div className="macro__value">Prepatory</div>
          <div className="macro__value">Precompetition</div>
          <div className="macro__value">Competition</div>
          <div className="macro__value">Transition</div>
        </div>

        <div className="macro">
          <div className="macro__name">Events</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
          <div className="macro__value">Event</div>
        </div>

        <div className="macro">
          <div className="macro__name">Body Goals</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
        </div>

        <div className="macro">
          <div className="macro__name">Performance Goals</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
        </div>

        <div className="macro">
          <div className="macro__name">Training Phase</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
        </div>

        <div className="macro">
          <div className="macro__name">Sport Phase</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
          <div className="macro__value">Goal</div>
        </div>
        
        <MicroList micros={micros} />  
        
      </div>
    )
  }
}
 
export default MacroBlock;