import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import sampleEvents from './events';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const containerStyle = {
  height: '90vh'
}

export default class WorkoutCalendar extends Component {
  render() {
    return (
      <div className="workouts-cal-container" style={containerStyle}>
        <p>This is the workouts calendar view.</p>
        <div>
          <BigCalendar
            events={sampleEvents}
            startAccessor='startDate'
            endAccessor='endDate'
          />
        </div>
      </div>
    );
  }
}