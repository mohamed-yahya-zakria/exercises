//01
// add up the numbers 1 to 20.
let mySum = 1;
for (let i = 0; i <= 20; i++) {
    mySum = i + mySum; //mysum += i
    console.log(mySum);
}
console.log(mySum);

//02 
for (let index = 1; index < 6; index++) {
    if (index === 1) {
        console.log(`"There is one bottle of beer ohne ALK on the wall`);
    } else if (index === 2) {
        console.log(`"There is two bottle of beer ohne ALK on the wall`);
    } else if (index === 5) {
        console.log(`"There is five bottle of beer ohne ALK on the wall`);
    }

}

// 03
for (let index2 = 0; index2 < 21; index2++) {
    if (index2 % 2 === 0) {
        console.log(` ${index2} this is even Number`);
    } else {
        console.log(` ${index2} this is odd Number`);
    }

}
//04

for (let index3 = 0; index3 <= 10; index3++) {
    let result1 = (index3 * 9);
    console.log(`${index3} * 9 =  ${result1}`);
}

//05 
for (let index4 = 1; index4 <= 100; index3++){
     /*  if (index4 +3) {
        console.log(`Fizz`); */
    if (index4 % 3 === 0) {
        console.log(`Fizz`);
    }
    else if (index4 % 5 === 0) {
        console.log(`Buzz`);
  
    }
    else if (index4 % 3 === 0 && index4 % 5 === 0){
        console.log(`FizzBuzz`);
    }

// nesting example
/*  for (i = 0; i < 5; i++) { // 99%
    console.log('i: ', i);
    for (let k = 0; k < 10; k+2) {
        /// nested inside
        console.log('k: ', k);
    }
}  */