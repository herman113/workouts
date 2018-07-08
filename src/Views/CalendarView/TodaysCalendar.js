import React, { Component } from 'react';
import CalendarWidget from '../../Components/vendor/BigCalendar';

export default class TodaysCalendar extends Component {
  render() {
    return (
      <div>
        <p>This is today's calendar view</p>
        <CalendarWidget view={'day'} />
      </div>
    );
  }
}