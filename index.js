import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
*/
// (a) Home Team name for 2014 world cup final
const homeTeam2014 = fifaData.map((year) => {
    if(year.Year === 2014 && year.Stage === 'Final'){
      console.log(year['Home Team Name']);
    };
});
// (b) Away Team name for 2014 world cup final
const awayTeam = fifaData.map((year) => {
    if(year.Year === 2014 && year.Stage === 'Final'){
        console.log(year['Away Team Name']);
    }
});
// (c) Home Team goals for 2014 world cup final 
const goalHT2014 = fifaData.map(function(goals){
    if(goals.Year === 2014 && goals.Stage === 'Final'){
        console.log(goals['Home Team Goals'])
    };
});
// (d) Away Team goals for 2014 world cup final
const goalAT2014 = fifaData.map(function(goals){
    if(goals.Year === 2014 && goals.Stage === 'Final'){
        console.log(goals['Away Team Goals'])
    };
});
// (e) Winner of 2014 world cup final */
// const champ2014 = fifaData.map(function(winner){
//     let homeScore = winner['Home Team Goals'];
//     let awayScore = winner['Away Team Goals'];
//     if(winner.Year === 2014 && winner.Stage === 'Final'){
//         if(homeScore > awayScore){
//             return winner['Home Team Name'];
//         }else{
//             return winner['Away Team Name'];
//     }
// }
// });
// console.log(champ2014);

/* Task 2: Create a function called  getFinals that takes 
`data` as an argument and returns an array of 
objects with only finals data */

function getFinals(data){
    return data.filter(obj => obj.Stage ==='Final')
}
// const getFinals = fifaData.filter((stage) => {
//     return stage.Stage === 'Final';
// });

console.log(getFinals(fifaData));

// const finalArr = [];
// function getFinals(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].Stage === 'Final') {
//             finalArr.push(arr[i]);
//         }
//     }
//     return finalArr;
// }

// console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function 
called `getYears` that accepts the callback 
function `getFinals`, and returns an array 
called `years` containing all of the years in the dataset */

function getYears(call, data){
    return call(data).map(element => element.Year)
}

console.log(getYears(getFinals, fifaData));

// function getYears(arr) {
//     const years = [];
//     for(let i = 0; i < arr; i++){
//         let mappedObj = {};
//         mappedObj.city = arr[i].Year;
//         years.push(mappedObj);
//         } console.log(years);
    
// }   

// console.log(getYears(getFinals));




// console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called 
`getWinners`, that accepts the callback function 
`getFinals()` and determine the winner (home or away) 
of each `finals` game. Return the name of all winning 
countries in an array called `winners` */ 

function getWinners(callback, data) {
    let winners = [];
    callback(data).map(name => {
        if(name['Home Team Goals'] > name['Away Team Goals']){
            winners.push(name['Home Team Name']);
        }
        else {
            winners.push(name['Away Team Name'])
        }
        
    });return winners;

};

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear`
 that accepts the following parameters and returns a set of strings 
 "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callBack, cb2, data) {
    let winningYear = callBack(getFinals, data);
    let winningTeam = cb2(getFinals, data);
    for(let i = 0; i < data.length; i++){
        data[i] = `In ${winningYear}, ${winningTeam} won the world cup!`;
    }
    console.log(data);

    
};

// console.log(getWinnersByYear(getYears, getWinners, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts 
a parameter `data` and returns the the average number of home 
team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(data) {
//     let avg = data.reduce((accumulate, item) => accumulate + item)
// };

function getAverageGoals(data) {
const avg = data.reduce(function(accumulator, item){
    let homeSum = accumulator + item['Home Team Goals'];
    let homeavg = homeSum / data.length;
    let awaySum = accumulator + item['Away Team Goals'];
    let awayAvg = awaySum / data.length;
    
  }, 0); return avg;
}

console.log(getAverageGoals(fifaData));

// console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 2: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 3: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
