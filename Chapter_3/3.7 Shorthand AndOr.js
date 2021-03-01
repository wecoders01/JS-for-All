/**
 * Shorthand work only on single statement like Ternary
 */

 var name = ''

// var fullName = ''

//  if(name.length === 0){
//     fullName = 'Tanvir Ahamed'
//  }else{
//     fullName = name
//  }

 // variable empty thakle statement exist hobe tasara variable return korbe
 var fullName = name || 'Tanvir Ahamed'
 console.log(fullName)



 var isOk = true

//  if(isOk){
//     console.log('Everything is Ok')
//  }

// variable only true hole ei statement return korbe.
 isOk && console.log('Everything is ok')