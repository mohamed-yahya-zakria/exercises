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
 //04
let percentageComplete = 30;
if (percentageComplete === 30) {
    console.log(`Still a long way to go`);
}
else if (30 <= percentageComplete <= 50 ){
    console.log(`Still a long way to go`);
}
else if (51 <= percentageComplete <= 80 ){
    console.log(`You can do it!`);
}
else if (81 <= percentageComplete <= 99 ){
        console.log(`This is the last push!`);
}
else if (percentageComplete === 100){
    console.log(`You're there. Well done!`);
}
/*  I use if or else if statment to check for bigger than // smaller than but switch does't work for that but we can use switch for when we make check app like check for monthes or check for color ..etc */