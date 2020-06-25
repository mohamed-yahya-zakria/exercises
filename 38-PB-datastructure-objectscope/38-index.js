'use strict';
const aboveObj = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    city: 'paris',
    jop: 'engineer',
    age: 41,
    myMethodName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is is a student in class ${this.class}`;
    }
}
console.log(aboveObj.myMethod());
//task 2

const seconObj = {
   // i used the property in student objet
  
  firstName: "Morad",
   lastName: "homs",
   //age: 41, 
    method: function () {
        return `${this.firstName } ${this.lastName} is a ${this.age} year old ${this.jop}  live in ${this.city}`;
    }
}
const myobj = seconObj.method;
const aboveObjMyMethod = myobj.bind(aboveObj);
console.log(seconObj.method()); // Morad homs is a undefined year old undefined  live in undefined

console.log(aboveObjMyMethod()); //
console.log(Object.keys(aboveObj).length);