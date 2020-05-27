"use strict";

// task 01
/* let x = 3;
let y = "3"; */
console.log(3 == "3");
console.log(3 === "3");
// loose comparison is compare just value of variable to convert the type you can use Stribg(), Number(), Boolean() is funcation are converter
 

 //Is there a difference? Why/why not?

//answer

// the differnt loose comparison == & strict comparison === ? is == is comparese just the value but strict comparison is comapare value and type


//task 02
let myValue = true;

let checker1 = (myValue === 0 ||
    myValue === false || myValue === "" || myValue === NaN || myValue === null || myValue === undefined ? true : false);
console.log(checker1);

// task 03

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

// it is print the the assignment of variable firstName because in OR operator look for the true value when find print it ,and firstName is firstly value equal true the compiler find therefore print it  