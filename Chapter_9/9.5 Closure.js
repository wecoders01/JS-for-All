// First Look at Closure
// When one scope value come form another scope then it's called closure.

var a = 10

function a() {
   var x = 20

   return function () {
      console.log(x)
   }
}

var abc = a()
console.dir(abc)