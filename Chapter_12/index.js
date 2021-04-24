// ******************** Method inside Object **************************
// var rect = {
//    height: 100,
//    width: 50,


//    draw: function () {
//       console.log('I am a rectangle')
//       this.printProperties()
//       console.log(this)
//    },

//    printProperties: function () {
//       console.log('my height is ' + this.height)
//       console.log('my width is ' + this.width)
//    }
// }
// rect.draw()
// // rect.width = 100
// // rect.draw()



// ******************** THIS **************************
// /**
//  * 1. Je object e this use kora hobe shetakei refer korbe 
//  * 2. jodi kono function e use kora ha tahole window object e refer korbe
//  * 3. jodi onno kono object e onno method use kora hoy tahole ag muhurter property refer korbe
//  */

// function myFunc() {
//    console.log(this)

//    rect.printProperties()
// }
// myFunc()
// // new myFunc() // empty function return korbe


// var another = {
//    height: 45,
//    width: 60,

//    print: rect.printProperties
// }
// console.log(another.print)
// another.print()




// ******************** Create Class using Factory Pattern **************************

var createRect = function (height, width) {
   return {
      height: height,
      width: width,


      draw: function () {
         console.log('I am a rectangle')
         this.printProperties()
      },

      printProperties: function () {
         console.log('my height is ' + this.height)
         console.log('my width is ' + this.width)
      }
   }
}


let rect1 = createRect(10, 20)
// rect1.draw()

// let rect2 = createRect(30, 40)
// rect2.draw()


// ******************** Create Class using Constructor Pattern **************************

var Rectangle = function (height, width) {
   this.height = height
   this.width = width


   this.draw = function () {
      console.log('I am a rectangle')
      this.printProperties()
   },

      this.printProperties = function () {
         console.log('my height is ' + this.height)
         console.log('my width is ' + this.width)
      }
}

// var rect3 = new Rectangle(100, 200)
// rect3.draw()


// ******************** NEW **************************

function myNew(constructor) {
   var obj = {}
   Object.setPrototypeOf(obj, constructor.prototype)
   var argsArray = Array.prototype.slice.apply(arguments)
   constructor.apply(obj, argsArray.slice(1))

   return obj
}

// var rect4 = myNew(Rectangle, 45, 50)
// rect4.draw()


// ******************** Constructor **************************

// always use new constructor for reference creating object
var str = new String('str')
// console.log('My String is ' + str)


// ******************** Function are Object in JavaScript **************************

function test() {
   console.log('something')
}
// console.log(test.name, test.length)


var Rect = new Function('height', 'width', `this.height = height
this.width = width


this.draw = function () {
   console.log('I am a rectangle')
   this.printProperties()
},

   this.printProperties = function () {
      console.log('my height is ' + this.height)
      console.log('my width is ' + this.width)
   }`
)
// var rect5 = new Rect(5, 4)
// console.log(rect5)


// ******************** Call, Apply, Bind **************************
// Call, Apply

// function myFunc() {
//    console.log(this)
//    console.log(this.a + this.b)
// }
// myFunc.apply({ a: 10, b: 20 })
// myFunc.call({ a: 10, b: 20 })


// function myFunc(c, d) {
//    console.log(this)
//    console.log(this.a + this.b + c + d)
// }
// myFunc.apply({ a: 10, b: 20 }, [5, 5])
// myFunc.call({ a: 10, b: 20 }, 5, 5)



// Bind
// Only bind object not for call
function myFunc(c, d) {
   console.log(this.a + this.b + c + d)
}
// var bindFunc = myFunc.bind({ a: 10, b: 20 }, 5, 5)
// bindFunc()
// var bindFunc = myFunc.bind({ a: 10, b: 20 })
// bindFunc(5, 5)


// ******************** Pass by Value **************************
// ******************** Call by Value **************************

var n = 10

function change(n) {
   n += 100
   console.log(n)
}
// change(n)
// console.log(n)


// ******************** Pass by Reference **************************
// ******************** Call by Reference **************************
var obj = {
   a: 10,
   b: 20,
}

function changeMe(obj) {
   obj.a += 100
   obj.b += 100
   console.log(obj)
}
// changeMe(obj)
// console.log(obj)


// ******************** Abstraction **************************

var Rectangle = function (height, width) {

   var position = {
      x: 50,
      y: -100
   }

   this.height = height
   this.width = width

   var printProperties = function () {
      console.log('my height is ' + this.height)
      console.log('my width is ' + this.width)
   }.bind(this)

   this.draw = function () {
      console.log('I am a rectangle')
      printProperties()
      console.log('Position: X= ' + position.x + 'Y= ' + position.y)
   }


}

// var rect7 = new Rectangle(100, 200)
// rect7.draw()


// ******************** Getter & Setter **************************

var Rectangle = function (height, width) {

   var position = {
      x: 50,
      y: -100
   }

   this.height = height
   this.width = width

   var printProperties = function () {
      console.log('my height is ' + this.height)
      console.log('my width is ' + this.width)
   }.bind(this)

   this.draw = function () {
      console.log('I am a rectangle')
      printProperties()
      console.log('Position: X= ' + position.x + 'Y= ' + position.y)
   }

   // this.getPosition = function () {
   //    return position
   // }

   Object.defineProperty(this, 'position', {
      get: function () {
         return position
      },
      set: function (value) {
         position = value
      }
   })


}

var rect8 = new Rectangle(100, 200)
rect8.draw()
// console.log(rect8.getPosition())

rect8.position = {
   x: 123,
   y: -123
}
console.log(rect8.position)