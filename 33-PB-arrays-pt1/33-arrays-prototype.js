'use strict';
//task 01
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"]
let secondItem = euroCities[1]
console.log(secondItem);

console.log(euroCities);
//task 02  

euroCities[0] = "berlin"
console.log(euroCities);

//task 03 
console.log(euroCities.length);

//task 04
console.log(euroCities.pop());
console.log( "4"euroCities);

//task 05
console.log(euroCities.unshift("Budapest"));
console.log(euroCities);
//task 06
/* let delItem = delete euroCities[2]
console.log(delItem); */
//bsest way
 euroCities.splice(1, 2);
console.log(euroCities);
//console.log(euroCities.filter(2));
console.log(euroCities);

//task 07 and 08
const asianCities = ['	Kuala', 'Lumpur',
    'Mongolia', 'Ulaanbaatar',
    'Myanmar'
]
console.log(asianCities);
// console.log(asianCities.findIndex("Mongolia" ,'Myanmar'));
//  console.log(asianCities.find('Mongolia'));
let y = asianCities.slice(1, 4); //from 1 item to 4 item
console.log(y);

console.log(asianCities);

//  task 09

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
//  task 10
console.log(worldCities.reverse());
//  task 11
/* let x = items.indexOf("Prague");

if (index !== "Prague") {
    items[index] = "Toronto";

} */

worldCities[2] = "Toronto"
console.log(worldCities);

//012
let change = worldCities.splice(1, 0, "Washington");
console.log(change); //the 1 is the potion and 0 how many to  remove and Washington we need put
//013

function reverseFun(str) {
    const reverseArray = str.split('');
    console.log(reverseArray);
    reverseArray.reverse();
    return reverseArray.join('');
}

let myString = '';
for (let i = 0; i < worldCities.length; i++) {
    myString = myString + ' ' + worldCities[i];
}
console.log('ex.13', myString);
// 13 second
console.log('ex 13 2nd ', worldCities.join(', ')); 


