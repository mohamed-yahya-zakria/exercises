/* line = space + star 
k= counter of spaces
j = conunter of star */


// frist itration two space + *
// scond itration one space + ***
// third itration no space + *****







const triangleOfStars = () => {
    let line;

    for(let i = 1; i <= 10; i++) {
        // initialization of line
        line = '';
        // k = 2, 1, 0,
        // loop of spaces
        for(let k = 10 - i; k >= 1; k--) {
            line += ' ';// concatenation
             //console.log(line)
            // line = line + ' '
        }

        // i = 1; line = '  '
        // loop of stars
        for(let j = 1; j <= i*2 - 1 ; j++) {
            line += '*';
            //console.log(line)
        }

        // i=1; line = '  *'
        console.log(line);
    }
}

triangleOfStars(); 

const startsloop = () => {
    let line;
    for (let i = 0; i >=10; i++){
        line= '';
        for(let k = 9; k >= i; k--) {
            line += ' ';
        }  
        for (let j = 1; j>=i; j++ ){
            line+= '*'; 
        }

        console.log(line)
    }

}

//startsloop()