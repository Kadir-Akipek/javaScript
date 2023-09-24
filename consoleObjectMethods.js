//We use console object methods to show output on the browser console and we use document

/*console.log()
We use console.log() to show output on the browser console. We can substitute 
values and also we can style the logging out put using %c.*/
console.log(3+4)

/*CSS
We can style logging message using css. Copy the following 
code and paste it on browser console to see the result.*/
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
)

/*console.warn()
We use console.warn() to give warning on browser. For instance to 
inform or warn deprecation of version of a package or bad practices.*/

console.warn("This is a warning")

//console.error() method shows an error messages
console.error('We all make mistakes')

/*console.table()
The console.table() method display data as a table on the console. 
The console.table() takes one required argument data, which must be 
an array or an object, and one additional optional parameter columns.*/
const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries1)

/*console.time()
Starts a timer you can use to track how long an operation takes. You give 
each timer a unique name, and may have up to 10,000 timers running on a given 
page. When you call console.timeEnd() with the same name, the browser will output 
the time, in milliseconds, that elapsed since the timer was started.*/
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
console.timeEnd('Regular for loop')

/*console.info()
The console.assert() methods writes an error message to the console 
if the assertion is false. If the assertion is true, nothing happens. 
The first parameter is an assertion expression. If this expression is 
false, an Assertion failed error message will be displayed.*/

console.info('30 Days Of JavaScript challenge is trending on Github')

/*console.assert()
The console.assert() methods writes an error message to the console if 
the assertion is false. If the assertion is true, nothing happens. The 
first parameter is an assertion expression. If this expression is false, 
an Assertion failed error message will be displayed.*/

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

/*console.clear()
cleans the browser console*/

/*console.count()
It prints the number of times the console.count() is called. It takes a 
string label parameter. It is very helpful to count the number of times 
a function is called. In the following example, the console.count() method will run three times*/

const func = () => {
  console.count('Function has been called')
}
func()
func()
func()

/*console.group()
The console.group() can help to group different log groups. 
Copy the following code and paste it on browser console to the groups.*/