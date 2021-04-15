// Create new array using existing array

var arr = [1, 2, 3, 4, 5]

// var sqrArr = arr.map(function (value) {
//    // console.log(value)
//    // return Math.round(Math.random() * 100)
//    return value * value
// })
// console.log(sqrArr)



function myMap(arr, cb) {
   newArr = []
   for (var i = 0; i < arr.length; i++) {
      var temp = cb(arr[i], i, arr)
      newArr.push(temp)
   }
   return newArr
}


var sqr = myMap(arr, function (value) {
   return value * value
})
console.log(sqr)


var qb = myMap(arr, function (value) {
   return value * value * value
})
console.log(qb)


var mTen = myMap(arr, function (value) {
   return value * 10
})
console.log(mTen)