// Find & Find Index

var arr = [7, 5, 3, 9, 2, 0, 3, 1, 4]


// var result = arr.find(function (value) {
//    return value === 9
// })
// console.log(result)


// var result = arr.findIndex(function (index) {
//    return index === 3
// })
// console.log(result)


function myFind(arr, cb) {
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return arr[i]
      }
   }
}


function myFindIndex(arr, cb) {
   for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
         return i
      }
   }
}


var result = myFind(arr, function (value) {
   return value === 9
})
console.log(result)

var result = myFindIndex(arr, function (index) {
   return index === 3
})
console.log(result)