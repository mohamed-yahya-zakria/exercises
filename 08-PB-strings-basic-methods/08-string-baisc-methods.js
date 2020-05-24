"uas strict";

//01 
let walk = `I can walk in the park all day!`;
let park = (walk.substring(18, 22));
console.log(park);

//02
let txt1 = `hello world`;
let UpperCase = (txt1.toUpperCase());
console.log(UpperCase);

 //03
 let txt2 = `Hello Earthling`;
 let lowerCase = (txt2.toLocaleLowerCase())
 console.log(lowerCase);
 //04 
 let txt3 = `JavaScript`;
 console.log(txt3.substring(3, 6));

 //05
 txt5 = "nice shoes";
 let check = txt5.includes('l') ? (`yes letter l is in ${txt5}`) : (`letter "l" it is't in ${txt5} sentence`);
 console.log(check);
 let check2 = txt5.includes('n') ? (`yes letter n is in ${txt5} sentence `) : (`it is't in ${txt5}`);
 console.log(check2);

 //06 
 let txt6 = "Bananas";
  console.log(txt6[0]+txt6.substring(0)+txt6[0]);
 
/*  console.log(txt6[0]+txt6.substring(0, 0)+txt6.substring(0, 6)); */

//07 
let txt7 = `Scritch`;
console.log(`${txt7.substring(txt7.length-3)}${txt7}${txt7.substring(txt7.length-3)}`);

//08 toUpperCase() dont except parameter
let txt8 = `BoogieWoogie`;


console.log(`${txt8.substring(txt8.length-1)}${txt8.substring(1, 11)}${txt8[0]}`);


//09
let firstName = "Maria";
let city = "Berlin";
let job = `teacher`;
console.log(`"My name is ${firstName}.live in ${city} and I am a ${job}"`);

//10
txt10 = `the quick brown fox`;
console.log(txt10[0].toUpperCase() + txt10.substring(1));

//txt10.substring(1)) it means print all the text(txt10) from charchter 1.