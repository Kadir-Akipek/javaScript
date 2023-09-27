//Defining a classes
class ClassName {
    //code goes here
}

//Class Instaniation
class Person2 {
    //code goes here
}

const person = new Person2() //we create an object
console.log(person)

//Class Constructor
class Person {
    constructor (firstName, lastName = "Akipek") { //we create a method and assing a default value
        console.log(this) //check the output from here
        this.firstName = firstName //we add properties
        this.lastName = lastName
        this.skills = []
    }
    getFullName() { //another method
        return this.firstName + " " + this.lastName
    }
    get getSkills() {
        return this.getSkills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    static adana() {
        return "adana"
    }
}

const person1 = new Person("Kadir", "Akipek")
const person2 = new Person("Mustafa", "Akipek")
const person3 = new Person("Kadir", "Tan")

person1.setSkill = "javascript"
person2.setSkill = "react"

console.log(person1.getSkills) //we dont need parenthesis to call a getter method

console.log(
    person1,
    person2,
    person3
)

console.log(Person.adana())

/*getter(get method, the code is above)
The get method allow us to access value from the object. We write 
a get method using keyword get followed by a function. Instead of accessing 
properties directly from the object we use getter to get the value.*/

/*setter(set method, the code is above)
The setter method allow us to modify the value of certain  properties. We write 
a setter method using keyword set followed by a function. See the example bellow.*/

/*Static Method(the code is above)
The static keyword defines a static method for a class. Static methods are not called 
on instances of the class. Instead, they are called on the class itself. These are often utility 
functions, such as functions to create or clone objects. An example of static method is Date.now()*/

/*Inheritance
Using inheritance we can access all the properties and the methods of the parent class. This reduces 
repetition of code. If you remember, we have a Person parent class and we will create children from 
it. Our children class could be student, teach etc.*/

class Teacher extends Person {
    teach() {
        return "mathematics is being taught"
    }
}

class Student extends Person {
    learn() {
        return "lesson learning"
    }
}

const teacher1 = new Teacher()
console.log(teacher1.getFullName())

const student1 = new Student()
console.log(student1.getSkills())

//Overriding Methods
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }
}
