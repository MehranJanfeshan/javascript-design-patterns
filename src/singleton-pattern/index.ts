// The Singleton pattern is thus known because it restricts instantiation of a class to a single object.
// Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist.
// In the event of an instance already existing, it simply returns a reference to that object.
// The biggest difference between singleton and static class is that you can pass singleton as an object!

// Why Singleton is bad?
// difficulty in stubbing dependencies.
// They are generally used as a global instance, why is that so bad? Because you hide the dependencies of your application in your code, instead of exposing them through the interfaces. Making something global to avoid passing it around is a code smell.
// They violate the single responsibility principle: by virtue of the fact that they control their own creation and lifecycle.
// They inherently cause code to be tightly coupled. This makes faking them out under test rather difficult in many cases.
// They carry state around for the lifetime of the application. Another hit to testing since you can end up with a situation where tests need to be ordered which is a big no no for unit tests. Why? Because each unit test should be independent from the other.

const mySingleton = (function () {

  // Instance stores a reference to the Singleton
  let instance

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private')
    }

    const privateVariable = 'Im also private'

    const privateRandomNumber = Math.random()

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log('The public can see me!')
      },

      publicProperty: 'I am also public',

      getRandomNumber: function () {
        return privateRandomNumber
      }

    }

  }

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if (!instance) {
        instance = init()
      }

      return instance
    }

  }

})()


const singleA = mySingleton.getInstance()
const singleB = mySingleton.getInstance()
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()) // true
