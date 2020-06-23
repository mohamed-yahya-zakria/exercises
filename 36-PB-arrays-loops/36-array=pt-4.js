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