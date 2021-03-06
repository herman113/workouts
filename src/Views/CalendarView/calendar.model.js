import Macro from './MacroCalendar';
import Meso from './MesoCalendar';
import Micro from './MicroCalendar';
import Today from './TodaysCalendar';
import Workouts from './WorkoutsCalendar';

export default class CalendarModel {
  calendarModesTrainer = [
    'Workouts', 'Today', 'Micro', 'Meso', 'Macro'
  ];
  calendarModesUser = [
    'Workouts', 'Today', 'Week', 'Month', 'Year'
  ];

  getCalendarBtnsTrainer() {
    // in the future, add logic here for changing buttons
    return this.calendarModesTrainer;
  }
  getCalendarBtnsUser() {
    return this.calendarModesUser;
  }
}
