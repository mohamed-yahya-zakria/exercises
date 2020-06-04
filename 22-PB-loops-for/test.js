/* 
let mySum = 1;
for (let i = 0; i <= 20; i++) {
    mySum += i ; 
    // 1- 0+1
    //                    2- 1+1
    //                    3- 2+1
    
}
console.log(mySum); */
for (let i = 0; i < 3; i++) { // outer loop
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
}