// goal: make a clustered column chart of greek vs roman search results from data.js

// arrays to hold data
let pairNames = [] // holds 'pair' values
let greekNames = [] // 'greekName values
let romanNames = [] // 'romanName'
let gSearchResults = [] // 'greekSearchResults'
let rSearchResults = [] // 'romanSearchResults'

for (var i = 0; i < searchResults.length; i++)
{
    // store the JSON from the index in a variable
    let entry = searchResults[i]

    pairNames.push(entry.pair)
    greekNames.push(entry.greekName)
    romanNames.push(entry.romanName)
    gSearchResults.push(entry.greekSearchResults)
    rSearchResults.push(entry.romanSearchResults)
}

let greekTrace = {
    x: pairNames,
    y: gSearchResults,
    text: greekNames,
    name: 'Greek', // name the legend item
    type: 'bar'
}

let romanTrace = {
    x: pairNames,
    y: rSearchResults,
    text: romanNames,
    name: 'Roman',
    type: 'bar'
}

// data array
let data = [greekTrace, romanTrace]

// add some layout features
let layout = {
    title: 'Greek vs Roman Names',
    barmode: 'group', // makes it clustered
    margin: {
        l: 50, // left padding 50px
        r: 50,
        b: 200,
        t: 50,
        pad: 4 // extra padding all around
    }
}

Plotly.newPlot('plot', data, layout)