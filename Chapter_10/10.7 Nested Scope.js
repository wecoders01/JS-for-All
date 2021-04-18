var x = 55

function test() {
   var x = 50
   // console.log(x)

   function nested() {
      var y = 60
      console.log(x)
   }
   // console.log(y)
   nested()
}
test()