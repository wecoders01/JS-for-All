// Object in JavaScript

// *********** Object Literal ***************

// var obj = {}
// console.log(obj)
// console.log(typeof obj)

var obj = {
   x: 10,
   y: 20
}
obj.y = 30 // replace element
obj.z = 40 // add element
console.log(obj)


// *********** Object Constructor ***************

var obj1 = Object()
obj1.x = 10
obj1.y = 20
console.log(obj1)

var obj2 = new Object()
obj2.a = 20
obj2.b = 30
console.log(obj2)