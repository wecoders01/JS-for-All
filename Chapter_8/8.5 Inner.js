// Inner function in JavaScript

function something(greet, name) {
   function sayHi() {
      console.log(greet, name)
   }
   sayHi()
}

something('Good Morning', 'iTanvir')



function any(greet, name) {
   function getFirstName() {
      if (name) {
         return name.split(' ')[0]
      } else {
         return ''
      }
   }
   var message = greet + ' ' + getFirstName()
   console.log(message)
}

any('Hi,', 'Tanvir Ahamed Shamim')