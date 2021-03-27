

var addition = function (a, b) { // Anonymous function
   return a + b
}

addition(10, 20)



setTimeout(function () {
   console.log('I will call after 5 second.')
}, 5000);

var another = addition
console.log(another(2, 3))