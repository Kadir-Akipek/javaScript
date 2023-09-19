/*Window Global Object
Without using console.log() open your browser and check, 
you will see the value of a and b if you write a or b on the browser. 
That means a and b are already available in the window.*/

a = "JavaScript"  // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}

console.log(a, b)

/*Global Scope
A globally declared variable can be accessed every where in the same file. 
But the term global is relative. It can be global 
to the file or it can be global relative to some block of codes.*/

let e = 'JavaScript' // is a global scope it will be found anywhere in this file
let f = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(e, f) // JavaScript 10, accessible
  if (true) {
    let e = 'Python' //local
    let f = 100 //local
    console.log(e, f) // Python 100
  }
  console.log(e, f)
}
letsLearnScope()
console.log(e, f) //JavaScript 10

//Local Scope, A variable declared as local can be accessed only in certain block code

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

/*Now, you have an understanding of scope.A variable declared with var only scoped 
to function but variable declared with let or const is block scope
(function block, if block, loop block, etc). 
Block in JavaScript is a code in between two curly brackets ({})*/

function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

//The scope let and const are the same. The difference is only reassigning.


//Object
const person1 = {} //an empty object

//Getting values from an object
const person = {
  firstName: "Asabeneh", //key-value
  lastName: "Yetayeh", 
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true,
  getFullName: function() { //methods
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person)
console.log(person.getFullName())

//Getting values from an object
console.log(person.firstName)
console.log(person["firstName"])

//Setting new key for an object
person.nationality = "Ethiopian"
person.title = "Teacher"

//Objects Method
let person2 = Object.assign({}, person) //Object.assign: To copy an object without modifying the original object
person2.name = "Kadir"
person2.lastName = "Akipek"
console.log(person2)

//object key-value using
const keys = Object.keys(person)
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name')) //hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('score'))