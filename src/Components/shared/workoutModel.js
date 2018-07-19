/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------Exercise class------------------------------------*/
/*------------------------------------------------------------------------------------------*/

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

let dbChestPress = new Exercise(1, ['DB', 'push'], 'db chest press', 3, 10, 135, '1 min', '3-2-1');
let bbChestPress = new Exercise(2, ['DB', 'push'], 'bb chest press', 3, 10, 135, '1 min', '3-2-1');
// console.log(exercise1);

/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------Circuit class------------------------------------*/
/*------------------------------------------------------------------------------------------*/
class Circuit {
  constructor(number, type, exercise) {
    this.number = number;
    this.type = type;
    this.exercise = exercise; // convention for pluralization tips
  }

}

let circuit1 = new Circuit(1, 'warm up', [dbChestPress, bbChestPress])

// console.log(circuit1);
// console.log('-------------------------------');
// console.log(circuit1.exercise[1].name);


/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------Workout class------------------------------------*/
/*------------------------------------------------------------------------------------------*/
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
    this.circuit = circuit;
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
  'assess rigth hip stability',
  'This was fun',
  [circuit1]
);

console.log('-------------------------------');
console.log(workout1);
console.log('-------------------------------');


console.log(circuit1.exercise);















/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------workout object------------------------------------*/
/*------------------------------------------------------------------------------------------*/

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


/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------User class------------------------------------*/
/*------------------------------------------------------------------------------------------*/
class User {
  constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
  }

  calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
  }
}

let Herman = new User('herman', '4/20/79', 'Trainer');

// console.log('-------------------------------');
// console.log(Herman);


/*------------------------------------------------------------------------------------------*/
/*-----------------------------------------Athlete subclass------------------------------------*/
/*------------------------------------------------------------------------------------------*/

class Athlete extends User {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
      super(name, yearOfBirth, job);
      this.olympicGames = olympicGames;
      this.medals = medals;
  }
  
  wonMedal() {
      this.medals++;
      console.log(this.medals);
  }
}

const hermanAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);

// hermanAthlete.wonMedal();
// hermanAthlete.calculateAge();