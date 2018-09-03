
class PersonServiceImpl {
  sayHello() {
    console.log(`Hello`);
  }

  sayGoodbye() {
    console.log(`Goodbye`);
  }
}

const PersonService = new PersonServiceImpl;

/**
 * Wrapper around person service, just as an exmaple of a facade pattern which 
 * creates a `facade` around a series of actions/methods to simplify 
 * access or an interface around a service/class/object/etc
 */
class PersonServiceWrapper {
  beARudePerson() {
    PersonService.sayHello();
    PersonService.sayGoodbye();
  }
}

const wrapper = new PersonServiceWrapper();
wrapper.beARudePerson();



// These are the same as above, but using static methods to demonstrate
class PersonServiceStatic {
  static sayHello() {
    console.log(`Hello`);
  }

  static sayGoodbye() {
    console.log(`Goodbye`);
  }
}

class PersonServiceWrapperWithStatic {
  static beARudePerson() {
    PersonServiceStatic.sayHello();
    PersonServiceStatic.sayGoodbye();
  }
}

PersonServiceWrapperWithStatic.beARudePerson();