"uas strict";

//task 01
let x = "Martina is excellent teacher"
let y = 10;

console.log(x + y);

// ' + ' cocateanate string with string even if have number consider string constantly between brackts ''
let introSentence = "hello, my name is Fran and I am";
let age = 25;

console.log(`${introSentence} ${age}`);

//task 02
let fristNum = '1005';
let scondNum = '10.05';

let answerFristNum =
    parseInt(fristNum);
let answerScondNum = parseFloat(scondNum);

console.log(answerFristNum);
console.log(answerScondNum);
console.log(typeof(answerFristNum));

// task 03
let chekNum = 2;

let a = 136;
let b = 939;
let c = 90.9;

//Qustion the frist condition is false value or true
let chekerAnum = a % chekNum  ? ('this is odd number') : ('this is even number');

console.log(chekerAnum);

let chekerBnum = b % chekNum ? ('this is odd number') : ('this is even number');

console.log(chekerBnum);

let chekerCnum = c % chekNum ? (`this is odd number`) : (`this is even number`);

console.log(chekerCnum);

console.log(30%2, 939%2, 90.9%2);
