let workout = {
  name: 'workout A',
  day: 'thursday',
  time: '2pm',
  duration: 60,
  scheduledByTrainer: true,
  type: [],  // [ 'regeneration', 'cardio', 'resisitance' ]
  difficulty: '1', //[ 'easy', 'medium', 'hard'],
  description: '', 
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

class Exercise {
  constructor(number,tags,name,sets,reps,load,rest,tempo) {
    this.number = number;
    this.tags = tags;
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.load = load;
    this.rest = rest;
    this.tempo = tempo;
  }
 
  
}

let exercise1 = new Exercise(1, ['DB', 'push'], 'db chest press', 3, 10, 135, '1 min', '3-2-1');
console.log(exercise1);


class Circuit {
  constructor(number, type, exercises) {
    this.number = number;
    this.type = type;
    this.exercise = exercise;
  }


}