'use strict';

//task 01
console.log('task 01');

const findGreatest = (myArray, number) => {
  let greaterNum = [];
  for (let i = 0; i < myArray.length; i++) {
    if (number < myArray[i]) {
      greaterNum.push(myArray[i]);
    }
  }
  return greaterNum;
}
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

//task 02
console.log('task 02');

const longestWord = (myStr) => {
  //let splite = str.split(" "); // if you need as a words you need empty space bettwn the brackets
  let myArray = myStr.split(' ');
  let initializer = ''; //the better stat with zero
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length > initializer.length) {
      initializer = myArray[i];
    }
  }
  return initializer;
}
console.log(longestWord('this is a web development course'));
//task 03
console.log('task 03')

const reverse = (num) => {
  let num2 = num.toString().split('').reverse().join("");
  return parseInt(num2);
}
console.log(reverse())

//task 04 
console.log('task 04');

const findVowels = (str) => {
  const vowels = str.match(/[aeiou]/gi); // (g) means search globely /(i) means care sensative // if you dont write (i) shoud write match(/[aeiouAEIOU]/g);
  return vowels.length;
}
console.log(findVowels("this is a string"));
console.log(findVowels("aoiue this is a vowels charchte"));

// task 05
console.log('task 05');
const missingNums = (x) => {
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = myArr.filter(num => !x.includes(num));
  return result[0]; // i need understad why when we delete [0] become the resulte in array and when we put print the value as interger
}
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//task 06 
// i know that is wrong solution but why the result is NaN
/* let initializer = 3;
const sumOfCubes = (array) => {
    for (let i = 0; i <= array.length; i++) {
        initializer *= array[i];
    }
    return initializer;
}
console.log(sumOfCubes([1, 5, 9]));  */
/* console.log('task 06');
let initializer = 1;
const sumOfCubes = (array) => {
  for (let i = 0; i < array.length; i++) {
    initializer *= array[i] ** 3;
    console.log('uini',initializer);//the last itration (9**3)* last value 125
    console.log('array[i] ',array[i]);
  }
  return initializer;
}
console.log(sumOfCubes([1, 5, 9])); */
console.log('task 06');

let initializer = 0;
const sumOfCubes = (array) => {
  for (let i = 0; i < array.length; i++) {
    initializer += array[i] ** 3; // last itratioon 126 + (9**3)
    console.log('inti', initializer);
    console.log('array[i] ', array[i]);

  }
  return initializer;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
//06 
//other way 
sum+= Math.pow(array[i], 3);
return sum;
// task 07
console.log('task 07');
// why in the scond consol print the frist item
const dictionary = (charChecker, myString) => {
  let newArr = [];
  for (let i = 0; i < myString.length; i++) {
    if (myString[i].startsWith(charChecker)) {
      newArr.push(myString[i]);
    } //else {
    //return false;
    //}
  }
  return newArr;
}
console.log(dictionary("bu", ["button", "breakfast", "border"]))
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));
// task 08
console.log('task 08');

const evenNum = (num) => {
  const result = [];
  for (let i = 2; i <= num; i+=2) {
   // if (i % 2 === 0) {
      result.push(i);
      //console.log(i);
   
  }
  return result;
}
console.log(evenNum(8));
console.log(evenNum(4));
console.log(evenNum(2));