function addAll() {
   var sumAll = 0
   for (var i = 0; i < arguments.length; i++) {
      sumAll += arguments[i]
   }
   return sumAll
}

var result = addAll(1, 2, 3)
console.log(result)




function person(name, email) {
   return {
      Name: name,
      Email: email,
   }
}

var p1 = person('iTanvir', 'thisistanvir01@gmail.com')
console.log(p1)