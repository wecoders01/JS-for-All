import '../styles/index.scss';

/*
* Template String
*/
// var name = 'iTanvir'
// var age = '27'

// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult.`)

// console.log(name.padStart(10, '*'))
// console.log(name.padEnd(10, '*'))
// console.log('S'.repeat(10))


/**
 * Var vs Let vs Const
 *
 * var: didn't create block
 * let: create block
 * const: constant, doesn't change the value
 */

// let a = 10
// a = 100
// console.log(a)

// for (let i = 0; i < 5; i++) {
//    console.log(i)
// }
// console.log(i)

// Simple block
// {
//    let b = 20
//    console.log(b)
// }
// console.log(b)



/**
 * Arrow Function Syntax in ES6
 */

// normally function call
// function add(a, b){
//    return a+b
// }
// let add1 = function (a, b){
//    return a+b
// }

// modern syntax
// let add = (a, b) => {
//    return a + b
// }
// console.log(add(45, 50))

// let add1 = (a, b) => a + b
// console.log(add1(45, 50))

// let sqr = x => x * x
// console.log(sqr(10))


/**
 * Arrow Function with This
 *
 * our webpack use strict method thats why this provide undefine instead window function
 * in arrow function this provide parent value or object
 * we can't use other function or object using call, bind etc
 */

// function testMe() {
//    console.log(this)
// }
// testMe()

// let obj = {
//    name: 'iTanvir',
//    print: () => {
//       console.log(this)
//    }
// }
// obj.print()

// let obj = {
//    name: 'iTanvir',
//    print: function () {
//       setTimeout(() => {
//          console.log(`Hello, ${this.name}`)
//       }, 1000)
//    }
// }
// obj.print()


/**
 * Default Parameters
 *
 */

// function sqr(n = 1) {
//    return n * n
// }
// console.log(sqr(5))

// If we set default parameter and try to call null or undefine It's back errors.
// function greet(name = 'iTanvir', msg = 'Hello') {
//    console.log(name.length)
//    console.log(`${name}! ${msg}`)
// }

// greet(null, 'hi')


/**
 * Rest and Spread Operators
 * 
 * when we use in function parameter it's called rest
 * otherwise it's called spread
 */

// function sum() {
//    let sum = 0
//    for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//    }
//    console.log(sum)
// }
// sum(1, 2, 3, 4, 5)

// // REST
// function sum(...rest) {
//    return rest.reduce((a, b) => a + b)
// }
// console.log(sum(1, 2, 3, 4, 5))


// //SPREAD
// let a = [1, 2, 3, 4, 5]
// console.log(...a)

// let obj = {
//    a: 10,
//    b: 20,
//    c: 30
// }

// let obj2 = {
//    ...obj
// }
// console.log(obj2)


/**
 * Enhance Object
*/

let a = 10, b = 20

let obj = {
   a,
   b,
   print() {
      console.log(this)
   }
}
console.log(obj)