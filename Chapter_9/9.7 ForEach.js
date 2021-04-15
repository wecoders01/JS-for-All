// Modify Existing Array

var arr = [1, 2, 3, 4, 5]


// var sum = 0
// arr.forEach(function (value, index, arr) {
//    // console.log(value, index, arr)
//    sum += value
// })

// console.log(sum)



function forEach(arr, cb) {
   for (var i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr)
   }
}


// Summation
var sum = 0
forEach(arr, function (value, index, arr) {
   console.log(value, index, arr)
   sum += value
})
console.log(sum)


// Add 5
forEach(arr, function (value, index, arr) {
   arr[index] = value + 5
})
console.log(arr)


// Find Evan Number
forEach(arr, function (value, index, arr) {
   if (value % 2 == 0) {
      console.log(value)
   }
})