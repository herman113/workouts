import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

export default class WrappedCalendar extends Component {
  state = {  }
  render() {
    return (
      <BigCalendar 
        events={this.props.events}
        startAccessor='startDate'
        endAccessor='endDate'
        view={this.props.view}
        toolbar={false}
      />
    );
  }
}

WrappedCalendar.defaultProps = {
  /** Each element in the events array
   *  should an object with properties: 
   * { 
   *   id: number, title: string,
   *   start: Date, end: Date,
   *   desc: string
   * }
   */
  events: []
};