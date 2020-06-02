'use strict';
//01
let i = 0;
while (i < 15) {
  console.log(`${i}`);
  i++;
}

// 02
let counter = 0;
let counterTwo = 0;
while (counter <= 20) {
  console.log(` ${counter}`);
  counterTwo = counterTwo + counter;
  counter = counter + 1;

}
console.log(counterTwo);

//03
let index = 0;
do {

  console.log(`the Number is :${index}`);
  index++;
} while (index < 20)
