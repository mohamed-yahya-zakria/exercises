'use strict';

let euroCountries = ['paris', 'Berlin', 'rome', 'Siberia', 'Manama', 'Ankara'];

let asianCountries = ['Muscat', 'Riyadh','tokoya'];
let all = [...euroCountries,...asianCountries]

/* for(const item of asianCountries) {
    euroCountries.push(item);
} */
console.log(all);

//task 02
let euroCountries2 = ['paris', 'Berlin', 'rome', 'Siberia', 'Manama', 'Ankara'];
let asianCountries2 = ['Muscat', 'Riyadh'];
const saveeuroCountries = [...euroCountries2];
const saveasianCountries = [...asianCountries2];

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
//Clone the person object.
const person = {name: "John"};
const job = {role: "Teacher"};

//Merge these two objects into one object: "employee". Use the spread operator to do so. 
const clonePerson = {...person};

const employee = {
    ...person,
    ...job
},
console.log(employee);
// Then change the values of the properties in the employee object.
employee.name = ['Morad']
employee.job = ['programmer']
console.log(employee);




// task 06 
const isWhole =(num1,num2, num3,num4 )=>{
 let average = (num1+ num2 + num3 + num4 )/4
 return Number.isInteger(average);
}
console.log(isWhole(1, 2, 3, 4));//10/4 = 2.5
console.log(isWhole(9, 2, 2, 5)); //18/4 = 4.5
console.log(isWhole(10, 10, 10, 10)); // true


