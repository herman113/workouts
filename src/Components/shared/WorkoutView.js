import React, { Component } from 'react';
import { Exercise } from './workout.model';

let dbChestPress = new Exercise(1, ['DB', 'push'], 'db chest press', 3, 10, 135, '1 min', '3-2-1');
let styleHead = {
  textAlign: 'center'
}
export default class WorkoutView extends Component {
  state = {  }
  render() {
    return (
      <div>
        <table border="1px" style={{ width: '100%' }}>
          <thead style={{}}>
            <th colspan="6">Today's workouts</th>
          </thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Load</th>
            <th>Rest</th>
            <th>Tempo</th>
          </tr>
          <tr>
            <td>{dbChestPress.name}</td>
            <td>{dbChestPress.sets}</td>
            <td>{dbChestPress.reps}</td>
            <td>{dbChestPress.load}</td>
            <td>{dbChestPress.rest}</td>
            <td>{dbChestPress.tempo}</td>
          </tr>
        </table>
      </div>
    );
  }
}