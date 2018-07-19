let workout = {
  name: 'workout A',
  day: 'thursday',
  time: '2pm',
  duration: 60,
  scheduledByTrainer: true,
  type: 'cardio',  // [ 'regeneration', 'cardio', 'resisitance' ]
  difficulty: 'easy', //[ 'easy', 'medium', 'hard'],
  coachGoals: [ 'see what movements cause pain'],
  coachNotes: '',
  clientNotes: '',
  circuits: [
    {
      number: 1,
      type: 'warmup',  // [ 'strength', 'cardio', 'regeneration', 'warmup', 'cooldown', 'boxing'],
      exercises: [
        {
          number: 1,
          tags: [ ''],
          name: 'quadruped hip extensions',
          sets: '3',
          reps: '12',
          load: '10',
          rest: '0',
          tempo: '30sec'
        },
        {
          number: 2,
          tags: [ ''],
          name: 'quadruped hydrants',
          sets: '3',
          reps: '12',
          load: '10',
          rest: '0',
          tempo: '30sec'
        },
        {
          number: 3,
          tags: [ ''],
          name: 'single leg bridge',
          sets: '3',
          reps: '12',
          load: '10',
          rest: '0',
          tempo: '30sec'
        },
        {
          number: 4,
          tags: [ ''],
          name: 'single leg raise to crunch reach',
          sets: '3',
          reps: '12',
          load: '10',
          rest: '0',
          tempo: '30sec'
        }
      ]
    }
  ]
}