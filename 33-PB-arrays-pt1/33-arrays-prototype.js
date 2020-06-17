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
console.log(euroCities);

//task 05
console.log(euroCities.push("Budapest"));
console.log(euroCities);
//task 06
let delItem = delete euroCities[2]
console.log(delItem);
//console.log(euroCities.splice(2));
//console.log(euroCities.filter(2));
console.log(euroCities);

//task 07 and 08
const asianCities = ['	Kuala', 'Lumpur',
    'Mongolia', 'Ulaanbaatar',
    'Myanmar'
]
// console.log(asianCities.findIndex("Mongolia" ,'Myanmar'));
//  console.log(asianCities.find('Mongolia'));
console.log(asianCities.indexOf('Mongolia'));
console.log(asianCities.indexOf('Myanmar'));
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
let change = worldCities.splice(1, 0, "Toronto");
console.log(change);


