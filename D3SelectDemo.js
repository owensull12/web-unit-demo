// this example uses D3 in a SELECT context
    // can access info from tags an HTML document

// use .select() to get some info from a class (class references use the style '.name')
let text1 = d3.select('.text1')
console.log(text1)

// use .text() to get the actual text from the tag
text1 = d3.select('.text1').text()
console.log(text1)

// use .select() to get info from an id (id references use '#name')
let text2 = d3.select('#text2')
console.log(text2)
text2 = d3.select('#text2').text()
console.log(text2)

// can also use .text to change the content in a class or id
d3.select('.text1').text('This class has a new message')

// to get html content for a class, use .html function
let myLink = d3.select('.my-link').html()
console.log(myLink)

// myLink has the anchor tag (<a>)
// get the tag content
let myLinkA = d3.select('.my-link>a')//.html()  <- removed to get href tag without making a new variable
console.log(myLinkA)

// get the HREF from the anchor tag
let href = myLinkA.attr('href')
//let hostName = myLinkA.attr('host')
console.log(href)
//console.log(hostName)

// change the href link
myLinkA.attr('href', 'https://www.google.com')

href = myLinkA.attr('href')
console.log(href)

// change the text of the hyperlink
myLinkA = d3.select('.my-link>a').attr('href', 'https://www.google.com').text('Google')
console.log(myLinkA)


// add an item to the unordered list
let newItem = d3.select('ul').append('li')
newItem.text('New Item Added using D3')

let anotherItem = d3.select('ul').append('li').text('Another New Item')
    // typing it all out like this is called Chaining

/* BOOTSTRAP TABLE */
// use D3 to select the table
let table = d3.select('table')

// change the type of table to table-striped
table.classed('table-striped', true)

// add data to the table
let newStudent = ['James', 78]
let tableBody = d3.select('tbody')
// make a row, then append a td for name and td for grade
let row = tableBody.append('tr')
row.append('td').text(newStudent[0])
row.append('td').text(newStudent[1])

/* EVENTS IN D3 - AJAX - asynchronous javascript and XML */
// get a reference to a button to handle events
let button = d3.select('#clickME')

/*
// specify action for when the button is clicked
function handleClicks(event){
    // can specify any action we desire to occur
    console.log('you clicked the button!')
    console.log(event.target)
}

// attach the function to the button with the event
button.on('click', handleClicks) // on click, run the function
    */

// use the .this operator on this button (and all buttons) to show what was clicked
d3.selectAll('button').on('click', function(){
    console.log(this) // tells what was clicked
})

// use the .this operator to tell what list item (li) was clicked and change the color of the li after it is clicked
d3.selectAll('li').on('click', function(){
    console.log(this)

    // use an internal d3 select to select the list item that was clicked and change the color
    let clickedItem = d3.select(this)
    d3.selectAll('li').style('color', 'black') // reset the previous item's color
    clickedItem.style('color', 'orange')
})


// use D3 selects to increment the button click counts in the html
// button 1 id: clickMe, class: button1
// button 2 id: clickMe2, class: button2
// button 3 id: clickMe3, class: button3

// connect to the counter divs
let button1Counter = d3.select('.button1')
let button2Counter = d3.select('.button2')
let button3Counter = d3.select('.button3')

// add the action for the counter
d3.select('#clickMe').on('click', function(){
    let button = d3.select(this)
    // make variable to hold the value coming from the counter
    let currentCount = parseInt(button1Counter.text())
    // add 1 to the value
    currentCount += 1
    // update the value of the counter
    button1Counter.text(currentCount)
})

d3.select('#clickMe2').on('click', function(){
    let button = d3.select(this)
    // make variable to hold the value coming from the counter
    let currentCount = parseInt(button2Counter.text())
    // add 1 to the value
    currentCount += 1
    // update the value of the counter
    button2Counter.text(currentCount)
})

d3.select('#clickMe3').on('click', function(){
    let button = d3.select(this)
    // make variable to hold the value coming from the counter
    let currentCount = parseInt(button3Counter.text())
    // add 1 to the value
    currentCount += 1
    // update the value of the counter
    button3Counter.text(currentCount)
})