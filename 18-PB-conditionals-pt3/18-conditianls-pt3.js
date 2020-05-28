"use strict";

let aleezaTeam = (9 + 120 + 103);
let lisTeam = (116 + 94 + 1);
let maryTeam = (9700 + 134 + 105);
if (aleezaTeam > lisTeam) {
    console.log(`highest average score is ${aleezaTeam} Aleeza team`);
} 
else if (aleezaTeam < lisTeam) {
    console.log(`highest average score is lis team ${lisTeam}`); 
   
}
   
else if (maryTeam > aleezaTeam && maryTeam > lisTeam) {
    console.log (`the winner is mary team score is ${maryTeam}`);
}
