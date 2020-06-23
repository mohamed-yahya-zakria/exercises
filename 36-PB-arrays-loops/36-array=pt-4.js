'use strict';

//task 01


function sumOfNumber(num) {
    let sum = null;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]

    }
    return sum
}
console.log(sumOfNumber([1, 2, 3]));
//task 02
const helloGuys = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push('hello ' + arr[i])

    }
    return result
}
console.log(helloGuys(['marc', 'mike', 'muller', 'sarah']));
//task 03
const Cities = ["Paris", "London", "Valletta", "Prague", "Rome"]

console.log(Cities.unshift("Berlin"));
console.log(Cities);
//task 04
function OddsGiveOne(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]

        if (x % 0 !== 0) {
            result.push(x + 1)
            //result.push(x.parseInt()+1)
        } else {
            result.push(x - 1)
            //result.push(x.parseInt()-1)
        }
    }
    return result
}
console.log(OddsGiveOne([1, 2, 3]));

//console.log();
// task 05
function Capitalize(arr) {
    let result = [];
    arr = arr.split('');

    for (let i = 0; i < arr.length; i++) {
        let index = 0
        let myarr = arr[i].length.charAt(index).toUpperCase();
        myarr.join("")
        result.push(myarr)
        //result.push() 
    }
    return result
}
console.log(Capitalize(["matt", "sara", "lara"]));
// task 6
function unique(arr) {
    //let intializer = null;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= arr[i].length) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(unique([3, 3, 3, 7, 3, 3, 4, 4])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77

// task 7 
const repeat =  (arr) => {
 let result = [];
  result.push( arr[0].repeat(arr[1])) 
  
  return result
 }
 console.log(repeat(["example", 3]));
