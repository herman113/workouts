class Workout {
  constructor(
    name,
    day,
    time,
    duration,
    scheduledByTrainer,
    type,
    difficulty,
    description,
    coachGoals,
    coachNotes,
    clientNotes,
    circuit) {
    this.name = name;
    this.day = day;
    this.time = time;
    this.duration = duration;
    this.scheduledByTrainer = scheduledByTrainer;
    this.type = type;
    this.difficulty = difficulty;
    this.description = description;
    this.coachGoals = coachGoals;
    this.coachNotes = coachNotes;
    this.clientNotes = clientNotes;
    this.circuits = circuit;
  }

}

let workout1 = new Workout(
  'Hermanator',
  'July 2',
  '12pm',
  '60min',
  true,
  'Resistance',
  1,
  'take your time',
  'get client used to working out',
  'This was fun',
  []
)

// console.log(workout1);


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
let exercise2 = new Exercise(2, ['DB', 'push'], 'db chest press', 3, 10, 135, '1 min', '3-2-1');
// console.log(exercise1);


class Circuit {
  constructor(number, type, exercise) {
    this.number = number;
    this.type = type;
    this.exercise = exercise;
  }


}

let circuit1 = new Circuit(1, 'warm up', [exercise1, exercise2])

console.log(circuit1);
console.log(circuit1.exercise[1][7]);
