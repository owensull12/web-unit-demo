// declare an array with empty contents
let myArray = []

// add elements to the array
myArray.push('one')
myArray.push('two')
myArray.push('three')

console.log(myArray)

// display the first index contents
console.log(myArray[0])

// update the contents of the array
myArray[2] = 'Three'
console.log(myArray)

// use .slice() function to get elements from a subset of indexes
console.log(myArray.slice(1, 3)) // displays two and Three
                                    // starting index, ending one before second argument

console.log('------------------------------')

// JSONs are collections of key/value pairs that identify properties
let city = {
    name: 'Charlotte',
    state: 'North Carolina',
    nickname: 'Queen City'
}

console.log(city['nickname']) // displays Queen City
console.log(city.state) // displays North Carolina

// to add a property, just add a new key
city.areacode = 704
console.log(city)