// Argument in Function

// function add(a, b) {
//    var result = a + b
//    console.log(result)
// }

// add(10, 20)


// var arr1 = [1, 3, 5,]
// var arr2 = [5, 8, 3]
// var arr3 = [8, 9, 5]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//    sum1 += arr1[i]
// }
// console.log(sum1)


// function sumOfArray(arr) {
//    sum = 0
//    for (var i = 0; i < arr.length; i++) {
//       sum += arr[i]
//    }
//    console.log(sum)
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)



function test(a, b, c) {
   // console.log(arguments)
   // console.log(typeof a)

   for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i])
   }
}

test(10, 20, 30)


function addAll() {
   var sumAll = 0
   for (var i = 0; i < arguments.length; i++) {
      sumAll += arguments[i]
   }
   console.log(sumAll)
}
addAll(1, 2, 3)
addAll(10, 20, 30, 40)