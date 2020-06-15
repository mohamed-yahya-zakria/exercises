/* 
let mySum = 1;
for (let i = 0; i <= 20; i++) {
    mySum += i ; 
    // 1- 0+1
    //                    2- 1+1
    //                    3- 2+1
    
}
console.log(mySum); */


/* let sum = 0;
for (let i = 0; i < 10; i++) { // blockscope
    
        sum = sum + i; - 1-sum =0
                          //2-sum =1       0 + i
                          //3-sum =3       1 + i2
                          //4-sum =6       3 + i3
                          //5-sum =10      6 + i4
                          //6-sum =15      10 + i5
                          
    
    console.log(i);
}
console.log(sum); */
// console.log(i); i is not defined



/* 13.
*** Validate Email.**
Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

* The string must contain an "@" character.
* The string must contain a "." character.
* The "@" must have at least one character in front of it.
* e.g. "john@example.com" is valid while "@example.com" is invalid.
* The "." and the "@" must be in the appropriate places.
* e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid. */

// 13.
/* const validateEmail = (myEmail) => {
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
console.log(validateEmail('john.smith@example.com'));  */


// 13.

 const validateEMail = (string) => {
    let isAsRequired = "";
    let countAt = 0;
    let atPos = 0;
    let dotPos = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "@") {// i = 10

        countAt++; // find only one @ 
        atPos = i; // atpos = 10 because potiontin @ is num 10 --john.smith@example.com 
      }
      if (string[i] === ".") { // right now i = 10
        dotPos = i; // dotpos frist itration sould be 4  but not coz i = 10 the scond capacity the i  = 18 
      }
    }

    if (string[0] === "@" || countAt !== 1 || atPos > dotPos) {
      isAsRequired = false;
      //atPos > dotPos) if the @ come after the (.) is became false
      // countAt !== 1  acually countAt = 1 cox find juse one @ but we need flas case.
    }
    return `"${string}" is ${isAsRequired ? "valid" : "invalid"}.`;
  }; 

console.log(validateEMail('john@example.com'));
console.log(validateEMail('@example.com'));
console.log(validateEMail('john.smith@com'));
console.log(validateEMail('john.smith@example.com')); 

 //02 question why we write here x = 0 y =0 z = 0 and , is this value in itainal value or not ?
const cubed = (x = 0 , y = 0, z = 0 ) => {
    //console.log(y ** 3);
    return x ** 3 + y ** 3 + z ** 3;
}

console.log("task 2:");
console.log(cubed(1, 5, 9));
console.log(cubed(2));
console.log(cubed(0));

// 3.shoter way (stringStart) this method used just for check the first charchter
const stringStart = (init, word) => {
   return word.startsWith(init);
} 
console.log("\n3:");
console.log(stringStart("bu", "button"));
console.log(stringStart("tri", "triplet"));
console.log(stringStart("beau", "pastry"));

//03 other way but longer with substring method
/* console.log("task 3:");
const dictionary = (myString, myWord) => {
    const myStringLength = myString.length;
    let myNewString = '';
    myNewString = myWord;
    // console.log(myString);
    // console.log(myNewString.substring(-1,myStringLength));
    if (myString === myNewString.substring(0, myStringLength)) {
        return true
    } else {
        return false
    }
}
console.log('string check ' + dictionary("bu", "button"));
console.log('string check ' + dictionary("tri", "triplet"));
console.log('string check ' + dictionary("beau", "pastry")); */

const checkAgainstZero = (x) => x <= 0; // return = x<=0 return aleardy check is the condition true or false 

console.log("\n task 4.");
console.log(checkAgainstZero(3));
console.log(checkAgainstZero(0));
console.log(checkAgainstZero(-4));
console.log(checkAgainstZero(10));

// 5. 
console.log("\n task 5.");
//question why we make empty string let x = '';
const occurrences = (myString, letter) => {
    let result = 0;
    let x = '';
    x = myString;
    for (let i = 0; i < x.length; i++) {
        // console.log(myNewString[i]);
        if (x[i] === letter) {
            result += 1;
            console.log(result,'result');
        }
    }
    return result;
}
let y = occurrences('this is a string', 'i');
console.log("this is a string" ,y);
let firstCheck = occurrences('this is a string', 'i');
console.log('occurrences ' + firstCheck);
let secondCheck = occurrences('more and more and more oo', 'o');
console.log('occurrences ' + secondCheck);


//06
/* const calculateBaseToExponent = (x, y) => {
    return x ** y;
}
console.log(calculateBaseToExponent(3, 3));
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10)); */



// 9. important
// 9.

/* const isWaldoHere = (string) => string.toLowerCase().includes("waldo");

console.log("\n9:");
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here")); */

    