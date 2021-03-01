 /*
1. Primitive //from javascript 
 >Number //10 2.3 2.13
 >String  // 'this is text' + "this is text"
 >Boolean //True, False

 >Undefined
 >Null


2. Object  //we make own data using primitive
 >Array
 >object
 >function
 */



//  ***************** NUMBER ******************
var n = 123
var f = 1.12
var nn = Number(45)
// console.log(nn)

// var ff = Number('45') //String make a number
// console.log(ff)
// console.log(Number.parseFloat(ff)) //convert integer to float, js ignore .00

var ff = Number('45.45') //String make a number
console.log(ff)
console.log(Number.parseInt(ff)) //convert Float to Integer 


console.log(Number.MAX_VALUE) //max value can store js
console.log(Number.MIN_VALUE) //min value can store js

console.log(1/0) //infinity number
console.log('abc' * 10) // not a number


// Hexadecimal Number
var hex = 0xff //start '0x'
console.log(hex)


// Octal Number
var oct = 0756 //start '0'
console.log(oct)




//  *****************  STRING ******************

//anything between the quote '', ""
var str = 'string'
var str2 = "string"
var str3 = `string`

var str4 = String('text')
var str5 = String(123)
var str6 = String(3.14)

// console.log(str, str2)



//  *****************  BOOLEAN ******************

//Conditional Ans

//literal 
var b1 = true
var b2 = false

//constructor
var b3 = Boolean(true)
var b4 = Boolean(false)

// console.log(b1, b2)



//  *****************  Null vs Undefined ******************

//without value => Undefined
//Unknown value => Null

var abc
var xyz = null

// console.log(abc)
// console.log(xyz)