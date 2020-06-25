'use strict';


/*  Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
 */


function volumeOfBox(sizes) {
	return sizes.width * sizes.length * sizes.height;
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
//console.log();

//task 02

/* Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia" */
//solution 02


/*  const propertiesCity5 = (obj)=>{
    let cityFacts =  {
        name: 'paris',
        population: '2,140,256',
        continent : 'Europe',
        2 : 'test',
        
    }
  return `${cityFacts.name} has a population of ${cityFacts.population} and is situated in ${cityFacts.continent} and this is key of number to ${cityFacts.'2'} `
}
console.log(propertiesCity5()), */



const propertiesCity = (myObj)=>{

    return `${myObj.name} has a population of ${myObj.population} and is situated in ${myObj.continent}   `
}
console.log(propertiesCity({name:' paris', population: '2',  continent: 'Erupe' }));

console.log(propertiesCity({name: 'Tokyo', population: '13,929,286 ', continent: 'Asia' }));




//task 03
/* Write a function that returns true if a hash contains the specified key, and false otherwise.

Examples
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true */
// solution task 3
const hasKey= (myObj, key)=>{
    return myObj[key] ? true : false ;
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")) ;

//task 4
/* You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.

Examples
profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) ➞ 44030 */

// solution task 4
make the  objects here
function profit(info){
    return Math.round((info.sellprice - info.cosrprice) * info.inventory);
}

//
//task 6
/* In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

weight on planetA / gravitational force of planetA * gravitational force of planetB

Planet	m/s²
Mercury	3.7
Venus	8.87
Earth	9.81
Mars	3.711
Jupiter	24.79
Saturn	10.44
Uranus	8.69
Neptune	11.15
Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

Examples
spaceWeights("Earth", 1, "Mars") ➞ 0.38

spaceWeights("Earth", 1, "Jupiter") ➞ 2.53

spaceWeights("Earth", 1, "Neptune") ➞ 1.14 */

//solution task 6

make the objects

function spaceWeights (planetA, weight, planetB){
    let result = weight / gravitationalForce[planetA]  * gravitationalForce[planetB];
    console.log(result);
    return Math.round(result * 100) / 100;
    // we multiplp 100 / 100 to take 2 nuber after the dote
}
console.log(spaceWeights('Earth', 1, 'Mars'));
console.log(spaceWeights("Earth", 1, "Jupiter"));
console.log(spaceWeights("Earth", 1, "Neptune"));