
'use strict';
/* 
test obj[1]
const obj10= {name: 'Morad',
             lastN:'Hashim',
              age :15,
            city: "Berlin"};
let printValuve = Object.values(obj10);
console.log(printValuve[3]); */


// 1. 
const inTheRange = (num, obj) => {
    let minMax = Object.values(obj);
    if (num >= minMax[0] & num <= minMax[1]) {
        //console.log(minMax[0]);
        //console.log(minMax[1]);
        return true;
    } else {
        return false;
    }
}

console.log('ex.1', inTheRange(4, {
    min: 0,
    max: 5
}));
console.log('ex.1', inTheRange(4, {
    min: 4,
    max: 5
}));
console.log('ex.1', inTheRange(4, {
    min: 6,
    max: 10
}));
console.log('ex.1', inTheRange(5, {
    min: 5,
    max: 5
}));

// 2
const myArray = [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}]
const scrabbleFunction = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        //arr.length = 7 this is number of objects which in array
       // console.log('array.length =', arr.length);
     //  console.log(arr[i]);
     //arr[i]= print wohle objects in arrya without squar brackets
   //  console.log(arr[i].score);
   //arr[i].score = catch only the value 
        result += arr[i].score;
        
    }
    return result;
}

console.log('The player\'s maximum score: ', scrabbleFunction(myArray));

// 3. question why return boolen without if condition
const EmptyObject = (obj) => {
   // outamticly return ture or false
  return Object.keys(obj).length === 0;
}


console.log('ex 3', EmptyObject({}));
console.log('ex 3', EmptyObject({
    a: 1
}));

  // i stoped here 
// 4.
const countingLetters = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = str.split(str[i]).length - 1;
    }
    return obj;
}

console.log('ex 4', countingLetters('tree'));


// 5.
const freeShipping = (obj) => {
    let myVal = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < myVal.length; i++) {
        sum += myVal[i];
    }
    return sum > 50;
}

console.log('ex 5', freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));
console.log('ex 5', freeShipping({
    "Surround Sound Equipment": 499.99
}));
console.log('ex 5', freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

// 6. 
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
console.log(programming);
for (let i = 0; i < programming.languages.length; i++) {
    console.log('the languages', programming.languages[i]);
}

for (const item in programming) {
    console.log('the keys', item);
}

////////////

