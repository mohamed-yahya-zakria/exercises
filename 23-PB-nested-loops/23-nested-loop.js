

// comment ! i dont kmow why dont took the left space // 
let space = '';
for (let i = 10; i >= 1; i--){
    
    space = '';
    for (let p = i; p < 10; p++){
        space+= '';
    }
    for (let k = 0; k < (i * 2) -1; k++){
        space += '*';
    }
    console.log(space);
}


/* let space = "";
for (let i = 1; i <= 10; i++) {
    space = ""; // reset 
    for (let j = i; j < 10; j++) {
        space += " ";
    }
    for (let k = 0; k < (i * 2) - 1; k++) {
        space += "*"; // 19 x at the last time
    }
    console.log(space); // printed
} */