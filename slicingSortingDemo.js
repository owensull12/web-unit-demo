console.log('slicing:')
// slicing can get a subset of array data based on index value
// similar to range in python

let tysFriends = ['Jim', 'James', 'Paul', 'Tyrone', 'Erykah']

// use .slice() to get the first 3 names
let firstThree = tysFriends.slice(0, 3) // gets values starting with 0 and ending before 3
console.log(firstThree)

let lastTwo = tysFriends.slice(3) // defaults like slice(3:) in python - 3 to the end
console.log(lastTwo)

let middleThree = tysFriends.slice(1, 4)
console.log(middleThree)

// SORTING
console.log('sorting:')

let numbers = [2, 4, 1, 3, 5]
console.log(numbers)

// to sort values in an array, use .sort() with an inline function
// ascending order:
    // a - b = calculates a difference
    // when a - b is in an inline function for sorting, it defines what type of sort to
console.log('.sort ascending and descending:')

numbersSortedAsc = numbers.sort(
    function(a, b){
        // a is a first number
        // b is a second number
        return a - b    // tells the function to order the values so that a < b
    }
)
console.log(numbersSortedAsc)

// descending order:
numbersSortedDsc = numbers.sort(
    function(a, b){
        // a is a first number
        // b is a second number
        return b - a    // tells the function to order the values so that b < a
    }
)
console.log(numbersSortedDsc)

// using inline (arrow) function
console.log('Arrow Functions:')

numbersSortedAscArrow = numbers.sort((a, b) => a - b)
console.log(numbersSortedAscArrow)

numbersSortedDscArrow = numbers.sort((a, b) => b - a)
console.log(numbersSortedDscArrow)

// .reverse function
console.log('.reverse:')

let reversedArray = numbers.reverse()
console.log(reversedArray)



// sort, slice, and reverse this array:
console.log('Activity 07')
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2]

// descending order
let desc = numArray.sort(
    function(a, b){
        return b - a
    }
)
console.log(desc)

// ascending order with an arrow function
let asc = numArray.sort((a, b) => a - b)
console.log(asc)

// slice the first 5 ascending
let sliced = asc.slice(0, 5)
console.log(sliced)

// reverse the sliced array order
let slicedReversed = sliced.reverse()
console.log(slicedReversed)