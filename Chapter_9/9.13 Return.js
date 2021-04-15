// Return function from another function

// function greet(msg) {
//    function greetings(name) {
//       return msg + ', ' + name + '!'
//    }
//    return greetings
// }

// var gm = greet('Good Morning')
// var gn = greet('Good Night')

// console.log(gm('iTanvir'))
// console.log(gn('iTanvir'))


function power(b) {
   function value(n) {
      var result = 1
      for (var i = 0; i < b; i++) {
         result *= n
      }
      return result
   }
   return value
}

var power10 = power(2)
var power5 = power(5)

console.log(power10(5))
console.log(power5(10))