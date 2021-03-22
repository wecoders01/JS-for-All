// Traverse in Array

var arr = [2, 3, 4, 5, 10, 42]

// arr[arr.length - 1]

// for(var i=0; i<arr.length; i++){
//    // console.log(arr[i])
//    arr[i] = arr[i]+2
// }
// console.log(arr)

// // Total Sum
// var sum = 0
// for(var i=0; i<arr.length; i++){
//    sum += arr[i]
// }
// console.log(sum)

// // Find Even Number
// for (var i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//       console.log(arr[i])
//    }
// }

// // Sum Even Number
// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//       sum += arr[i]
//    }
// }
// console.log(sum)

// Find Odd Number
for (var i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 1) {
      console.log(arr[i])
   }
}

// Sum Odd Number
var sum = 0
for (var i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 1) {
      sum += arr[i]
   }
}
console.log(sum)