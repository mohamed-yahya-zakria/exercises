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
console.log('task 2')
const multiplier = (num1, num2) => {
    console.log(num1 - num2);
    function b() {
        return num1 * num2; // 
    }
    return b();
}
let x = multiplier(2, 4);
console.log(x);

//03 my soulation
(function (num, num2, num3, num4) {
    let age = (num2 - num);
    let income = num3 * 12;
    console.log(age * income * (num4 / 100));
}(40, 65, 2000, 5));

//03 the true solution
(function (age, retage, monthly, persent) {
    if (age > retage)
        console.log('yoour alesdy in alragae');
    else {
        console.log((retage - age) * (monthly * 12) / 100 * persent);
    }
}(40, 65, 2000, 5));



