// First Class Function

function add(a, b) {
   return a + b
}

// 1. A Function can be stored in a variable
var sum = add
console.log(sum(2, 3))
console.log(typeof sum)


// 2. A Function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3, 5))


// 3. A Function can be stored in an Object
var obj = {
   sum: add
}
console.log(obj)
console.log(obj.sum(5, 3))


// 4. We can create function as needed.
setTimeout(function () {
   console.log('I have created.....')
}, 100)

// 5. We can Pass Function as an Arguments

// 6. We can return functions from another Function.