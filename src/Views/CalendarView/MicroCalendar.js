import React, { Component } from 'react';
import CalendarWidget from '../../Components/vendor/BigCalendar'

export default class MicroCalendar extends Component {
  render() {
    return (
      <div>
        <p>This is the micro calendar view</p>
        <CalendarWidget view={'week'}/>
      </div>
    );
  }
}