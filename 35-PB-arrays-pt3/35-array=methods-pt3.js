'use strict';


// regex like (replac)is object and should work after save in variable like toString and so on 
//console.log();
// task 01
const isFourLetters = (myArr) => {
    let reslut = [];
    //let split = myArr.split(' ');
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i].length === 4) {
            reslut.push(myArr[i]);
        }
    }
    return reslut;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne", 'koko', 'lolo', 'max', 'papa','schuler']));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));
//task two

const monthName = (months) => {
    let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsOfYear[months - 1];
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
// task 03
//i try to understant this questions but dont get it

//task 04 we can alsoo delete the else ,Martina solution

function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}
console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0
console.log(unique([1, 1, 1, 1, 1, 1, 1, 0])); // ➞ 0

//task 04 onther varinte

function unique(array) {
    let number;
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] !== array[i]) { // array[i-1] we wroote that coz get back one item and array[i] = the value of item
            number = array[i-1];
        }
    }
    return number;
}
console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0 (edited) 

//task 05 lena
function wordRank(str) {
    const LETTERS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const STR_IN_ARR = str.split(' '); //separate words
    console.log(STR_IN_ARR);
    const ARR_SUM = [];
    for (let i = 0; i < STR_IN_ARR.length; i++) {
        let sum = 0;
        for (let j = 0; j < STR_IN_ARR[i].length; j++) {
            if (LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase()) !== -1) {
                sum += LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase());
            }
        }
        ARR_SUM.push(sum);
    }
    console.log(ARR_SUM); //sum of each word in array
    //to find the largest sum
    let largest = 0;
    for (let i = 0; i < ARR_SUM.length; i++) {
        if (ARR_SUM[i] > largest) {
            largest = ARR_SUM[i];
        }
    }
    console.log(`Largest sum ${largest}, index of largest is ${ARR_SUM.indexOf(largest)}`);
    let index = ARR_SUM.indexOf(largest); //index of the largest sum in arr
    return STR_IN_ARR[index];
}
console.log(wordRank("The quick brown fox."));
//task 05 Martina
// Word Ranking
function wordRank(sentence) {
    const words = sentence.split(" ");
    console.log(words);
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const letterScore = word.toUpperCase().charCodeAt(j) - 64; // little hacky :D
            // charCodeAt would return a number between 97 (a) - 122 (z)
            wordScore += letterScore;
        }
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
            continue;
        }
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return "${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]};
}
//console.log(wordRank("Testing, one, 2, three"));
console.log(wordRank("The quick brown fox."));// ➞ "brown"
console.log(wordRank("Nancy is very pretty."));// ➞ "pretty"
console.log(wordRank("Check back tomorrow, man!") );//➞ "tomorrow"
console.log(wordRank("Today is Wednesday."));// ➞ "Wednesday"

// charCodeAt would return a number between 65 (A) - 90 (Z)
// task 6. 
const hackerSpeak = (str) => {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                str[i] = 4;
                break;
            case 'e':
                str[i] = 3;
                break;
            case i:
                str[i] = 1;
                break;
            case 'o':
                str[i] = 0;
                break;
            case 's':
                str[i] = 5;
                break
            default:
                str[i] = str[i];
        }
    }
    str = str.join('');
    return str;
}

console.log('ex 6', hackerSpeak("javascript is cool"));
console.log('ex 6', hackerSpeak("programming is fun"));
console.log('ex 6', hackerSpeak("become a coder"));

//06
function hackerSpeak2(string) {
    let newString = string; // copy to the string for output
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
                        .replace(/e/gi, 3)
                        .replace(/i/gi, 1)
                        .replace(/o/gi, 0)
                        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));
// 06 
const hackerSpeak2 =(str)=>{
    str = str.split('')
 for (let i = 0;i< str.length; i++){
     switch (str[i]){
         case 'a, s':
             str[i] = 4;
             break  
        case 'e, s':
            str[i] = 3;
            break
        case 'i, s':
            str[i] = 1
            break
        case 'o, s':
            str[i] =  0;
            break
        case's, s':
          str[i] = 5
            break

        default:
            str[i] =  str[i]
     }
 }
 str = str.join('');
 return str;
}
console.log('ex my 6', hackerSpeak2("javascript is cool"));

