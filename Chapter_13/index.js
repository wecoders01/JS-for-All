// // Inheritance

// function Person(name) {
//    this.name = name
// }

// var p1 = new Person('iTanvir')
// console.log(p1)


// ******************** Property Descriptor **************************
// var person = {
//    name: "iTanvir"
// }
// console.log(person)

// for (var i in person) {
//    console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// var baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//    configurable: false,
//    enumerable: false,
//    writable: false,
//    value: "Tanvir Ahamed" // default set
// })


// ******************** Property Object of Any Constructor **************************

function Person(name) {
   this.name = name
}
Person.prototype.PI = 3.1416

var p1 = new Person("Tanvir")
var p2 = new Person("Tanvir Ahamed")
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

// ******************** Instance vs Prototype Member **************************

// Instance Member
function Square(width) {
   this.width = width
   this.getWidth = function () {
      console.log('Width is ' + this.width)
      // this.draw()
   }
}

// Prototype Member
Square.prototype = {
   draw: function () {
      console.log("draw")
      this.getWidth()
   },
   toString: function () {
      return 'My width is ' + this.width
   }

}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// has own property
// sqr1.hasOwnProperty('width')
// sqr1.hasOwnProperty('getWidth')
// sqr1.hasOwnProperty('draw')

// get Instance Members
console.log(Object.keys(sqr1))

// get all members
for (var i in sqr1) {
   console.log(i)
}


// ******************** Don't Overwrite Built in Prototype in Js Object **************************