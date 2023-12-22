// use function to initialize x and y data
function init()
{
    let trace = {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 6, 8, 10]
    }

    let data = [trace]

    let layout = {
        title: 'Sample Data'
    }

    Plotly.newPlot('plot1', data, layout)
}

// make a function that updates based on the dropdown selection
function updatePlot()
{
    // use D3 to select the dropdown
    let dropdown = d3.select('#chooseDataset')
    // choose the dropdown option value
    let dataset = dropdown.property('value')

    let x = []
    let y = [] // declared before if statement to have it be true afterwards

    // set the x and y data
    if(dataset == 'dataset1')
    {
        x = [1, 2, 3, 4, 5]
        y = [2, 4, 6, 8, 10]
    }
    else
    {
        x = [1, 2, 3, 4, 5]
        y = [5, 3, 7, 2, 9]
    }

    // once x and y values have been set, use Plotly.restyle() to update the data
        // transpose the x and y data
    Plotly.restyle('plot1', 'x', [x])
    Plotly.restyle('plot1', 'y', [y])
}

// use d3.select to apply the action
d3.select('#chooseDataset').on('change', updatePlot)

// call init
init()