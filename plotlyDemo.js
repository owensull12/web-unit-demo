// 1. make an object that will hold the trace data (x and y data)
let trace = {
    x: xValues,     // these are not declared in this program but will still work because they are declared before this script in plotlyDemo.html
    y: yValues
}

// 2. put the trace data into an array
    // later, multiple plots in the same chart can be placed if they are separate entries in the array
let data = [trace]

// 3. sset the layout for the plot
let layout = {
    title: 'A plotly plot'
}

// 4. call Plotly.newPlot() and pass in the id for the plot, the data, and the layout info
Plotly.newPlot('plot', data, layout)