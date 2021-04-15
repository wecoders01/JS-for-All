// Callback Function in JavaScript

function sample(a, b, cb) {
   var c = a + b
   var d = a - b

   var result = cb(c, d)
   return result
}

function sum(a, b) {
   return a + b
}
console.log(sample(5, 8, sum))


var result = sample(5, 8, function (c, d) {
   return c - d
})
console.log(result)


var result2 = sample(5, 8, function (c, d) {
   return c * d
})
console.log(result2)


var result3 = sample(5, 8, function (c, d) {
   return c / d
})
console.log(result3)
