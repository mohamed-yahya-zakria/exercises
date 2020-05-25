"use strict";
//01...A..
let a = true;
let b = false;

let check1 = a && b ? (`true`) : (`false`);
console.log(check1)
// because in AND operator is ( true = false) = flase
//01...B..
let check2 = (a || b ) ? (`true`) : (`false`);
console.log(check2)
// because in OR operator is ( true = false) = true

//01...C..
let check3 = !(a && b) ? (`true`) : (`false`);
console.log(check3);
// because the condition is true  

//02...A
let x = 10;
let y = 15; 
let z = 20;
let check4 = (x > z && x > y) ? (`yes x is  greater than z or y`) : (`no, x is not greater than z or y`);
console.log(check4);
// because in And operator is ( true = false) = flase

//02....B....
let check5 = (x != y) ? (`no, x is not equal y `) :(`yes, x is equal y`);
console.log(check5);

//02...C
let check6 = (z < y || z > x) ? (`true,z is less than y OR may z is greater than x`) : (`false,z is not less than y OR z is greater than x but in this case z is greater than x`);
console.log(check6);
//02...D
let check7 = (x = z || x != y) ? (`yes, x is not equal y`) : (`no, x is equal y or y`);
console.log(check7);
//02...E
let check8 = (x >=10 && y <= 10) ? (`yes, x is equal 10 but not bigger than 10`) : (`no,i can't print true for should be the both condition true are`);

console.log(check8);

//02...F
let check9 = (x * z < 100 || x * y > 100) ? (`yes, x multiplied by z is less than 100 `) : (`no, x*z is not lesser then 100 or x * z is not bigger than 100`);

console.log(check9);
// because in OR operator is ( true = false) = True