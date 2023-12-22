console.log("Ty's Friends Activity Output:")
// array of objects with two attributes
let tysFriends = [
    {
        name: 'Jim',
        age: 22
    },
    {
        name: 'James',
        age: 20
    },
    {
        name: 'Paul',
        age: 21
    },
    {
        name: 'Tyrone',
        age: 22
    },
    {
        name: 'Erkyah',
        age: 22
    }
]

console.log(tysFriends)

// make a function that filters
    // 21 years or older
function twentyOneOrOlder(friend)
{
    return friend.age >= 21 // when this is applied to a .filter() function, it checks for the property and returns the object to the list if the criteria is true
}

// apply the filter
twentyOneOrOlderFriends = tysFriends.filter(twentyOneOrOlder)
                       // check the array for ^these criteria

console.log(twentyOneOrOlderFriends)

console.log('------------------------')
console.log('Football Activity Output:')

// An array of objects
let roster = [{
    name: "Doug",
    position: "Quarterback",
    madeTeam: true
  },
  {
    name: "Antonio",
    position: "Tight End",
    madeTeam: true
  },
  {
    name: "Nick",
    position: "Kicker",
    madeTeam: false
  },
  {
    name: "Ereck",
    position: "Offensive Live",
    madeTeam: false
  },
  {
    name: "AJ",
    position: "Line Backer",
    madeTeam: true
  }
  ];

// custom function that returns the players that made the team
  function madeCut(player)
{
    // do one of the following:
    //return player.madeTeam == true
    // or (is it NOT FALSE?):
    return player.madeTeam
}

// use filter
let team = roster.filter(madeCut)

console.log(team)

// how many players made the team?
console.log(`${team.length} players made the team`)