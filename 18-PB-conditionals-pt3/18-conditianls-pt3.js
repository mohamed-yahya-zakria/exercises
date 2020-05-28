"use strict";


// just x and y variables it was traing
// when the if (the fisrt codition ) is true make overwrite in varible
let aleezaTeam = (9 + 120 + 103) / 3;
let lisTeam = (116 + 94 + 1 ) /3;
let x = null;
let y = null;
let maryTeam = (9700 + 134 + 105)/3;
if (aleezaTeam > lisTeam) {
      let x = 4; //overwrited
      let y = 5; //overwrited
    console.log(`highest average score is ${aleezaTeam} Aleeza teamb  ${y} ${x} `);
} else if (aleezaTeam === lisTeam) {
    console.log(`the average score is samilar team aleeza and lis ${lisTeam} and ${aleezaTeam}`);
} else if (aleezaTeam < lisTeam) {
    console.log(`highest average score is lis team ${lisTeam}`);

} else if (maryTeam > aleezaTeam && maryTeam > lisTeam) {
    console.log(`the winner is mary team score is ${maryTeam}`);
}
else if (maryTeam === aleezaTeam || maryTeam === lisTeam) {
    console.log (`mary team is like the same average Aleeza team or lis team ${maryTeam}  `)
}
else {
    console.log(`change the value of average to see th diffrent`)
}