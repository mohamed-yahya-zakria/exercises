

'use strict';

const obj10= {name: 'Morad',
           lastN:'Hashim',
          age :15}
   let catchKey = Object.keys(obj10);
   let catchValue = Object.values(obj10);
 console.log(catchKey[0], catchKey[1]);//
 console.log(catchValue[0], catchValue[1]);

// 1. 
const inTheRange = (num, obj) => {
    let minMax = Object.values(obj);
    if (num >= minMax[0] & num <= minMax[1]) {
        console.log(minMax[0]);
        console.log(minMax[1]);
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
        result += arr[i].score;
    }
    return result;
}

console.log('The player\'s maximum score: ', scrabbleFunction(myArray));

