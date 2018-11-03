class Person {
  constructor(name) {
    // This is a "private" field. Not actually private, but used to signal intention
    this._name = name; 
  }

  // This is a getter for a "private" field
  get name() {
    return this._name;
  }

  introduce() {
    console.log(`Hi I'm ${this._name}!`)
  }
}

// Inhertis methods from Person
class PersonWithAge extends Person {
  constructor(name, age) {
    super(name); // Call super before initializing new fields
    this._age = age;
  }

  get age() {
    return this._age;
  }

  introduceWithAge() {
    this.introduce(); // Call super method inherited from Person
    console.log(`I'm ${this._age} years old!`);
  }
}

let jesse = new Person('Jesse');
let jesseWithAge = new PersonWithAge('Jesse', 29);

jesse.introduce()
jesseWithAge.introduceWithAge()