//Create array
const arr1 = Array()
const arr = []

const numbers = [1, 2, "three", "four", 5.0]
console.log("Numbers: ", numbers)
console.log("Number of numbers: ", numbers.length)

let js = 'JavaScript' //use '' not use ""
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

let txt ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

//Accessing array items using index
let number = [45, 97, 34, 51, 68]
let firstWord = number[0]
let lastIndex = number.length - 1
lastWord = number[lastIndex]
console.log(firstWord, lastWord)

//Modifying array element
number[0] = 1
number[1] = 7
let lastNumber = number.length - 1
number[lastNumber] = 89
console.log(number[0], number[1], number[lastNumber])


//Methods to manipulate array
const eighEmptyValues = Array(8)
console.log(eighEmptyValues)

const eightXValues = Array(8).fill("X")
console.log(eightXValues)
const eight0Values = Array(8).fill(0)
console.log(eight0Values)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)
console.log(thirdList.length)
console.log(thirdList.indexOf(3)) //2
console.log(thirdList.indexOf(9)) //-1
console.log(thirdList.lastIndexOf(6)) //5
console.log(thirdList.lastIndexOf(9)) //-1
console.log(thirdList.includes(5)) //true
console.log(thirdList.includes(8)) //false

const numbers2 = [1, 2, 3, 4, 5] //To check if the data type is an array
console.log(Array.isArray(numbers2)) //true
console.log(numbers2.toString()) //converts array to string

//Joining array elements
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

console.log(names.slice(1, 3)) //To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const numbers3 = [1, 2, 3, 4, 5] //Starting position, number of times to be removed and number of items to be added.
numbers3.splice() //remove all items
numbers3.splice(0, 1) //remove first item
numbers3.splice(3, 3, 7, 8, 9) // -> [1, 2, 3, 7, 8, 9] it removes three item and replace three items

numbers3.push(6) //adding item in the end
console.log(numbers3)

numbers3.pop() //remove one item from the end
console.log(numbers3) 

numbers3.shift() //removing one array element in the beginning of array 
console.log(numbers3)

numbers3.reverse() //reverse the order of an array
console.log(numbers3)

numbers3.sort() //arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
console.log(numbers3)

numbers3.reverse() // after sorting we can reverse it
console.log(numbers3)

const arrayOfArray = [[1, 2, 3], [4, 5, 6]]
console.log(arrayOfArray[0])

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   
console.log(fullStack.length) 
console.log(fullStack[0])  
console.log(fullStack[1]) 




