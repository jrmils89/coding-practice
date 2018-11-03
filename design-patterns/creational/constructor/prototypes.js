/**
 * Simple person class
 * @param {string} name 
 * @param {number} age 
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * Return the string representation of Person
 */
Person.prototype.toString = function() {
  return this.name + " is " + this.age;
}

// Initialize a new person object  
var jesse = new Person("Jesse", 29);

console.log(jesse.toString()); // Prints: Jesse is 29
