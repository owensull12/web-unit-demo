/*
    python list comprehension:
    numbers = [1, 2, 3, 4, 5]
    copyNumbers = [number for number in numbers]
*/

// in JS, mapping is used to map info from one array to another
// it is more efficient than looping through everything and pushing like the greekRoman.html page demo
var numbers = [1, 2, 3, 4, 5]

console.log(numbers)

// to map in JS, use .map() function (in-line function)
var copyNumbers = numbers.map(
    function(number) {
    return number}
)

console.log(copyNumbers)

// to get the number with the index:
var numbersWithIndexes = numbers.map(
    function(item, index){
        return `Index ${index}, Value ${item}`
    }
)

console.log(numbersWithIndexes)

// array of student names and colors of their zoom background
let students = [
    {name: 'Rufin', background: 'Blurry'},
    {name: 'Jerry', background: 'Blue'},
    {name: 'Luz', background: 'Gray'}
]

// get student names using mapping
let names = students.map(
    function(student){ // take each student object
        return student.name} // return the name property for each object in the array
)

console.log(names)

let backgrounds = students.map(
    function(student){ // take each student object
        return student.background} // return the background property for each object in the array
)

console.log(backgrounds)

// streamline the mapping process we've used so far
// ES6 property allows for destructuring of data
// rather than writing in-line functions, create abbreviations of functions using arrow syntax
    // arrow function example: =>

/*
    original mapping:

    var copyNumbers = numbers.map(
    function(number) {
    return number}
)
*/

// arrow mapping:
let mapArrow1 = numbers.map((number) => {
    return number
})

console.log(mapArrow1)

// upgrade again!
let mapArrow2 = numbers.map(number => number)

console.log(mapArrow2)

// with index values:
let mapArrow3 = numbers.map((item, index) => `Index ${index}, Value ${item}`)

console.log(mapArrow3)

console.log('-----------------------------------------')
console.log('Activity output:')

let heroines = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

// Create an array of just the names from the heroines array
let heroineNames1 = heroines.map(
    function(heroine){
        return heroine.name // return name property to the array
    }
)

console.log(heroineNames1)

let heroineNames2 = heroines.map(heroine => heroine.name) // for each heroine, return the name property
                                                          //          heroine  =>         heroine.name

console.log(heroineNames2)

// Create an array of strings for each heroine's name, follow by a colon, followed by their age
let heroineNamesAndAges1 = heroines.map(
    function(heroine){
        return `${heroine.name}: ${heroine.age}`
    }
)

console.log(heroineNamesAndAges1)

let heroineNamesAndAges2 = heroines.map(heroine => (`${heroine.name}: ${heroine.age}`))

console.log(heroineNamesAndAges2)