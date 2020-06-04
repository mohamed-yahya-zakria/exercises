//01
// add up the numbers 1 to 20.
let mySum = 1;
for (let i = 0; i <= 20; i++) {
    mySum = i + mySum; //mysum += i
    console.log(mySum);
}
console.log(mySum);


// 2. Martina
for (let bottles = 1; bottles <= 5; bottles++) {
    if (bottles > 1) {
        let number = '';
        switch (bottles) {
            case 2:
                number = 'two';
                break
            case 3:
                number = 'three';
                break
            case 4:
                number = 'four';
                break
            case 5:
                number = 'five';
                break
            default:
                console.log('error case');
        }
        console.log(`there are ${number} bottles on the wall`);
    } else {
        console.log('there is one bottle of beer on the wall');
    }
}
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
    else {
        console.log(index4);
    }
//06
/*     let sum = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum); */
    //06
    let sum = 0;
    for (let index5 = 0; i<1000; index5++){
        if (index5 %3===0 ||index5 % 5===0 ){
            sum +=index5
        }
    }
    console.log(sum);
// nesting example
/*  for (i = 0; i < 5; i++) { // 99%
    console.log('i: ', i);
    for (let k = 0; k < 10; k+2) {
        /// nested inside
        console.log('k: ', k);
    }
}  */

//07
// 7. 
let hundred = '';
for (let i = 100; i <= 1000; i += 100) {
    console.log('7.a ' + i);


    hundred = hundred + ' ' + i;
}
console.log(hundred);

let multiple2 = ''
for (let j = 1; j <= 128; j = j * 2) {
    console.log('7.b ' + j);
    multiple2 = multiple2 + ' ' + j;
}
console.log(multiple2);

let plus2 = '';
for (let i = 0; i <= 10; i += 2) {
    console.log('7.c ', i);
    plus2 = plus2 + ' ' + i;
}
console.log(plus2);

let plus3 = '';
for (let i = 3; i <= 15; i += 3) {
    console.log('7.d ', i);
    plus3 = plus3 + ' ' + i;
}
console.log(plus3);

let minus = '';
for (let i = 9; i >= 0; i--) {
    console.log('7.e ', i);
    minus = minus + ' ' + i;
}
console.log(minus);

let many = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log('7.f ', i);
        many = many + ' ' + i;
    }
}
console.log(many);

let toFour = '';
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log('7. j', j);
        toFour = toFour + ' ' + j;
    }
}
console.log(toFour);