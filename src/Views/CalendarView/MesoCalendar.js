import React, { Component } from 'react';
import CalendarWidget from '../../Components/vendor/BigCalendar';

export default class MesoCalendar extends Component {
  render() {
    return (
      <div>
        <p>This is the meso calendar view.</p>
        <CalendarWidget view={'month'}/>
      </div>
    );
  }
}