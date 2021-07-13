const newObject1 = {
  name: undefined
}

// Create an empty object!
const newObject2 = Object.create(Object.prototype)

// Create an empty object
const newObject3 = new Object()

// Adding property to object
newObject1.name = 'Mehran'

newObject2['name'] = 'Mehran'

// Define one property
Object.defineProperty(newObject3, 'name', {
  value: 'mehran',
  writable: true,
  enumerable: true,
  configurable: true
})


// Define multiple properties
Object.defineProperties(newObject3, {
  'name': {
    value: 'Mehran',
    writable: true
  },
  'lastName': {
    value: 'Janfeshan',
    writable: false
  }
})


// create an object by new keyword


function Student(firstname, lastname, code) {
  this.firstname = firstname
  this.lastname = lastname
  this.code = code

  this.toString = function () {
    return `${ this.firstname } ${ this.lastname }: ${ this.code }`
  }
}

const myStudent = new Student('Mehran', 'Janfeshan', 123)
console.log(myStudent.toString())