'use strict';

// 1. *** Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const COLOR_ARRAY = ["red", "blue", "green", "yellow"];
let inputColor = COLOR_ARRAY[parseInt(Math.random() * 4)];

switch (inputColor) {
  case "red":
    console.log("1:", "\x1b[31mThis is red\x1b[0m");
    break;
  case "blue":
    console.log("1:", "\x1b[34mThis is blue\x1b[0m");
    break;
  case "green":
    console.log("1:", "\x1b[32mThis is green\x1b[0m");
    break;
  case "yellow":
    console.log("1:", "\x1b[33mThis is yellow\x1b[0m");
    break; // unnecessary
  // no default needed in this configuration
//01

let color = 'green';
switch (color) {
    case 'red':
        console.log(`this is color ${color} like  appel`)
        break
    case `blue`:
        console.log(`this is color ${color} like  blue grapes`)
        break
    case 'green':
        console.log(`this is color ${color} like  green appel`)
        break
    case 'yellow':
        console.log(`this is color ${color} like  cantaloupe`)
        break
    default:
        console.log(`sorry we don't have onther color in our exercise :)`)

}
//02 
// 2. *** Create a switch statement that prints different comments depending on a grade.

let gradeGenerator = Math.round(Math.random() * 5 + 1);

B-program-multiplechoice/20-daniel.js 
Viewed
@@ -0,0 +1,105 @@
"use strict;";

// 1. *** Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const COLOR_ARRAY = ["red", "blue", "green", "yellow"];
let inputColor = COLOR_ARRAY[parseInt(Math.random() * 4)];

switch (inputColor) {
  case "red":
    console.log("1:", "\x1b[31mThis is red\x1b[0m");
    break;
  case "blue":
    console.log("1:", "\x1b[34mThis is blue\x1b[0m");
    break;
  case "green":
    console.log("1:", "\x1b[32mThis is green\x1b[0m");
    break;
  case "yellow":
    console.log("1:", "\x1b[33mThis is yellow\x1b[0m");
    break; // unnecessary
  // no default needed in this configuration
 @Ungoot
Ungoot 31 minutes ago Member
I would include a default anyway, what if someone adds something else to the array later (they can't because it's a const but what if they change what inputColor gets it's data from).

@mohamed-yahya-zakria	Reply…
}

// 2. *** Create a switch statement that prints different comments depending on a grade.

let gradeGenerator = Math.round(Math.random() * 5 + 1);

switch (gradeGenerator) {
  case 1:
    console.log(`\n2: A ${gradeGenerator} is 'ausgezeichnet'`);
    break;
  case 2:
    console.log(`\n2: A ${gradeGenerator} is 'gut'`);
    break;
  case 3:
    console.log(`\n2: A ${gradeGenerator} is 'befriedigend'`);
    break;
  case 4:
    console.log(`\n2: A ${gradeGenerator} is 'ausreichend'`);
    break;
  case 5:
    console.log(`\n2: A ${gradeGenerator} is 'mangelhaft'`);
    break;
  case 6:
    console.log(`\n2: A ${gradeGenerator} is 'ungenügend'`);
    break;
}

//03
let fruits = 'apple'
switch (fruits) {
    case 'banana':
        console.log(`this is ${fruits} fruit`);
        break
    case 'orange':
        console.log(`this is ${fruits} fruit`);
        break
    case 'strawberry':
        console.log(`this is ${fruits} fruit`);
        break
    case 'apple':
        console.log(`this is ${fruits} fruit`);
        break
    default:
        console.log(`we don't have any more fruits sorry Sir`);
}
 //04
let percentageComplete = 30;
if (percentageComplete === 30) {
    console.log(`Still a long way to go`);
}
else if (30 <= percentageComplete <= 50 ){
    console.log(`Still a long way to go`);
}
else if (51 <= percentageComplete <= 80 ){
    console.log(`You can do it!`);
}
else if (81 <= percentageComplete <= 99 ){
        console.log(`This is the last push!`);
}
else if (percentageComplete === 100){
    console.log(`You're there. Well done!`);
}
/*  I use if or else if statment to check for bigger than // smaller than but switch does't work for that but we can use switch for when we make check app like check for monthes or check for color ..etc */

let x = 35;
switch (x) {
    case 50:  
    if (30 <= x <= 50 )
      { let y = 'Still a long way to gooooo';
        console.log (y);
    }
    break
    case 50:  
    if (51 <= x <= 80 )
      { let y = `the num less than 81`;
        console.log (y);
    }
    else if (81 <= x <= 99 ){
        let y = `the numless than 100 `;
    }
    else if (x === 100 ){
        let y = `the num = 100 `;
    }
    break
    default :
    console.log(`done`)
}

/* 
let myMonth = "January";
switch (myMonth) { // one expression only, one condition only 
    case "January": // logical OR 
    case "February":
        if (myMonth === "January") { 
            // block scope
            let message = "Hello winter!";
            console.log(message);
        }
        // console.log(message); not available outside
        console.log("This is the first or second month of the year");
        break;
    case "March":
        console.log("This is the third month of the year");
        break;
    case "April":
        console.log("This is the fourth month of the year");
        break;
    case "May": */