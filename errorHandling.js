try {
    //code that my throw an error
} catch (error) {
    //code to be executed if an error occurs
} finally {
    //code to be executed regardless of an error occurs or not
}

try {
    let lastName = "Kadir"
    let fullName = firstName + " " + lastName
} catch (err) {
    console.log("Name of the error", err.name)
    console.log("Error message", err.message)
} finally {
    console.log("In any case I will be executed")
}

//Use the throw statement to throw an exception
const throwErrorExampleFun = () => {
    let message
    let x = prompt("Enter a number: ")
    try {
        if (x == " ") throw "empty"
        if (isNaN(x)) throw "not a number"
        x = Number(x)
        if (x < 5) throw "too low"
        if (x > 10) throw "too high"
    } catch (err) {
        console.log(err)
    }
} 
throwErrorExampleFun()

/*Error types
ReferenceError,
SyntaxError,
TypeError*/