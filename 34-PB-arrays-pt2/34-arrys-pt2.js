'use strict';
//task 01
const findGreatest = (myArray, number) => {
  let greaterNum = '';
  for (i = 0; i <= myArray.length; i++) {
    if (number < myArray[i]) {
      greaterNum +=myArray[i] + ' '
    }
  }
  return greaterNum;
}
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));
  
//task 02
console.log('task 02');
let initializer = ' ';
const longestWord = (myStr) => {
  //let splite = str.split(" "); // if you need as a words you need empty space bettwn the brackets
  myStr = myStr.split(' ');
  
  for (i = 0; i < myStr.length; i++) {
    if (myStr[i].length > initializer.length) {
      initializer = myStr[i] ;
    }
  }
  return initializer;
}
console.log(longestWord('this is a web development course'));
//task 03
console.log('task 03')

const reverse = (num2 = [3, 4, 5, 3, 2]) => num2.reverse()
console.log(reverse())

//task 04 
console.log('task 04')
const findVowels = (str)=>{
  const vowels = str.match(/[aeiouAEIOU]/g);
 return vowels.length;
}
console.log(findVowels("this is a string"));
console.log(findVowels("aoiue this is a vowels charchte"));
// task 05
/* console.log('task 05');

const findVowels = (numbers)=>{

} */
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
    initializer += array[i] ** 3;// last itratioon 126 + (9**3)
    console.log('inti',initializer);
    console.log('array[i] ',array[i]);
  }
  return initializer;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));
// task 07
console.log('task 07');
// why in the scond consol print the frist item
const dictionary = (charChecker, myString) => {
  for (i = 0; i < myString.length; i++) {
    if (myString[i].startsWith(charChecker)) {
      return myString[i]
    } else {
      return false;
    }
  }
  //return myString[i]
}
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));
// task 08
console.log('task 08');

const evenNum = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result.push(i);
      //console.log(i);
    }
    else{
      console.log('is not work coz i is odd number')
    }
  }
  return result;
}
console.log(evenNum(8));
console.log(evenNum(4));
console.log(evenNum(2));