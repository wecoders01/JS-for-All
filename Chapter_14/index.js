// function extend(Parent, Child) {
//    Child.prototype = Object.create(Parent.prototype)
//    Child.prototype.Constructor = Child //reset constructor property after inheritance
// }

// function Shape(color) {
//    this.color = color
// }

// Shape.prototype.common = function () {
//    console.log('I am Common Function')
// }

// var shape = new Shape()

// // ++++++++++++++++++++++ ========================== ++++++++++++++++++++++

// function Square(width, color) {
//    Shape.call(this, color)
//    this.width = width
// }
// extend(Shape, Square)

// Square.prototype.draw = function () {
//    console.log('Drawing')
// }
// Square.prototype.common = function () {
//    console.log('I am calling from Square and have overridden')
// }


// var s1 = new Square(45, 'green')

// // Shape -> Shape -> Object
// // Square -> Square -> Object

// // Square -> Square -> Shape -> Object

// // ++++++++++++++++++++++ ========================== ++++++++++++++++++++++

// function Circle(radius, color) {
//    this.radius = radius
//    Shape.call(this, color)
// }

// Circle.prototype = {

// }
// extend(Shape, Circle)

// Circle.prototype.common = function () {
//    // Shape.prototype.common.call(this)
//    console.log('I am from Circle and have overridden')
// }

// var c = new Circle(10, 'red')


// var shapes = [shape, s1, c]

// for (var i of shapes) {
//    i.common()
// }

// // s1 instanceof Square
// // s1 instanceof Shape



// // ++++++++++++++++++++++ =========== Inheritance and Composition Mixing Together =========== ++++++++++++++++++++++
function mixin(target, ...sources) {
   Object.assign(target.prototype, ...sources)
}


var canEat = {
   eat: function () {
      console.log('Eating... ')
   }
}
var canWalk = {
   walk: function () {
      console.log('Walking...')
   }
}
var canSwim = {
   swim: function () {
      console.log('Swimming...')
   }
}

// var person = Object.assign({}, canEat, canWalk)
// person.name = "Tanvir Ahamed"

function Person(name) {
   this.name = name
}

// Object.assign(Person.prototype, canEat, canWalk)
mixin(Person, canEat, canWalk)

var person = new Person('itanvir')
console.log(person)

// Gold Fish 
function GoldFish(name) {
   this.name = name
}
mixin(GoldFish, canEat, canSwim)

var fish = new GoldFish('Bla Bla Bla')
console.log(fish)