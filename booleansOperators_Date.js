let firtname
console.log(firtname) //undefinied becasue not assigned a value

let empty = null
console.log(empty) //null, means no value

/*Arithmetic operators
Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b

Compraison operators
==: equal
===: equal in value and data type: Exactly equal
!=: not equal
>: greater than
<: less than
>= Greater than or equal to
<= Less than or equal to*/

console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number 
console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true

/*Logical operators 
&&: and
||: or
!: not*/

//İncrement Operator

//Pre-increment
let count = 0
console.log(++count) //1
console.log(count) //1

//Post increment
let count2 = 0
console.log(count2++) //0
console.log(count2) //1

//We use most of the time post-increment. At least you should remember how to use post-increment operator.

//Pre-decrement
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1

//Post-decrement
let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

//Ternary operators

let number5 = 5
number > 0
  ? console.log(`${number5} is a positive number`)
  : console.log(`${number5} is a negative number`)
number = -5

number > 0
  ? console.log(`${number5} is a positive number`)
  : console.log(`${number5} is a negative number`)

//Window Methods
  //alert(method)
  alert(message)

  //Window prompt() method
  let number = prompt("Enter the number", "number goes here")
  console.log(number)

  //Window confirm() method
  const agree = confirm('Are you sure you like to delete? ')
  console.log(agree) // result will be true or false based on what you click on the dialog box


//Creating a time object
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getDate()) //day
console.log(now.getDay()) //Sunday = 0 ... Saturday = 6
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

//Getting Time
console.log(now.getTime()) //unix time

const allSeconds = Date.now() 
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true