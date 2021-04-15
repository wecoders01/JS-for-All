// What is pure Function?

// ' * It returns the same result if given the same arguments'
// ' * It does not cause any observable side effects'


function sqr(n) {
   return n * n
}
console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(4))



// Not a pure function with Arguments
// Side Effect / change the outside value
var n = 10

function change() {
   n = 100
}
change()
console.log(n)



// Not a pure function with Arguments
// Side Effect / change the outside value
var point = {
   x: 10,
   y: 20
}

function printPoint(point) {
   point.x = 100
   point.y = 200

   console.log(point)
}

printPoint(point)
console.log(point)