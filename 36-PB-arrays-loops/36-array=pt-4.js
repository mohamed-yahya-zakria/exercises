'use strict';

//task 01
function sumOfNumber(num) {
    let sum = null; // should null or zero to cconsider that (+) arithmetical process  
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum
}
console.log(sumOfNumber([1, 2, 3]));
//task 01
function sumOfNumber2 (arr) {
    let intializer  = 0;
    for (let num of arr) { //instead i =o; i<arr.length; i++
        intializer += parseFloat(num)
    }
    return intializer+ '\b'+ 'the result if we add up ' + arr + 'together\n'
}
console.log(sumOfNumber2([1, 2, 3]));
//task 02
let names = ['marc', 'mike', 'muller', 'sarah'];
for (let i = 0; i < names.length; i++)
    console.log(` hello ${names[i]}  !`)


//task 03
const Cities = ["Paris", "London", "Valletta", "Prague", "Rome"];

console.log(Cities.unshift("Berlin"));
console.log(Cities);

//task 3 should be tring this is manualy
const cities2 = ["Paris", "London", "Valletta", "Prague", "Rome"];
let string = 'berl';
for (let i = 0; i < cities2.length; i++) {
    string+= cities2[i] + ', ';
} string =string.substring(0, string.length -2);
// we wrote -2 to remove the last (,) during print
console.log('city name is:', string  + ' ');

//task 04
function OddsGiveOne(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2== 0) {
            result.push(array[i] -1)
        } else {
            result.push(array[i] +1)
        }
    }
    return result
}
console.log(OddsGiveOne([3, 5, 2, 4]));

//console.log();
// task 05
function Capitalize(arr) {
    let result = [];
    for(let i =0; i<arr.length; i++){
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
        // slice (1) it's mean cut the frist index and contineu to the end elements
    }
    return result;
}

console.log(Capitalize(["matt", "sara", "Hara"]));

//task /good way/ // task 6

function noDuplicates(array) {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(newArray[i]) !== newArray.lastIndexOf(newArray[i])) {
            newArray.splice(i, 1);
            i = 0;
        }
    }
    return newArray;
}
console.log(noDuplicates([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates([1, 6, 6, 6, 9, 9]));
console.log(noDuplicates([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates([5, 10, 15, 20, 25]));
/// task 6
function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            // we don't have it already and -1 mens unditifind in arry
            newArray.push(array[i]);
            // we push it once!
        }
    }
    return newArray;
}
console.log(noDuplicates([1, 6, 6, 9, 9])); // ➞ [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // ➞ [2]
console.log(noDuplicates([5, 10, 15, 20, 25])); // ➞ [5, 10, 15, 20, 25]
// task 7 

const repeat = (str, num) => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(str);
    }
    return result;
}
console.log(repeat("example", 3));