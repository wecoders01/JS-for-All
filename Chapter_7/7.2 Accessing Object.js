// Accessing Object

var point = {
   x: 10,
   y: 20,
   z: 30
}

// // Dot Notation
// console.log(point)
// console.log(point.x)
// console.log(point.y)
// console.log(point.y + point.x)

// // Array Notation
// console.log(point['x'])
// console.log(point['z'])
// console.log(point['z'] + point['x'])

// var show = 'z'
// console.log(point[show])

// ****** Setting Object Properties ************
point.x = 45
point.a = 15
console.log(point)
console.log(point.d)

point['y'] = 100

var prop = 'z'
point[prop] = 55
console.log(point)


// ********** Remove Element **************

point.a = undefined
console.log(point)

delete point.a
console.log(point)