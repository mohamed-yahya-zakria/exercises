// Add answers here 

//01

 const _nameOfCity_ = (x)=> {
    let y = x.toUpperCase;
if (y === y.startsWith("Los")  || y === y.startsWith("New") ) {
 return x
}
else {
    return 'The city name does not begin with Los or New_"'
}
}
console.log( _nameOfCity_("Losangles")); 

// 2 
const _isDivisible_ = (num)=> num % 100 === 0 ;


console.log(_isDivisible_(1));
console.log(_isDivisible_(1000));
console.log(_isDivisible_(100));
 
//03 

//04. What's the weather
const _isRaining_ = (frage)=> frage == true ? ('_wet day - you need an umbrella_') : ('dry day - leave your umbrella at home_');


console.log(_isRaining_('dry day - leave your umbrella at home_'));

//Loops 05
// my solution
/* const geometricalSequence = (number) => {
    let sum2 = 0;
    for (let i = 1; i <= number; i++) {
        sum2 += i;
    }
    return sum2;
};
console.log(_geometricalSequence_(2));
console.log(_geometricalSequence_(4));
console.log(_geometricalSequence_(32)); */

//****05 loops // i need understand ****
const geometricalSequence = () => {
    let sum = '';
    for (let i = 1; i <= 256; i *= 2){
        sum += i + '';
    }
    return sum
}
console.log(geometricalSequence(1));

//6. Multiples

//my solution 
/* const _multiplesOfThree_ = (number) => {
    
    for (let i = 1; i <= number; i++) {
        let x =  number.toString() * 3;
        return number * 3;
    } 
};
console.log(_multiplesOfThree_(3));
console.log(_multiplesOfThree_(6));
console.log(_multiplesOfThree_(9));
console.log(_multiplesOfThree_(12));
console.log(_multiplesOfThree_(15)); */

 //****06 loops // i need understand ****
const multiplesOfThree = (n) => {
    let result = '';
    for(let i = 1; i <= n; i++){
        result += i*3 + ' ';//sum = '3 ' 
                        //sum = sum + i*3 + ' '
    }
    return result
}
const myFunction = (multiplesOfThree(5));
console.log(myFunction);

///power off //07 i need other ways with loop 
const powerOf = (a) =>{
  return Math.pow(a, a)
}
console.log(powerOf(3));
console.log(powerOf(4));
console.log(powerOf(5));

// my solution 07
const _powerOf_ = (number) => {
    for (let i = 1; i <= number; i++) {
        return number * i
    } 
}
console.log(_powerOf_(3));
console.log(_powerOf_(4)); 


//8. How many? 

// my sollution 
const _vowelCount_ = (vowelCountchar , mysrting) => {
    let vowelCountch = (`a, e, u, i, o`);
        return `The character at index ${mysrting} is ${mysrting.includ(vowelCountch)}`;

}
    
console.log(_vowelCount_('hello'));
console.log(_vowelCount_('test'));
console.log(_vowelCount_('fbw'));



