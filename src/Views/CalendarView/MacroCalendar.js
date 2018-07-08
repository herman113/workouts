import React, {Component} from 'react';
import CalendarWidget from '../../Components/vendor/BigCalendar';

export default class MacroCalendar extends Component {
  render() {
    return (
      <div>
        <p>This is the Macro Calendar View</p>
        <CalendarWidget />
      </div>
    );
  }
}
