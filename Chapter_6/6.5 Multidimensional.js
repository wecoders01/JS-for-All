// Multidimensional Array

var arr = [
   [75, 78, 90, 80],
   [98, 77, 55, 80],
   [75, 88, 75, 90]
]

// console.log(arr)
// console.log(arr[0][0])
// console.log(arr[1][0])

for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length; j++) {
      console.log('Element ' + i + ' : ' + arr[i][j])
   }
}