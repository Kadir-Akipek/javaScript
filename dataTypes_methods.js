/*Primitive data types are immutable
String, İnt, Float, Booleans, Undefinied, Null, Symbol*/

//Non-primitive data types are modifiable or mutable => objects, arrays

let num1 = 3
let num9 = 3
console.log(num1 == num9)

let js2 = 'JavaScript'
let py = 'Python'
console.log(js2 == py)

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff)

//Arrays
let nums = [1, 2, 'a'] //Arrays can contain the same or different data types
nums[0] = 10
console.log(nums)

//Non-primitive data types and functions, cannot be compared by value 
let numbers1 = [1, 2, 3]
let numbers2 = [1, 2, 3]

console.log(numbers1 == numbers2)

let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

const PI = Math.PI //In JavaScript the Math Object provides a lots of methods to work with numbers
console.log(PI)

console.log(Math.round(PI)) // if above .5 up if less 0.5 down rounding
console.log(Math.floor(PI)) //rounding up
console.log(Math.ceil(PI)) //rounding down

console.log(Math.min(5, 10))
console.log(Math.max(5, 10))

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

const num10 = Math.floor(math.random () * 11) //creates random number between 0 and 10
console.log(num10)

console.log(Math.abs(-10)) //absolute value
console.log(Math.sqrt(100)) //square root
console.log(Math.pow(3, 2)) //power


//String Concatenation 
let space = " " //an empty string
let firstName = "Kadir"
let secondName = "Akipek"

let fullName1 = firstName + space + secondName
let fullName2 = firstName + " - " + secondName

console.log(fullName1)
console.log(fullName2)

console.log("HTML \n Css \n java")

/*\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/
//Template
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) 
console.log(`${a} is greater than ${b}: ${a > b}`)

//String methods
let js1 = 'JavaScript'
console.log(js1.length) //returns the number of characters
let firstLetter = js1[1]
console.log(firstLetter)

let lastIndex = js1.length - 1
console.log(lastIndex)
console.log(js1[lastIndex])


let js = "  Kadir Akipek"
console.log(js.toUpperCase()) //changes the string to uppercase letters
console.log(js.toLowerCase()) //changes the string to lowercase letters
console.log(js.substr(1, 3)) //it takes two arguments, the starting index and number of characters to slice.
console.log(js.substring(1, 6)) //it takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(js.split(" ")) //The split method splits a string at a specified place.
console.log(js.trim()) //Removes trailing space in the beginni
console.log(js.includes("z")) // It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
console.log(js.includes("a")) 
console.log(js.replace("Kadir", "Mustafa")) //replace(oldsubstring, newsubstring) takes as a parameter the old substring and a new substring.
console.log(js.charAt(12)) //Takes index and it returns the value at that index
console.log(js.charCodeAt(3)) // Takes index and it returns char code (ASCII number) of the value at that index
console.log(js.indexOf("M")) //Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(js.indexOf("K")) 

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.' //Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
console.log(string.lastIndexOf('love'))

let concat = "30"
console.log(concat.concat("Days", "Of", "JavaScript"))

let string2 = 'Love is the best to in this world' //it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(string2.startsWith('Love')) 
console.log(string2.startsWith('love'))
console.log(string2.endsWith('world')) //it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
 
let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.' //it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(string3.search('JavaScript')) 

let string4 = 'love'
console.log(string4.repeat(10)) //it takes a number as argument and it returns the repeated version of the string.
string4.match //search this

//Checking data types
let c = 5
console.log(typeof string4)
console.log(typeof c)

//Changing Data Type
    //StringToInt
    let num = "10"
    let numInt = parseInt(num)
    console.log(numInt)
    let numInt2 = Number(num)
    console.log(numInt2)
    let numInt3 = +num
    console.log(numInt3)
    //StringToFloat
    let num2 = "9.81"
    let numFloat = parseFloat(num)
    console.log(numFloat)
    let numFloat2 = Number(num)
    console.log(numFloat2)
    let numFloat3 = +num
    console.log(numFloat3)
    //FloatToInt
    let num4 = 9.81
    let numInt4 = parseInt(num4)
    console.log(numInt4)



