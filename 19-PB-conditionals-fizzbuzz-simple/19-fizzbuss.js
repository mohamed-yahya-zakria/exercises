'use strict';
// mothod random = [0.0 : 0.99999..]
/* (use const until you need a changeable variable, then use let) */
let intNum1 = (100 * Math.random());
let x = (Math.round(intNum1));
 if (x  % 3 === 0) { 
    console.log (`Fizz`);
}
else if (x % 5 === 0 ){
    console.log(`Buzz`);
}
else if (x % 3 === 0 && x % 5 === 0) {
    console.log(`FizzBuzz`);
} 
else {
    console.log(x);
}