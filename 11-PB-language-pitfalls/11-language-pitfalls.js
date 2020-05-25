"use strict";

//01
console.log(isNaN("hello"));
console.log(isNaN(3));
console.log(typeof(NaN));
//NaN is not  a Number in js
//What is the type of NaN? in fact is a Number value in JS

//02 we use method (toFixed) to round the longer Number
let rounding = (0.1 * 0.2);
console.log(rounding);
console.log(rounding.toFixed(2));

//03 the strange logic in JS without num1
let num1 = (Infinity / 0);
let num2 = (Infinity / Infinity); 
let num3 = (1 / 0);

console.log(`${num1}   ${num2}    ${num3}`);
