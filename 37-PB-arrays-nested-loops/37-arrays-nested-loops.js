'use strict';

let space = '';
for (let i = 10; i >= 1; i--){ // 10 > 9 > 8 > 7....
    //space = ''; // very itration restarted from empty string
    
    for (let p = i; p <= 10; p++){  
          
        space+= ' ';// space = space + p +1  // space = 
        
        //p = 9 +  , p<10, p++

         // result = pppppppp
         // very important thing that you should make space between the single brackts,it was my mistak
    }
    for (let k = 0; k < (i * 2) -1; k++){//first itiration = 19*
         space += '*';
    }
   /*   for (let b = i; b < 10; b++){
        space+='b'; 
    }  */
}
    console.log(space);

    ///solve 
    

const halfTree = (character, lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            array.push(character);
            console.log(array.join(" "));
        }
    }
}
console.log("Task 1: Tree");
halfTree("*", 4);

// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string);
    }
    return string;
}
console.log(mohamedsPyramid(10));

// task 02

console.log("Q2");
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
function print (array) {
    for (let i = 0; i < array.length; i++) {
        console.log("row", i);
        for (let j = 0; j < array[i].length; j++) {
            console.log(" " + array[i][j]);
        }
    }
}
print(arr)
//console.log(print(arr));
// 03
const printNumbers = () => {
    let arrayOne = [];
    let arrayTwo = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (j !== 0 && j !== 4) {
                arrayOne.push(i);
            }
            arrayTwo.push(j);
        }
    }
    console.log(arrayOne.join(" "));
    console.log(arrayTwo.join(" "));
}
printNumbers();
 //ontherway task 03
 const notRepeat = arr =>{
     let result1 = '';
     let result2 = '';
     for(let i =0; i<=3; i++){
         for(let j=1; j<arr[0].length;j++ ){
             result1+= arr[0][i] + ' ';
         }
     }
     for (let i =0; i<3; i++){
         for (let j = 0; j < arr[1].length;j++){
             result2+= arr[1][i] + ' ';
         }
     }
     return `${result1} ${result2}`
 }
 //console.log(notRepeat([1, 2, 3, 4, 0, 1, 2, 3, 4]))
 //console.log(notRepeat([1, 2, 3, 4, 0, 1, 2, 3, 4]))
