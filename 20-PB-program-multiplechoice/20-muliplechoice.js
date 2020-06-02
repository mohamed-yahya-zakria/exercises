'use strickt';

//01

let color = 'green';
switch (color) {
    case 'red':
        console.log(`this is color ${color} like  appel`)
        break
    case `blue`:
        console.log(`this is color ${color} like  blue grapes`)
        break
    case 'green':
        console.log(`this is color ${color} like  green appel`)
        break
    case 'yellow':
        console.log(`this is color ${color} like  cantaloupe`)
        break
    default:
        console.log(`sorry we don't have onther color in our exercise :)`)

}
//02 
// i don't underdstand the question

//03
let fruits = 'apple'
switch (fruits) {
    case 'banana':
        console.log(`this is ${fruits} fruit`);
        break
    case 'orange':
        console.log(`this is ${fruits} fruit`);
        break
    case 'strawberry':
        console.log(`this is ${fruits} fruit`);
        break
    case 'apple':
        console.log(`this is ${fruits} fruit`);
        break
    default:
        console.log(`we don't have any more fruits sorry Sir`);
}




/* let daysInThisMonth = null;
month = 2; 
// i think this is beautiful :D 
// reducing the cases for our purposes 
// chunk them together like this! 
switch (month) {
    case 1: // january
    case 3: // march 
    case 5: // may
    case 7: // july
    case 8: // august
    case 10: // october
    case 12: // december
        daysInThisMonth = 31;
        break; // MUST HAVE FOR ALL THE CASES NORMALLY 
    case 2:
        daysInThisMonth = 28;
        break;
    case 4: // april
    case 6: // june
    case 9: // september
    case 11: // november
        daysInThisMonth = 30;
        break;
    default: // standard case, backup, it MUST be there, should be at the end! 
        console.log("Its an error case! Something went wrong"); // 13  
        // doesn't need a break because its the last one!  
}
console.log(`The month number ${month} has ${daysInThisMonth} days per month!`); */