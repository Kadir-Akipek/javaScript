/*A Promise is a way to handle asynchronous operations in 
JavaScript. It allows handlers with an asynchronous action's 
eventual success value or failure reason. This lets asynchronous 
methods return values like synchronous methods: instead of immediately 
returning the final value, the asynchronous method returns a promise to 
supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.*/

//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
doSomething(callback)

/*Promise constructor
We can create a promise using the Promise constructor. We can 
create a new promise using the key word new followed by the 
word Promise and followed by a parenthesis. Inside the parenthesis, 
it takes a callback function. The promise callback function has two parameters which are the 
resolve and reject functions.*/

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
doPromise
    .then(result => {
      console.log(result)
    })
.catch(error => console.log(error))

/*Fetch API
The Fetch API provides an interface for fetching resources (including 
across the network). It will seem familiar to anyone who has used 
XMLHttpRequest, but the new API provides a more powerful and flexible 
feature set. In this challenge we will use fetch to request url and APIS. In 
addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.*/

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
.catch(error => console.error(error)) // handling error if something wrong happens

/*Async and Await
Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.*/
const square = async function (n) {
    return n * n
  }
  
square(2)


//How do we access the value from the promise? To access the value from the promise, we will use the keyword await.
const square1 = async function (n) {
    return n * n
  }
const value = await square1(2)
console.log(value)

// Async and await go together, one can not exist without the other.
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
fetchData()