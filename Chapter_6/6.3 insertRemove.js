// Insert and Remove specific element

var arr = [1, 2, 3, 4, 5, 6, 7, 8]


// ***** Insert 9 to index 3 without remove 4

// arr[3] = 9 // replace index 3
// arr.push(9) // added in the last element
// arr.unshift(9) // added in the first

// arr.splice(3, 0, 9) // insert 9 to index 3 without delete 4
// arr.splice(3, 0, 9, 10) // we can insert more element as well


// ******** Remove specific Element
// arr[3] = undefined 
// arr.pop() // remove last element
// arr.shift() // remove first element

// arr.splice(3, 1) // remove index 3
arr.splice(3, 1, 44,) // we can replace also

console.log(arr)
