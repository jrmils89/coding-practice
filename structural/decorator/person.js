function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() { 
  console.log(`Hi I'm ${this.name}`);
}

var jesse = new Person('Jesse', 29);

jesse.introduce();

var PersonWithAge = new Person('Jesse', 29);

PersonWithAge.introduceWithAge = function() {
  Person.prototype.introduce.call(this);
  console.log(`I'm ${this.age} years old`);
}

PersonWithAge.introduceWithAge();