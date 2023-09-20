/*Callbcak
Higher order functions are functions which take other function as a parameter or return a function as a value. 
The function passed as a parameter is called callback.*/

const callback = (n) => {
    return n**2
}

function cube(callback, n) { //callback is a parameter
    return callback(n) * n
}

console.log(cube(callback, 3))

//Returning Function
const highOrder = n => {
    const doSomething = m => {
        const doWhatEvet = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEvet
    }
    return doSomething
}

console.log(highOrder(2)(3)(10)) //highorder parameter = 2, doSom.. = 3, doWhat.. 0 10

/*Setting Time
In JavaScript we can execute some activities in a certain interval of time or 
we can schedule(wait) for some time to execute some activities.*/

//Setting interval using a setInvertal function
function sayHello() {
    console.log("Hello")
}

setInterval(sayHello, 1000) //// it prints hello in every second, 1000ms is 1s

//Setting a time using a setTimeout
function sayHi() {
    console.log("Hi")
}
setTimeout(sayHi, 2000) //// it prints hello after it waits for 2 seconds.

//Functinal Programming

/*forEach
Iterate an array elements. We use forEach only with arrays. 
It takes a callback function with elements, index parameter and array itself. 
The index and the array optional.*/

let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => sum += num)
/*
number.forEach(funciton)(number) {
    sum += num
}*/

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

/*Map
Iterate an array elements and modify the array elements. 
It takes a callback function with elements, index , array parameter and return a new array.*/
const numbers2 = numbers.map(number => number * 2)
console.log(numbers2)

const names = ["Asabeneh", "Mathias", "Elias"]
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

/*Filter
Filter out items which full fill filtering conditions and return a new array.*/
const countriesContainingLand = countries.filter((country) => country.includes("land"))
console.log(countriesContainingLand)

/*Reduce
Reduce takes a callback function. The call back function takes accumulator, current, and 
optional initial value as a parameter and returns a single value.*/
const numbers3 = [1, 2, 3, 4, 5]
const sum2 = numbers3.reduce((oldValue, currentValue) => oldValue + currentValue, 0)
console.log(sum)

/*Every
 Check if all the elements are similar in one aspect. It returns boolean*/
const names4 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names4.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr) //true

/*Find
Return the first element which satisfies the condition*/
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age) //18

/*FindIndex
Return the position of the first element which satisfies the condition*/
const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]

const result = names5.findIndex((name) => name.length > 7)
console.log(result)

/*Some
Check if some of the elements are similar in one aspect. It returns boolean*/
const names6 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue)

/*Sort
The sort methods arranges the array elements either ascending or descending order. 
By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. 
If number values are sorted as strings and it give us wrong result. Sort method modify the original array. 
It is recommended to copy the original data before you start using sort method.*/

//Sorting string values
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

//Sorting numeric values
const numbers7 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers7.sort()) //[100, 3.14, 37, 9.81]
numbers7.sort(function (a, b) {
  return a - b
})

console.log(numbers7) // [3.14, 9.81, 37, 100]

numbers7.sort(function (a, b) {
  return b - a
})
console.log(numbers7) //[100, 37, 9.81, 3.14]

/*Sorting object arrays
Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.*/
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })

//or

objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })