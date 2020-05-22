"uas strict";

 // task 01
let a =(Math.min(-1, 0, 1, 2, 3, 4));
console.log(a);

let b = (Math.max(-1, 0, 1, 2, 3, 4));
console.log(b);

//02-A round up 
let c = (Math.ceil(3321));
let d = (Math.ceil(32321));
let e = (Math.ceil(326.76));
let f = (Math.ceil(76788.7));
let g = (Math.ceil(-9.78));
let h = (Math.ceil( 43.342));

console.log(c, d, e, f, g, h);

// 02-B round down 
let num1 = (Math.floor(3321));
let num2 = (Math.floor(32321));
let num3 = (Math.floor(326.76));
let num4 = (Math.floor(76788.7));
let num5 = (Math.floor(-9.78));
let num6 = (Math.floor( 43.342));
console.log(num1, num2, num3, num4, num5, num6); 

// i find foolr method or ceil exept one variable
/* let c = 3321
let d = 32321
let e = 326.76
let f = 76788.7
let g = -9.78
let h =  43.342

console.log(Math.ceil(c, d, e, f, g, h));

console.log(Math.floor(c, d, e, f, g, h)); */

//03 --dont culclate zero in this exercise

let x = random * 6;
console.log(x);








    




/* "use strict";

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding
// a. Round up
// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(28.329));

// b. Round down
//Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(28.329));

//3. Dice Roll!
//Create a program that prints a random integer from 1 - 6.

let random = Math.random(); // between [0 (inclusive) and [1 (exclusive)
let bigger = random * 6; // multiplication with upper limit
//console.log(bigger);

let roundBigger = Math.round(bigger); // so that we don't break the upper limit
//console.log(roundBigger);

let oneToSix = roundBigger === 0 ? console.log(roundBigger + 1) : console.log(roundBigger); */





//Q3.
/* let random1 = Math.random();
random1 = random1*6;
console.log(random1);
let random2 = Math.ceil(random1);
console.log(random2); */