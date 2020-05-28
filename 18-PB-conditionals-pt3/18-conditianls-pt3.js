"use strict";

let aleezaTeam = (9 + 120 + 103) / 3;
let lisTeam = (116 + 94 + 1 ) /3;
let maryTeam = (9700 + 134 + 105)/3;
if (aleezaTeam > lisTeam) {
    console.log(`highest average score is ${aleezaTeam} Aleeza team`);
} else if (aleezaTeam === lisTeam) {
    console.log(`the average score is samilar team aleeza and lis ${lisTeam} and ${aleezaTeam}`);
} else if (aleezaTeam < lisTeam) {
    console.log(`highest average score is lis team ${lisTeam}`);

} else if (maryTeam > aleezaTeam && maryTeam > lisTeam) {
    console.log(`the winner is mary team score is ${maryTeam}`);
}
else if (maryTeam === aleezaTeam || maryTeam === lisTeam) {
    console.log (`mary team is like the same average Aleeza team or lis team`)
}
else {
    console.log(`change the value of average to see th diffrent`)
}