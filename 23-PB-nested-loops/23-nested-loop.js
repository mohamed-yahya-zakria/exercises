



// comment ! i dont kmow why dont took the left space // 
let space = '';
for (let i = 10; i >= 1; i--){
    space ='';
    for (let p = i; p < 10; p++){
        space+='p'; // result = pppppppp
         // very important thing that you should make space between the single brackts,it was my mistak
    }
    for (let k = 0; k < (i * 2) -1; k++){
        space += '*';
    }
    for (let h = i; p < 10; p++){
        space+='p'; 
    }
    console.log(space);
}


/*  tree upset down
let space = "";
for (let i = 1; i <= 10; i++) {
    space = ""; // reset 
    for (let j = i; j < 10; j++) {
        space += " "; // this is for left space
    }
    for (let k = 0; k < (i * 2) - 1; k++) {
        space += "*"; // 19 x at the last time
    }
    console.log(space); // printed
} */


// scond example to exaplain
/* for (let i = 0; i < 3; i++) { // outer loop
    if (i % 2 !== 0) {
        continue;
    }
    let myString = '';
    for (let k = 3; k > 0; k--) { // nested loop // inner loop
        myString += ' first '; 
    }
    for (let j = 0; j <= i*2; j++) { // nested loop // inner loop
        myString += '*';
    }
    for (let l = 3; l > 0; l--) { // nested loop // inner loop
        myString += 'third  ';
    }
    console.log(myString);
} */

/* 
let mySum = 1;
for (let i = 0; i <= 20; i++) {
    mySum += i ; 
    // 1- 0+1
    //                    2- 1+1
    //                    3- 2+1
    
}
console.log(mySum); */