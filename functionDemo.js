/*
    python function definition
    def hello():
        print('Hello there)
*/

// JS function definition
function hello()
{
    console.log('The hello() function was called!')
}

// call the function
hello()

// function that takes a value and multiplies it by 2
function timesTwo(num)
{
    return num * 2
}

let doubleValue = timesTwo(12)

console.log(doubleValue)

// built-in functions in JS

// round a value down
let longNum = 12.3456789
let roundedNum = Math.floor(longNum)
console.log(longNum)
console.log(roundedNum)