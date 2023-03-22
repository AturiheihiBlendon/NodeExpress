const names = require('./names')

// destructuring
// const {Levis, Nasser} = require('./names')
function sayHi(name) {
   console.log(`Hey ${name}`) 
}

sayHi("Blendon")
sayHi(names.Levis)
sayHi(names.Nasser)

// // for destructuring
// sayHi("Blendon")
// sayHi(Levis)
// sayHi(Nasser)