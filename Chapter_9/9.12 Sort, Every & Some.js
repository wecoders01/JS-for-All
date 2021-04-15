// Sort in JavaScript

var persons = [
   {
      name: 'A',
      age: 26
   },
   {
      name: 'B',
      age: 21
   },
   {
      name: 'C',
      age: 30
   },
   {
      name: 'D',
      age: 24
   }
]

var arr = [3, 2, 8, 9, 3, 2, 9, 1, -8, 2, -1, 0]

// arr.sort()
// console.log(arr)

// persons.sort()
// console.log(persons)


arr.sort(function (a, b) {
   if (a > b) {
      return 1
   } else if (a < b) {
      return -1
   } else {
      return 0
   }
})
console.log(arr)


persons.sort(function (a, b) {
   if (a.age > b.age) {
      return 1
   } else if (a.age < b.age) {
      return -1
   } else {
      return 0
   }
})
console.log(persons)


// Every in JavaScrip
// Find all form full array
// Return Boolean

var result1 = arr.every(function (value) {
   return value >= 0
})
console.log(result1)


// Every in JavaScrip
// Find at least one form full array
// Return Boolean
var result2 = arr.some(function (value) {
   return value <= 0
})
console.log(result2)