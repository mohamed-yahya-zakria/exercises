`use strict`;

let markMass = 72.5
let markHeight = 1.65;
let johnMass = 90.5;
let joohnheight = 1.80;

let markBmi = (markMass / markHeight * markHeight);
let johnBmi = ( johnMass/ joohnheight * joohnheight );

let myboolean = true;

if(markBmi > johnBmi === myboolean) {
    console.log(`${myboolean} the highest BMI is ${markBmi} `)
}
else {
    console.log(`${myboolean} the highest BMI is ${johnBmi} `)
}







