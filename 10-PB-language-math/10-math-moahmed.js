"uas strict";

// task 01
let a = (Math.min(-1, 0, 1, 2, 3, 4));
console.log(a);

let b = (Math.max(-1, 0, 1, 2, 3, 4));
console.log(b);

//02-A round up 
let c = (Math.ceil(3321));
let d = (Math.ceil(32321));
let e = (Math.ceil(326.76));
let f = (Math.ceil(76788.7));
let g = (Math.ceil(-9.78));
let h = (Math.ceil(43.342));

console.log(c, d, e, f, g, h);

// 02-B round down 
let num1 = (Math.floor(3321));
let num2 = (Math.floor(32321));
let num3 = (Math.floor(326.76));
let num4 = (Math.floor(76788.7));
let num5 = (Math.floor(-9.78));
let num6 = (Math.floor(43.342));
console.log(num1, num2, num3, num4, num5, num6);

// i find foolr method or ceil exept one variable
/* let c = 3321
let d = 32321
let e = 326.76
let f = 76788.7
let g = -9.78
let h =  43.342

console.log(Math.ceil(c, d, e, f, g, h));

console.log(Math.floor(c, d, e, f, g, h)); */

//03 --

 let x = (Math.random());
 let y = x * 6;
 console.log(y); 
 let z = Math.round(y);
 console.log(z);

 let num = z === 0 ? (z + 1) : (z);
 console.log(num)

/* 1-we declared Random value (x)by default is [0:1]
2-we mulitplicated at 6,as a needs Exercise.
3-we used methoud around that we get wohle number for result of arounded Number 
4-we use ternary methoud make the condition (if the value of arounded NUm has zero add one or print the value) */



