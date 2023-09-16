//Function Declaration
function functionName() {
    // code goes here
  }

functionName()

//if a function does not return values the value of the function is undefined.
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}

console.log(addTwoNumbers())

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}

console.log(sumTwoNumbers(10 , 20))

function sumArrayValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    }
    return sum
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers))

//Function with unlimited number of parameters
function sumAllNums() {
    
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

//unlimited number of parameters in arrow function
const sumAllNums1 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
   }
   
sumAllNums1(1, 2, 3, 4) //[ 1, 2, 3, 4 ]

//Anonymus function or without name
const anonymusFun = function() {
    console.log(
        "I am an anonymus function and my value is stored in anonymusFun"
    )
}

/*Expression Function
Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. 
To return a value from the function we should call the variable. Look at the example below.*/

const square = function(n) {
    return n * n
}

console.log(square(2))

/*Self Invoking Functions
Self invoking functions are anonymous functions 
which do not need to be called to return a value.*/

let squaredNum = (function(n) {
    return n * n
  })(10)

/*Arrow function
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.*/
const square2 = n => {
    return n * n
}

console.log(square2(2))

//Function with default parameters
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
console.log(greetings())
console.log(greetings('Asabeneh'))