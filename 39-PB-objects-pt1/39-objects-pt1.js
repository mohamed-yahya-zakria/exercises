'use strict';

//task 01
const person = {
    fName: "Ali",
    LName: "Morad",
    age: 45
};
for (const item in person) {
    console.log(`${item} ${person[item]}`);
}

// task 2
function getObjectValues(obj) {
      
     /*  for (const item in obj) {
      } */
      return(Object.values(obj));
    }

const saveMyDrinks ={
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}
console.log(getObjectValues(saveMyDrinks))
;

// task 03

const person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",

};
person2.myMethod = function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city} `;
}
console.log(person2.myMethod());

//Bonus 
//Bonus NR 1
function convertToArray(obj) {
    const result = [];
    //for (let i = 0; i < Object.length; i++ ){
    for (const item in obj) {
        let newArr = [];
        newArr.push(item); //A B C
       // console.log(obj[item]) value
        newArr.push(obj[item]);
        result.push(newArr);
    }
    return result;
}
const objectToArray = {
    A: 1,
    B: 2,
    C: 3
}
console.log(convertToArray(objectToArray));

//Bonus NR 2  question why dont print
const student ={
name: 'Mike',
class: '4A',
course: 'English'
}
function properties (obj) {
     let result = {}
    for(const item in obj){
       console.log(result[obj[item]]) ;
    }
    return result[obj[item]]
}
/* function properties (obj) {
    return Object.keys(obj);
} */
console.log(properties(student));

 //task 03
 // qestion  result[item] = first[item] how print the key
 const first = { fName: 'john', LastName: 'smith', age:15}
 //const last = {lName: 'smith'}
 const convertAsObject = (obj1)=>{
   // console.log(first);
   let result = {}
   for( const item in obj1){
       //the itrator item = key 
       // nameOFObject [key] => value
   // console.log('this is item',item);

     result[item] = obj1[item] // john = john
     console.log('item',item);
     console.log('result[item] =', result[item] );
     console.log(' first[item] =', first[item] );
   }
   return result;
}
 console.log(convertAsObject(first));

 // bonus 4
 let person2 = {
    name: "John", 
    job: "teacher"
  }
 function switchFunction (obj5){
     const result = {};
     for( const item in obj5){ 
        result[obj5[item]] = item 
        console.log(' item',item) // name / key
       console.log(obj5); // print all obj
       console.log([obj5[item]]); //value
       console.log(' result[obj5[item]] =',result[obj5[item]]); // name /key
     }
   return result;
 }
 console.log(switchFunction(person2));
// bouns NR 5

function x (obj){
    let result1 = [];
    for(const item in obj){
        result[item] += obj[item]
    }
return result ;
}
const myObj = { a: 1, b: 2, c: 3 };
console.log(x(myObj));



// bonus NR 5 i dont understand
const KeysValues = (obj6) => {
    const resultArray = new Array(2);
   // console.log('new Array(2)',new Array(2));
    resultArray[0] = Object.keys(obj6);
    resultArray[1] = Object.values(obj6);
    return resultArray;
}
console.log('bonus 5', KeysValues({
    a: 1,
    b: 2,
    c: 3
}));
 