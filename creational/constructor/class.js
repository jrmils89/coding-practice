class Person {

  /**
   * Simple person class
   * @param {string} name 
   * @param {number} age 
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  /**
   * Return the string representation of Person
   */
  toString() {
    return this.name + " is " + this.age;
  }
}

// Initialize a new person object  
var jesse = new Person("Jesse", 29);

console.log(jesse.toString()); // Prints: Jesse is 29