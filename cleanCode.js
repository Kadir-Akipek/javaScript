//Variables
let firstName = "Asabeneh"
const PI = Math.PI
const gravity = 9.81

/*Arrays
We chose to make array names plural*/
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

//Functions
const printFullName = (firstName, lastName) => firstName + ' ' + lastName
const square = (n) => n * n

//Loops
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}

//Conditional
let a = 0
if (a > 0) {
 console.log(`${a} is a positive number`)
} else if (a < 0) {
 console.log(`${a} is a negative number`)
} else if (a == 0) {
 console.log(`${a} is zero`)
} else {
 console.log(`${a} is not a number`)
}

/*Objects
We declare object literal with const*/
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
    isMarried: true
}

for(const key in person) {
    console.log(key, person[key])
}