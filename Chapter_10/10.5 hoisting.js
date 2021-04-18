var a = 100

// newPrint(10)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
   console.log(a)
}

print(a)


// Creational Phase
// a = undefine
// newPrint = undefine
// print = ref


// Executional Phase
// a = 100
// newPrint = undefine
// print = 10
// newPrint = ref
// newPrint = 45
// print = 100