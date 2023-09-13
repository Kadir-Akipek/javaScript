//if-else

let num1 = -2
if (num1 > 0) {
    console.log(`${num1} is a positive number`)
} else if (num1 == 0) {
    console.log(`${num1} is zero`)
} else {
    console.log(`${num1} is a negative number`)
}

//switch(alternative if-else)
let weather = "cloudy"
switch (weather) {
    case "rainy":
        console.log("You need a rain coat")
        break
    case "cloudy":
        console.log("It might be cold, you need a jacket")
        break
    case "sunny":
        console.log("Go out freely")
        break
    default:
        console.log("No need for a rain coat")
}

let num = prompt("Enter number")
switch (true) {
  case num > 0:
    console.log('Number is positive')
    break
  case num == 0:
    console.log('Numbers is zero')
    break
  case num < 0:
    console.log('Number is negative')
    break
  default:
    console.log('Entered value was not a number')
}

//Ternary Operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')