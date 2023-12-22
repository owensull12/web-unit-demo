/*
    use relational operators to check for conditions
    >, <, >=, <=, ==, ===, !=, &&, ||

    == - is equal to (ignores data type. '1' == 1 is True)
    === - is equal to (includes data type. '1' === 1 is False)
    && - logical and (inclusive comparison)
    || - logical or (optional comparison)

    = - used for assignment (variables, constants) and not for comparisons
*/

// single alternative decision - if statement:
let a = 1
let b = 2
if (a < b)
{
    console.log(`${a} is less than ${b}`)
} // curly braces are used if there is more than one statement that applies to the condition being true - 2 console.logs, for example

// dual alternative - if/else
let c = 3
let d = 4
if (c == d)
{
    console.log(`${c} is equal to ${d}`)
}
else
{
    console.log(`${c} does not equal ${d}`)
}

// multiple alternatives - version 1: if/else if
    // example NOT using curly braces
if (a == 1)
console.log('a = 1')
else if (a == 2)
console.log('a = 2')
else if (a == 3)
console.log('a = 3')

// multiple alternatives - version 2: switch statement
    // if/else if statements are more flexible: if (x), else if (anything else) vs if (x), else if (y)
    // switch statements require an output/case for each possible outcome
switch(a)
{
    case 1:     // basically 'if (a = 1)'
        console.log('a = 1')
        break
    case 2:
        console.log('a = 2')
        break
    default:    // similar to 'else'
        console.log('a = 3')
        break
}