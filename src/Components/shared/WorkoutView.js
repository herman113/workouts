import React, { Component } from 'react';

export default class WorkoutView extends Component {
  state = {  }
  render() {
    return (
      <div>
        <table border="1px">
          <thead>Today's workouts</thead>
          <th>
            <td>Name</td>
            <td>Sets</td>
            <td>Reps</td>
            <td>Load</td>
            <td>Rest</td>
            <td>Tempo</td>
          </th>
          <tr></tr>
        </table>
      </div>
    );
  }
}