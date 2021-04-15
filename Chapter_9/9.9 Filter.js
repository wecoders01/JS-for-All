// Create new array using Existing array like map

var arr = [2, 4, 3, 1, 9, 5, 7, 3, 8]


// var newArr = arr.filter(function (value) {
//    return value % 2 === 0
// })
// console.log(newArr)



function myFilter(arr, cb) {
   var newArr = []
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i], i, arr)) {
         newArr.push(arr[i])
      }
   }
   return newArr
}

// Even
var even = myFilter(arr, function (value) {
   return value % 2 === 0
})
console.log(even)

// Odd
var odd = myFilter(arr, function (value) {
   return value % 2 === 1
})
console.log(odd)

// Greater than 4
var greater = myFilter(arr, function (value) {
   return value > 4
})
console.log(greater)