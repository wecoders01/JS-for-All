// 5. We can Pass Function as an Arguments

// 6. We can return functions from another Function.

function add(a, b) {
   return a + b
}


function manipulating(a, b, func) {
   var c = a + b
   var d = a - b


   function multiply() {
      var m = func(a, b)
      return c * d * m
   }

   return multiply

}

var multiply = manipulating(3, 4, add)

console.log(multiply())