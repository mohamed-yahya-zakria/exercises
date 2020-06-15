'use strict';
//01
const addFuncation = (num1) => {
    //  return const scondFunction = (num2) => {
    return function add(num2) {
        return num1 + num2;
    }

}
let result = addFuncation(1)(1.2);
console.log(result);
//02

const multiplier = (num1, num2) => {
    console.log (num1 - num2);

    function b () {
        return num1 * sum2 // 
    
    }
}

let x = multiplier(2, 4);
console.log(x);

//03
(function (num, num2) {
    let age = (num - num2);
    let income = 1000 * 12;
    console.log((age * income *.10));
}(60, 40));