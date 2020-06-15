'use strict';

//01

/* Examples:
 * addUp(4) ➞ 10
 * addUp(13) ➞ 91
 * addUp(600) ➞ 180300 */

const addUp = (x) => {
    let sum = null;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
};

console.log("1:");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

// 1.

/* const addUp = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i; // result = result  + i 
         // result 1 3 6 10
                     
    }
    return result;
}
const addUp4 = addUp(4);
console.log(addUp4);
const addUp13 = addUp(13);
console.log(addUp13)
const addUp600 = addUp(600);
console.log(addUp600); */




// 2.
//takes in three numbers and returns the sum of its cubes.
//02 question why we write here x = 0 y =0 z = 0 and , is this value in itainal value or not ?
const cubed = (x = 0, y = 0, z = 0) => {
    return x ** 3 + y ** 3 + z ** 3;
}

console.log("task 2:");
console.log(cubed(1, 5, 9));
console.log(cubed(2));
console.log(cubed(0));

// 03 shorter way 
console.log("\n task3:");
/* * dictionary("bu", "button") ➞ true
 * dictionary("tri", "triplet") ➞ true
 * dictionary("beau", "pastry") ➞ false */
const stringStart = (init, word) => word.startsWith(init);
console.log(stringStart("bu", "button"));
console.log(stringStart("tri", "triplet"));
console.log(stringStart("beau", "pastry"));

//  03. other way but longer with substring method
/* const dictionary = (myString, myWord) => {
    const myStringLength = myString.length;
    let myNewString = '';
    myNewString = myWord;

    // substring(0) or (-1) check whole the word
    if (myString === myNewString.substring(0, myStringLength)) {
        return true
    } else {
        return false
    }
}
console.log('string check ' + dictionary("bu", "button"));
console.log('string check ' + dictionary("tri", "triplet"));
console.log('string check ' + dictionary("beau", "pastry")); */


// 4.
//**4. Less Than or Equal to Zero return flase
// return = x<=0 return aleardy check is the condition true or false 
const checkAgainstZero = (x) => x <= 0;

console.log("\n4.");
console.log(checkAgainstZero(3));
console.log(checkAgainstZero(0));
console.log(checkAgainstZero(-4));
console.log(checkAgainstZero(10));

// 5. 
// count a number of chrachter in the letter
//funcation("this is a string", "i") ➞ 3 
//shorter how count number the letter in strind
const occurrences = (string, letter) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        string[i] === letter ? count++ : "";
    }
    return count;
};

console.log("\n5:");
console.log(occurrences("this is a string", "i"));

// 5. long way
//question why we make empty string let x = '';
///* const occurrences = (myString, letter) //=> {
//let result = 0;
// let x = '';
// x = myString;
//for (let i = 0; i < x.length; i++) {
// console.log(myNewString[i]);
//if (x[i] === letter) {
//    result += 1;
//console.log(result,"this is")
//   }
//   }
//  return result;
//}
///occurrences('this is a string', 'i');
//let firstCheck = occurrences('this is a string', 'i');
//console.log('occurrences ' + firstCheck);
//let secondCheck = occurrences('more and more and more oo', 'o');
//console.log('occurrences ' + secondCheck); */

//6.
//function that takes a base number
//(3, 3) ➞ 27
//(5, 5) ➞ 3125
const calculateBaseToExponent = (x, y) => {
    return x ** y;
}
console.log(calculateBaseToExponent(3, 3));
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));

// 07.
/* dogAge(4) ➞ "Your doggo is 28 years old in human years!" */

const dogAge = (dogYears) => {
    return dogYears * 7;
}
const myFunction = dogAge(4);
console.log(`your dog is ${myFunction} years old in human years!`)


// 8.
// amount snak pre day whene i have max 80 year

const calcSupply = (age, amount) => {
    const yearsLeft = 80 - age;
    const restAmount = (amount * 365) * yearsLeft;
    return `You will need ${restAmount} of your favorite snack (${amount} per day) to last you till the age of 80`;
}
const mySnack = calcSupply(25, 2);
console.log(mySnack);
const yourSnack = calcSupply(40, 3);
console.log(yourSnack);

// 8 onther way but should be check fristly
function functionEight(x, y) {
    if (
        (x !== 0 && ((x % 7 === 0) || (x % 11) === 0)) ||
        (y !== 0 && (y % 7 === 0 || y % 11 === 0))
    ) {
        return true;
    } else {
        return false;
    }
}

console.log("\n8.");
console.log("0, 0:", functionEight(0, 0));
console.log("7, 0:", functionEight(7, 0));
console.log("0, 11:", functionEight(0, 11));
// 9.
// 9. chck if this word (waldo) is in letter (I found you Waldo!") or not

const isWaldoHere = (string) => {
    return string.toLowerCase().includes("waldo");
    /*  return `You will need ${restAmount} of your favorite snack (${amount} per day) to last you till the age of 80`; */
}

console.log("\n9:");
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));



// 10.
// 5 people x 3 slices each = 15 slices > 11 slices 
// acount how many get pepol get slices 
/* * equalSlices(8, 3, 2) ➞ true
* equalSlices(8, 3, 3) ➞ false
* equalSlices(24, 12, 2) ➞ true */
const equalSlices = (slices, reciver, personl) => {
    return reciver * personl <= slices;

}
console.log("\n10:");
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// 11.
// check if the charchter is = a same x and o
//i++  i= i+1    i+=1
const checkXandO = (string) => {
    let checkX = string.includes("x");
    let checkO = string.includes("o");
    let sumX = 0;
    let sumO = 0;
    if (checkX || checkO) {
        for (let i = 0; i <= string.length; i++) {
            if (string[i] === "x") {
                sumX += 1;
                /*  console.log(`sumX: ${sumX}`); */
            } else if (string[i] === "o") {
                sumO += 1;
                /*  console.log(`sumO: ${sumO}`); */
            }
        }
    }
    /*  console.log(`sumX: ${sumX}, sumO: ${sumO}`); */
    if (sumX === sumO) {
        return true;
    } else {
        return false;
    }
}

//011
const xO = (string) => {
    if (typeof string !== "string") {
      return "Input should be a string, duh!";
    }
    let lowerCase = string.toLowerCase();
    let sumX = 0;
    let sumO = 0;
    for (let i = 0; i < string.length; i++) {
      lowerCase[i] === "x" ? sumX++ : "";
      lowerCase[i] === "o" ? sumO++ : "";
    }
    return sumX === sumO;
  };
//011
/*11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
*/
// 012345678910
//"hello world" = lenght 11
const xo = (myString) => {
    let checkForX = 0; // "x"
    let checkForO = 0; // "o"
    let myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("ooxx")); // ➞ true
console.log(xo("xooxx")); // ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false



// 012
//12. isPrime?
//`);
const isPrime = number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}
const primeResult1 = isPrime(7);
console.log(primeResult1);
const primeResult2 = isPrime(9);
console.log(primeResult2);
const primeResult3 = isPrime(10);
console.log(primeResult3);

// 13.
const validateEmail = (myEmail) => {
    let myNewString = '';
    myNewString = myEmail;
    if (myNewString.includes('@') && myNewString.includes('.')) {
        console.log(myEmail);
        if (myNewString[0] !== '@') {
            const myStringLength = myNewString.length;
            let dotPlace = 0;
            let atPlace = 0;
            for (let i = 0; i <= myStringLength; i++) {
                if (myNewString[i] === '.') {
                    dotPlace = i;
                }
                if (myNewString[i] === '@') {
                    atPlace = i;
                }
            }
            if (atPlace < dotPlace) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(validateEmail('john@example.com'));
console.log(validateEmail('@example.com'));
console.log(validateEmail('john.smith@com'));
console.log(validateEmail('john.smith@example.com'));

// 13.
/* 
const validateEMail = (string) => {
    let isAsRequired = true;
    let countAt = 0;
    let atPos = 0;
    let dotPos = 0;
  
    if (string[0] !== "@") {
      for (let i = 0; i < string.length; i++) {
        if (string[i] === "@") {
          countAt++;
          atPos = i;
        }
        if (string[i] === ".") {
          dotPos = i;
        }
      }
    }
    if (string[0] === "@" || atPos >= dotPos) {
      isAsRequired = false;
    }
  
    return `"${string}" is ${isAsRequired ? "valid" : "invalid"}.`;
  };
  
  console.log("\n13:");
  console.log(validateEMail("john@example.com"));
  console.log(validateEMail("@example.com"));
  console.log(validateEMail("john.smith@com"));
  console.log(validateEMail("john.smith@email.com")); */

  convert to number
  parseInt(fristNum);
  parseFloat(scondNum);

  ex 20 is switch
  ex 27 is date

  //1
  const stringStart = (init, word) => word.startsWith(init).toLowerCase();
console.log(stringStart("bu", "button"));
console.log(stringStart("tri", "triplet"));
console.log(stringStart("beau", "pastry"));

//04
const addUp = (x) => {
    let sum = null;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
};

console.log("1:");
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

//
const calculateBaseToExponent = (x, y) => {
    return x ** y;
}
console.log(calculateBaseToExponent(3, 3));
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));

voel chrchert (o u i e a)