'use strict';

const supplies = ["meat", "potatoes", "chicken", "corn"];
const cookSupplies = array => {
    const cookedFood = array.map((food) => {
        switch (food) {
            case "meat":
                return "hamburger";
            case "potatoes":
                return "potato fries";
            case "chicken":
                return "roasted chicken leg";
            case "corn":
                return "pop corn";
            default:
                return;
        }
    });
    return cookedFood;
}
const cookedFood = cookSupplies(supplies);
console.log(cookedFood);


const isVegetarian = cookedFood.filter((food) => {
    return food === "pop corn" || food === "potato fries";
});
console.log(isVegetarian);



const unprocessedArray = ['🐮', '🍠', '🐔', '🌽'];
// ABSTRACT FUNCTION
function cook(value) {
    if (value === '🐮') {
        return '🍔';
    } else if (value === '🍠') {
        return '🍟';
    } else if (value === '🐔') {
        return '🍗';
    } else if (value === '🌽') {
        return '🍿';
    } else {
        console.log("Error!");
    }
}

const processedFood = unprocessedArray.map(cook); // HIGHER ORDER FUNCTION
const processedFood2 = [].map(cook); // would become empty Array again

console.log(processedFood); // ['🍔', '🍟', '🍗', '🍿'];

// SECOND PROCESSING 

function isVegetarian(value) {
    return (value === '🍿' || value === '🍟');
}

const vegetarianFood = processedFood.filter(isVegetarian); // ARRAY [4] items => filtered can be maximum? [4]
const vegetarianFood2 = [].filter(isVegetarian); // Array Length stays Zero 

console.log(vegetarianFood);

// REDUCE 

function eat(prevValue, currentValue) {
    //if(prevValue || currentValue) {
    return '💩';
    //}
}
const finalOutput = processedFood.reduce(eat);
// const empty = [].reduce(eat); empty Array not possible by default 
console.log(finalOutput);
//console.log(empty);

// forEach again ;) 
const array1 = ['a', 'b', 'c'];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function consoleLog(el, index, array) {
    array[index] = el.toUpperCase();
    console.log(el);
}

array1.forEach(consoleLog);
console.log(array1);

// expected output: "a"
// expected output: "b"
// expected output: "c"