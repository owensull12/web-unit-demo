// D3: Data Driven Documents
/*
    1. connect to APIs and external files such as JSONs and CSVs
        -without D3, referencing the files needs to be served across a localhost or the worldwide web
        -otherwise, a CORS (Cross-Origin Resource Sharing) error will be produced
    2. get info from tags or ids in HTML
    3. add info to tags or ids in HTML
    4. make pages interactive by handling events
        - clicks, mouseovers, changes, etc.
*/

// when connecting to an API, use D3 to fulfil a promise
    // a promise is similar to a request in python (requests.get)
    // promise: connect to a data source, then use an internal function to fulfill the promise (aka do something with the data)

d3.json('https://api.spacexdata.com/v4/launchpads').then(
    function(data){
        // then if data is received, display its contents to the console
        console.log(data)
    }
)

// store the url for the api as a variable
let roadster = 'https://api.spacexdata.com/v4/roadster'
d3.json(roadster).then(data => console.log(data))

// store the url for the api as a constant
const capsules = 'https://api.spacexdata.com/v4/capsules'
d3.json(capsules).then(data => console.log(data))

// using local json
let fitnessFile = 'fitnessData.json'
d3.json(fitnessFile).then(
    data => {
        console.log(data)
        // use mapping to get the names of the activities
        activityList = data.map(activityObj => activityObj['activity'])
        calorieList = data.map(activityObj => activityObj['calories burned per hour'])

        console.log(activityList)
        console.log(calorieList)
    }
)