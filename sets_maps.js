/*Set
Set is a collection of elements. Set can only contains unique elements. 
Set is an iterable object and we can iterate through each elements.
Let us see how to create a set in the section below.*/

//Creating an empty set
const companies = new Set()
console.log(companies)

//Creating set from array
const languages = [
    "English",
    "French",
    "Spanish"
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
    console.log(language)
}

//Adding an element to a set
setOfLanguages.add("Turkish")

//Deleting an element a set
console.log(setOfLanguages.delete("Turkish"))
console.log(setOfLanguages.size)

//Checking an element in set
console.log(setOfLanguages.has("Turkish")) //true or false

//Clearing the set
setOfLanguages.clear()

//Union of sets
let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets
let a = [1, 2, 3]
let b = [4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)

//Diffrence of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)

//Creating an empty map
const map = new Map()
console.log(map)

//Creating an Map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const map = new Map(countries)
console.log(map)
console.log(map.size)

//Adding values to the Map
countries.set('Finland', 'Helsinki')

//Getting a value from Map
console.log(countries.get('Finland'))

//Checking key in Map
console.log(countries.has('Finland')) //true or false

//Getting all values from map using loop
for (const country of countries) {
    console.log(country)
  }