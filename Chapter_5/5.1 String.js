// Literal vs Constructor


var str = 'something' // Literal
var str2 = String('something') // Constructor
console.log(str2)

// When we use constructor
var n = 10
// var str1 = n + ''
// var str1 = n.toString()
var str1 = String(n)
console.log(str1)