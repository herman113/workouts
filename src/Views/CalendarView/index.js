import React, { Component } from 'react';
import Macro from './MacroCalendar';
import Meso from './MesoCalendar';
import Micro from './MicroCalendar';
import Today from './TodaysCalendar';
import Workouts from './WorkoutsCalendar';

export default class CalendarView extends Component {
  // renderedText = [
  //   'Macro View',
  //   'Meso View',
  //   'Micro View',
  //   'Todays View',
  //   'Workouts View'
  // ]
  componentsToRender = [
    Workouts, Today, Micro, Meso, Macro
  ];
  render() {
    const MyCalendarView = this.componentsToRender[this.props.newIndex];
    return (
      <div>
        <p>The current active index is</p>
        {/* <p>{this.renderedText[this.props.newIndex]}</p> */}
        <MyCalendarView />
      </div>
    );
  }
}

CalendarView.defaultProps = {
  defaultActiveIndex: 0,
  newIndex: 0
};