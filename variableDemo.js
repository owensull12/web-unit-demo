// variables in JS are similar to those in Python - they are both loose-typed languages
// it is not always necessary to include the semicolon ; at the end of each line/statement (like in postgresql/SQL)
// python: name = 'Owen'
// javascript - use var or let to declare a variable
// avoid using variable names that are also keywords (like 'name')
let myName = 'Owen'

// output the name to the console (using backticks instead of quotes ``)
console.log(`Hello, ${myName}!`)

// numerical data
var monthNum = 12
var dayNum = 14
let yearNum = 2023

// output today's date to the console
console.log(`This demo was completed on ${monthNum}/${dayNum}/${yearNum}`)

// declare a constant
    // constant is a value that does not change
const numdaysinweek = 7
// numdaysinweek = 8
    // gives error message: Uncaught TypeError: Assignment to constant variable.

// coupling data together in a structured format
// JS Object Notation, aka JSON!
    // resemble python dictionaries
let inky = {
    name: 'Inky',
    color: 'Blue'
}

let pinky = {
    name: 'Pinky',
    color: 'Pink'
}

let blinky = {
    name: 'Blinky',
    color: 'Red'
}

let clyde = {
    name: 'Clyde',
    color: 'Orange'
}

console.log(inky)
console.log(inky, pinky)

// make an array
let ghosts = [inky, pinky, blinky, clyde]
console.log(ghosts)

console.log(ghosts[0])