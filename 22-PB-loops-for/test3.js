'use strict';

/* const nameOfCity = (x)=> {
    let y = x.toUpperCase();
if ( x.startsWith == "Los"  || x.startsWith == "New" ) {
 return x
}
else {
    return 'The city name does not begin with Los or New_"'
}
}
console.log( nameOfCity("Losangles"));  */


let helloWorld = 'hello world';
console.log(helloWorld[helloWorld.length - 1]);

const multiplesOfThree = (n) => {
    let result = '';
    for(let i = 3; i <= n*3; i = i + 3){
        result += i + ' ';//sum = '3 ' 
                        //sum = sum + i*3 + ' '
    }
    console.log(result)
}

/* multiplesOfThree(1)
multiplesOfThree(2)
multiplesOfThree(3)
multiplesOfThree(4)
multiplesOfThree(5)
multiplesOfThree(6) */
// other way
console.log('now')

const multiplesOfThree2 = (n) => { 
    let result = '';
    for(let i=1; i <= n; i++){
       // result = result + ' ' + i*3; // ' 3'
                                     // ' 3 6'
                                     // ' 3 6 9'
       
      if(i === n) {
        result = result + i*3;
      } 
      else {
          result = result + i*3 +' '; 
      }                     
    }
    return result;
}
// Eng.Akram info
// the best because the complex city is o of one o(1)
// is also beter time execution is shorter more than if else
//if else complex time is o of n = o(n) 
// nested loop complex time is o of N = o(n**2) 
const multiplesOfThree3 = (n) => { 
    let result = '';
    for(let i=1; i < n; i++){
        result = result + i*3 +' ';                  
    }
    result = result + n*3;
    return result;
}
console.log(multiplesOfThree3(5))
//'3 6 9 12 15'

// 0 4 8 12 16 20 24
const multiplesOfThree4 = (num) => {
    let output  = ''; 
    for(let i=0; i<= num; i++){ // priorty to mulitplaction
        output = output + 4 * i + ' ';//'' + 0 + ' '
    }
  return output;
}
 console.log(multiplesOfThree4(6)) ;

 ////
 // 0 4 8 12 16 20
const multiplesOfThree5 = (num) => {
    let output  = ''; 
    for(let i=0; i<= num; i++){ // priorty to mulitplaction
        output = output + 4 * i + ' ';//'' + 0 + ' '  
                                       // ''+ '4 '
                                       // ''+ '4 8 '
                                       // ''+ '4 8 12 '

    }
  return output;
}
 console.log(multiplesOfThree5(10)) ;
////////////////////////////////
console.log(`function 7`)
 const multiplesOfThree7 = (n) => { 
    let result = '';
    for(let i=1; i < n; i++){
        result = result + i*3 +' ';                  
    }
    result = result + n*3;
    return result;
}
console.log(multiplesOfThree7(5))