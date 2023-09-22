const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

/*If we like to skip on of the values in the array we use additional comma.
The comma helps to omit the value at that specific index*/

const numbers2 = [1, 2, 3]
let [numOne2, numTwo2, numThree2] = numbers2

console.log(numOne2, numThree2)

//We can use default value in case the value of array for that index is undefined

const names = [undefined, "Brook", "David"]
let [firstPerson = "Asabeneh",
    secondPerson,
    thirdPerson,
    fourthPerson = "John"] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

/*We can not assign variable to all the elements in the array. 
We can destructure few of the first and we can get the remaining 
as array using spread operator(...).*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)


//Destructing during iteraion
const countries = [["Finland", "Helsinki"], ["Sweden", "Stockholm"], ["Norway", "Oslo"]]

for (const [country, city] of countries) {
    console.log(country, city)
}

//Destructuring Object
/*When we destructure the name of the variable we use to destructure should 
be exactly the same as the key or property of the object. See the example below.*/

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

//Renaming during structuring
const rectangle2 = {
    width: 20,
    height: 10,
    area: 200
}

let {width: w, height: h, area: a, perimeter: p} = rectangle2
console.log(w, h, a, p)

//Default value structuring
const rectangle3 = {
    width: 20,
    height: 10,
    area: 200
  }
let { width3, height3, area3, perimeter3 = 60 } = rectangle3
  
console.log(width3, height3, area3, perimeter3)


//Object parameter without destructuring
const rect = {
    width: 20,
    height: 10,
}

const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height) 
}

console.log(calculatePerimeter(rect)) //60


//Destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
    
for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}

/*Spread or rest operator
When we destructure an array we use the spread operator(...) 
to get the rest elements as array. In addition to that we 
use spread operator to spread array elements to another array.*/

//Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

//Spread operator to copy object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
const copiedUser = {...user}
console.log(copiedUser)

//Modifying or changing the object while copying
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)

//Spread operator with arrow function
const sumAllNums = (...args) => {
    console.log(args)
  }
  
sumAllNums(1, 2, 3, 4, 5)