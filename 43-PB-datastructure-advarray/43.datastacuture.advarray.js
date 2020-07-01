'use strict';

//task 01
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];
const total = orders.reduce(function( previousValue, currentValue){
 return previousValue + currentValue
}
console.log(total);

//task 02
//function that increments each element
arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const incrementsElement = arrayOfNumbers.map(value) => value + 1);
 console.log(incrementsElement);

// task 5 
//function called sum that uses the reduce method to sum up an array of numbers. 

const sum = [1,2,3,4,5];
sum.forEach(function(value, index, array)){
  return  array[index]+value
}
console.log(sum);

//task 06
const myArray = [1,2,3,4,5];
 const result = myArray.map(function(value)) => Math.sqrt(value);

 console.log(result);