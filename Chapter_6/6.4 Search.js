// Search Index

var arr = [4, 6, 2, 66, 3, 7, 33, 9, 11]

// var find = 11
// var isFound = false

// for (var i = 0; i < arr.length; i++) {
//    if (arr[i] === find) {
//       console.log('Data found at Index ' + i)
//       isFound = true
//       break
//    }
// }

// if (!isFound) {
//    console.log('Data Not Found')
// }


var find = 999
var found

for (var i = 0; i < arr.length; i++) {
   if (arr[i] === find) {
      found = 'Data found at Index ' + i
      break
   } else {
      found = 'Data not Found'
   }
}
console.log(found)