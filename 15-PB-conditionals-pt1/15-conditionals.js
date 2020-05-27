"use strict";

//tast 01
let myValue = 50;
let myValue2 = 99;
if (50 <= myValue <= 99 || 50 <= myValue2 <= 99) {
    console.log("true");
} else {
    console.log("false");
}

// task 02

let myValue3 = 60
if (50 <= myValue <= 99 || 50 <= myValue2 <= 99 || 50 <= myValue3 <= 99) {
    console.log("true");
} else {
    console.log("false");
}

//task 03
let a = 1;
let b = 2;
let c = 3;
if (b < c && c > a) {
    console.log(`this is largest value ${c}`)
} else {
    console.log(`false`)
}
a = 60;
b = 50;
c = 20;

if (Math.max(a, b, c) === a) {
    console.log(a);
}

if (Math.max(a, b, c) === b) {
    console.log(b);
}

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
// It is a pretty confusing question...

let myString = "Hello World";
let newString = "Py" + myString;

if (newString[0] + newString[1] === "Py") {
    console.log(myString);
}

//task 04 // includ.methoud just chech for frist letter.we need for wohle the sentence
let txt1 = `PYthon`;
if (txt1.includes(`PY`)) {
    console.log(`the original string`);
} else {
    console.log(`it is not the original string`);
}
//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

if ((mySum === 8) || (myNum1 - myNum2 === 8)) {
    console.log(true);
}
// task 6 
let num1 = 8;
let num2 = 8;

if (num1 + num2 === 8 || num1 - num2 === 8) {
    console.log(`true`)
} else {
    console.log(`false`)
}
//07
if (num1 == num2 === 15 || num1 + num2 === 15) {
    console.log(`true`)
} else {
    console.log(`false`)
}
//task 08

if (num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0) {
    console.log(`true`)
} else {
    console.log(`false`)
}

//task 09
let num4 = (num1 + num2);
if (num1 + num2 == num4) {
    console.log(num4 + num1 + num2);
} else {
    console.log(`false`);
}
//task 10
let num6 = 5;
let spacNum = (num6 - 19);
if (spacNum > 19) {
    console.log(spacNum * 2);
} else {
    console.log(`false`);
}
// task 11
let fristName = `mohamed`;
let age = `70`;
if (age > 13) {
    console.log(`mohamed is chiled`);
}
ifelse(13 < age < 20) {
    console.log(`mohamed is a teenager`)
}
ifelse(20 < age < 30) {
    console.log(`mohamed is a young adult`);
}
else {
    console.log(`mohamed is a adult`);
}
