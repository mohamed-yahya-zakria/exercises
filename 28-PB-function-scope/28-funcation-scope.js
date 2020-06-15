
'use strict';

//refrance MDn typeof js

//console.log(typeof 42);
// expected output: "number"


/* console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"; */


// 1.
 
const myNumbers = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(typeof(a));
        console.log('They are numbers');
        let multiple2 = ''; // as a string
        for (let i = 1; i <= b; i++) {
            // console.log(a ** i);
            multiple2 = multiple2 + ' ' + a ** i;
        }
        console.log(multiple2);
    } else {
        console.log('They are not both numbers');
    }
}

myNumbers(2, 8);

// 2.
const myFruit = 'Apple';
const printFavoriteFruit = (myFruit) => {
    myFruit = 'Peach';
    console.log('My favorite fruit is:', myFruit);
}
printFavoriteFruit(myFruit);

// 3. 
let result = 0;

function exponent(a, b) {
    //    let result = a**b;
    result = a ** b;
    console.log('inside the function ', result);
}

exponent(2, 5);
console.log('outside of the function', result);

// a. If i declare the variable outside of the function(globally) and then assign it inside then i can call it outside as well
// b. if i declare the variable inside the function i cannot call it outside cause it's only existing in the local scope
// c. i can declare the variable globally and then redeclare it inside the function locally, then i can use the variable outside but the value is gonna change only locally  













//Print Exponential Values
//01
/* const myFuncation = (x, y) => {
  const num = parseInt(x);
  const num1 = parseInt(y);

  console.log(x, y)
}
myFuncation(44, 88);

//02
const myFuncation2 = (x, y) => {
     y = 9;
    const num =  27;
    const num1 =  81;
    const num2 =  243;
  
    console.log(x, y, num, num1, num2);
}
myFuncation2(3, 5);


//2. Fruits

 // 01
let myFruits = 'mango, banana, appel';
 const favoriteFruit = (fruit) => {
    let myFruits = 'melom, orange, gribfruit';
    console.log(myFruits);
 }
 favoriteFruit(myFruits);
 //02
 const multipliedFlunlctionItslef = (x, y) => {
    let muliPItslef = (x ** y);
    console.log(muliPItslef);
}
multipliedFlunlctionItslef(2, 3); */