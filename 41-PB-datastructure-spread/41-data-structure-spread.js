'use strict';

let euroCountries = ['paris', 'Berlin', 'rome', 'Siberia', 'Manama', 'Ankara'];

let asianCountries = ['Muscat', 'Riyadh'];
let newEuroCountries = euroCountries;
let newAsianCountries = asianCountries;
for(const item of newAsianCountries ) {

    
}

//task 02
let euroCountries = ['paris', 'Berlin', 'rome', 'Siberia', 'Manama', 'Ankara'];
let asianCountries = ['Muscat', 'Riyadh'];
const saveeuroCountries = [...euroCountries];
const saveasianCountries = [...asianCountries];

//task 03
function findTheLarger(arr) {
    let thelargest = null;
    for (let i = 0; i <= arr.length; i++) {
        if (thelargest < arr[i]) {
           thelargest = arr[i];
            //other way
            //   let minNum = Math.max(...arr)
        }
    }
    return thelargest;
}
console.log(findTheLarger([14, 4, 20, 7, 1]));

//task 4
function findTheLarger(arr) {
    let minNum = Math.min(...arr)
    return minNum
}
console.log(findTheLarger([14, 4, 20, 7, 1]));
//task 5
const person = {name: "John"};
const job = {role: "Teacher"};
const newJop = {...job};
const newPerson = {...person} 
newPerson.role = "Teacher";

// let newPerson[role] = "jop";
console.log(newPerson);
 
// task 06 



