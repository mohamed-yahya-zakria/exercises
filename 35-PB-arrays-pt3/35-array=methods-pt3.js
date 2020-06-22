'use strict';

//console.log();
 // task 01
 const isFourLetters = (myArr)=>{
  let reslut = [];
  //let split = myArr.split(' ');
  for (i=0; i<myArr.length; i++){
      if(myArr[i].length === 4 ){
          reslut.push(myArr[i])
      }
  }
  return reslut;
 }
 console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));
 //task two
 const monthName = (months)=>{
   let  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
     return(monthsOfYear(months));
 }
console.log(monthName(3));

// task 03
//i try to understant this questions but dont get it

//task 04
const unique = (num)=>{
let reslut= [];
for (i=0; i<num.length; i++){
    if (num[i].length !=== num[i]){
        reslut.push(num[i])
    }
}
return reslut;
}

console.log(unique([3, 3, 3, 7, 3, 3]));