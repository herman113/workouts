import React, { Component } from 'react';
import Workout from '../../Components/shared/WorkoutView';

const containerStyle = {
  height: '90vh'
}

export default class WorkoutCalendar extends Component {
  render() {
    return (
      <div className="workouts-cal-container" style={containerStyle}>
        <p>This is the workouts calendar view.</p>
        <div>
          <Workout />
        </div>
      </div>
    );
  }
}