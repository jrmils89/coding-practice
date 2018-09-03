/**
 * Dummy flyweight factory class, just for example purposes
 */
class FlyweightFactory {
  constructor() {
    this._flyweights = {};
  }


  // Get Or Create a Flyweight
  get(name, age) {
    let key = `${name}${age}`;
    if (!this._flyweights[key])
      this._flyweights[key] = new Flyweight(name, age)
    
      return this._flyweights[key];
  }

  count() {
    let count = 0;
    for (var f in this._flyweights)
      count++;
    return count;
  }
}

const flyFactory = new FlyweightFactory();

class Person {
  constructor(data) {
    this._id = data.id;
    // this._flyweights = flyFactory.get(data.name, data.age);
    this._name = data.name;
    this._age = data.age;
  };

  get id() {
    return this._id;
  }

  get age() {
    // return this._flyweights._age;
    return this._age;
  }

  get name() {
    // return this._flyweights._name;
    return this._name;
  }
}

class Flyweight {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  get name() {
    return this._name;
  }
}

class PersonCollection {
  constructor() {
    this._people = {};
    this._count = 0;
  }

  add(person) {
    this._people[person.id] = new Person(person);
    this._count++;
  }

  get(name) {
    return this._people[name];
  }

  get count() {
    return this._count;
  }
}



let ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let names = ['Jesse', 'John', 'Jane'];

const initialMemory = process.memoryUsage().heapUsed;

let people = new PersonCollection();

/**
 * Create a ton of people to add to PersonCollection for the purposes
 * on demonstrating memory management of flyweights. Really basic example
 * for now.
 */
for (let i = 0; i < 2000000; i++) {
  people.add({
    id: 'person' + i,
    name: names[Math.floor((Math.random() * 3))],
    age: ages[Math.floor((Math.random() * 10))],
  })
}

const afterMemory = process.memoryUsage().heapUsed;

console.log(`used memory ${(afterMemory - initialMemory) / 1000000}`)
console.log(`people: ${people.count}`)
console.log(`flyweights: ${flyFactory.count()}`)

/**
 * Without flyweights:
    used memory 478.717552
    people: 2000000
    flyweights: 0
 */

/**
 * With flyweights:
    used memory 416.01836
    people: 2000000
    flyweights: 30
 */