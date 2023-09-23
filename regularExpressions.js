//Creating a pattern with RegExp Constructor

//without flag
let pattern = "love"
let flag = "gi"
let regEx = new RegExp(pattern, flag)

let regex = /love/ //another regex design

//test():Tests for a match in a string. It returns true or false.
let word = /salak/i //i for big-small letter sensivity
let comment = "sen salak misin kardesim"

if (word.test(comment)) {
    alert("hayir sen salaksin kardesim")
}

/*Array containing all of the match
Returns an array containing all of the matches, including capturing groups, 
or null if no match is found. If we do not use a global flag, match() returns 
an array containing the pattern, index, input and group.*/
let str = "I love javascript and i love prototurk"
console.log(str.match(/love/ig)) //g(global flag) for all matches

/*Replace a substring
Executes a search for a match in a string, and replaces the 
matched substring with a replacement substring.*/
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/gi, 'JavaScript')
console.log(matchReplaced)
console.log(/[0-9]/g)

const pattern2 = '[Aa]pple' // this square bracket means either A or a
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt2.match(pattern2)

console.log(matches)  

const pattern3 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches3 = txt3.match(pattern3)

console.log(matches3)  

const pattern4 = /[a]./g  // this square bracket means a and . means any character except new line
const txt4 = 'Apple and banana are fruits'
const matches4 = txt4.match(pattern4)

console.log(matches4)

const pattern5 = /[a].*/g  //. any character, + any character one or more times 
const txt5 = 'Apple and banana are fruits'
const matches5 = txt5.match(pattern5)

console.log(matches5)

const txt6 = 'This regular expression example was made in December 6,  2019.'
const pattern6 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches6 = txt6.match(pattern6)
console.log(matches6)

//Negation
let pattern7 = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
let result = pattern7.test(name)

console.log(result)

//Starts with
const txt8 = 'This regular expression example was made in December 6,  2019.'
const pattern8 = /^This/ // ^ means starts with
const matches8 = txt8.match(pattern8)
console.log(matches8)