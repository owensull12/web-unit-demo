let trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 6, 8, 10],
    type: 'bar'
}

let trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 3, 5, 4, 8],
    type: 'bar'
}

let trace3 = {
    x: [1, 2, 3, 4, 5],
    y: [2, 4, 6, 8, 10],
    type: 'scatter'
}

let trace4 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 3, 5, 4, 8],
    type: 'scatter'
}


let data1 = [trace1, trace2]
let data2 = [trace3, trace4]

let layout1 = {
    title: 'Two Bars'
}

let layout2 = {
    title: 'Two Scatters'
}

Plotly.newPlot('plot1', data1, layout1)
Plotly.newPlot('plot2', data2, layout2)