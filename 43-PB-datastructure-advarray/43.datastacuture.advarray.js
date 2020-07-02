'use strict';

//task 01
console.log('task 01')
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];
const total = orders.reduce(function (previousValue, currentValue) {
    console.log(previousValue);
    return currentValue["amount"] + previousValue;
    // we write 0 becouse tell him
}, 0);
console.log(total);

console.log('task 02')
//task 02
//function that increments each element
arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const incrementsElement = arrayOfNumbers.map(function (value) {
    return value + 1;
})
console.log(incrementsElement);

console.log('task 03')

//task 03
const filtereven  = arr => arr.filter(value => value %2===0);
console.log(filtereven([1, 2, 3, 11, 12, 13])) ;
console.log(filtereven([22,2,31,110,6,13])) ;

//task 03 why does not work is smilar above
let filterEvens = [1, 2, 3, 11, 12, 13];
let filterEvens2 = [22, 2, 31, 110, 6, 13];
const evenNumbers = (arr) => {
        return  arr.filter((value) {
            return value  % 2 === 0; 
        }) 
}
console.log(evenNumbers([1, 2, 3, 11, 12, 13]));
console.log(evenNumbers(filterEvens2));

console.log('task 04')
// task 4
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, searchTerm) =>{
    let getChar = arr.filter(function(value){
       if (value.toLowerCase().includes(searchTerm)) {
        return value;
       }
       
    })
    return getChar;
}
console.log(filterItems(friends, "ka")); 
console.log(filterItems(friends, "e")); 

console.log('task 05')
// task 5 
//function called sum that uses the reduce method to sum up an array of numbers. 
const sum = (arr) => arr.reduce((previous, current) => previous + current);
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([6, 7, 7])); //20

//task 05
const sumNmber = (arr) =>{
    arr.reduce((previous, current){
        return previous + current
    })
    
}
console.log(sumNmber([1, 2, 3, 4, 5])) ;
console.log(sumNmber([6, 7, 7])); //20



//task 6
const powArray = [1, 2, 3, 4, 5];
const x = arr => arr.map(num => Math.sqrt(num));
console.log(x(powArray));

//task 06 why does not workis smilar above
const myArray = [1, 2, 3, 4, 5];
const result = myArray.map(function(value) => { 
    return  Math.sqrt(value)})

console.log(result);

