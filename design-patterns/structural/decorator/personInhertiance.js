// Just a demo `class` in ES5
function Person(name) {
  this.name = name;
}

// Demo method on person to introduce themselves
Person.prototype.introduce = function() { 
  console.log(`Hi I'm ${this.name}`);
}

// Function inheritiance in ES5
function PersonWithAge(name, age) {
  Person.call(this, name);
  this.age = age;
}

// Inherit the protoype from Person
PersonWithAge.prototype = Object.create(Person.prototype);

// Decorate PersonWithAge with a new method that calls a prototype method from Person
PersonWithAge.prototype.introduceWithAge = function() {
  this.introduce();
  console.log(`I'm ${this.age} years old`);
}

var jesse = new PersonWithAge('Jesse', 29);


/**
 Prints:
  Hi I'm Jesse!
 */
jesse.introduce();

/**
 Prints:
  Hi I'm Jesse!
  I'm 29 years old!
 */
jesse.introduceWithAge();