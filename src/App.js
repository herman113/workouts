import React, { Component } from 'react';
import './App.css';
import CalendarBtns from './Components/Buttongroup';
import CalendarView from './Views/CalendarView/';
import calendarModel from './Views/CalendarView/calendar.model';
const myCalendar = new calendarModel();

class App extends Component {
  calendarModes = myCalendar.getCalendarBtnsTrainer();
  constructor(props) {
    super(props);
    this.state = {
      activeModeIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(clickedBtnIndex) {
    console.log(clickedBtnIndex);
    this.setState({activeModeIndex: clickedBtnIndex});
  }

  render() {
    return (
      <div className="App">
        {/* <HelloButton text="Hello"/> */}
        <br/>
        {/* <MyInput placeholder="Workout Name" /> */}
        {/* <MyInput placeholder="Workout Category" /> */}
        <CalendarBtns 
          buttons={this.calendarModes} 
          onClick={this.handleClick}
          selectedIndex={this.state.activeModeIndex}
        />
        <CalendarView 
          newIndex={this.state.activeModeIndex}
        />
      </div>
    );
  }
}

export default App;
