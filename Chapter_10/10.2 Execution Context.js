// JavaScript Execution Context

function a() {
   d()
   console.log('I am function A')
}

function b() {
   c()
   console.log('I am function B')
}

function c() {
   console.log('I am Function C')
}

function d() {
   b()
   console.log('I am Function D')
}


var x = 100
a()
console.log('I am Global')


/**
 * JavaScript Execution by LIFO (last in first out)
 */