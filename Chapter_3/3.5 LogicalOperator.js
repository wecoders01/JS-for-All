/**
 * 3 Logical Operators
 * 
 * && And Operator
 * || OR Operator
 * ! NOT Operator
 */

// && And Operator
/**
 * A && B
 * True && True = True
 * True && False = False
 * False && True = False
 * False && False = False
*/

// || OR Operator
/**
 * A || B
 * True || True = True
 * True || False = True
 * False || True = True
 * False || False = False
 */

 var a = 10
 var b = 20
 var c = 30
 var d = 40

if( a > b && c > d ){
   console.log('A greater than B and C greater than D')
}else {
   console.log('One condition is False')
}

if( a > b || c > d ){
   console.log('Either A is greater than B Or C is greater than D')
}else {
   console.log('Two condition is False')
}


// ! NOT Operator
var check = !( a > b )
console.log(check)