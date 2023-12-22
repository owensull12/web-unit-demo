// use console.log to confirm the data is ready and useable
console.log(searchResults)

// get greek god names
/*
    previous method:
    
    let greekNames = []

    for (var i = 0; i < searchResults.length; i++)
    {
        greekNames.push(searchResults.greekName)
    }
*/
// using mapping the long way:
let greekNames1 = searchResults.map(
    function(result){
        return result.greekName
    }
)

// using mapping the short way:
let greekNames = searchResults.map(result => result.greekName)      // x values
let greekSearchResults = searchResults.map(result => result.greekSearchResults) // y values

// trace data
let trace = {
    x: greekNames,
    y: greekSearchResults,
    type: 'bar'
}

// put trace data into an array
let data = [trace]

// layout info
let layout = {
    title: 'Greek God Search Results'
}

// call Plotly.newPlot and point to the div id 'plot'
Plotly.newPlot('plot1', data, layout)


// PLOT 2 - filtered
// Create a custom function to return Roman gods with more than 100 million search results
function over100Million(roman)
{
    // use roman search results property
    return roman.romanSearchResults > 100000000
}

// Call the custom function with filter()
let poppinRomans = searchResults.filter(over100Million)

// array of names from filtered data
let popularRomanNames = poppinRomans.map(roman => roman.romanName)

// array of roman god search results from the filtered data
let popularRomanSearchResults = poppinRomans.map(roman => roman.romanSearchResults)

// Trace for the Roman Data
let trace2 = {
    x: popularRomanNames,
    y: popularRomanSearchResults,
    type: 'bar'
}

// Data trace array
let data2 = [trace2]

// Apply a title to the layout
let layout2 = {
    title: 'Roman Gods with Over 100 Million Results'
}

// Render the plot to the div tag with id "plot2"
Plotly.newPlot('plot2', data2, layout2)



// PLOT 3 - slicing and sorting
// sort greek search results in descending order
let greekSorted = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults)

// slice first 10 objects for the plot
let greekSliced = greekSorted.slice(0, 10)

// reverse the array to compensate for plotly's horizontal bar chart attributes
greekSliced.reverse()

// plotly bar chart
slicedGreekNames = greekSliced.map(greek => greek.greekName)
slicedGreekSearchResults = greekSliced.map(greek => greek.greekSearchResults)

let trace3 = {
    x: slicedGreekSearchResults, // swap x and y compared to before because this is horizontal
    y: slicedGreekNames,
    text: slicedGreekNames, // allows to hover bars and see the names
    name: 'Greek Name',
    type: 'bar',
    orientation: 'h'
}

let data3 = [trace3]

let layout3 = {
    title: 'Horizontal Bar Chart of Greek God Search Results',
    l: 100,
    r: 100,
    t: 100,
    b: 100
}

Plotly.newPlot('plot3', data3, layout3)