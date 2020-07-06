'use strict';
//task 01
class Peraon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.myMethod = function () {
            return `${this.name} is ${this.age} years old`
        }

    }
}

const DataOfPerson = new Peraon('John', 19);
console.log(DataOfPerson.myMethod());

//task 02
class Cylinder {
    constructor(myHeigh, ridus) {
        this.myHeigh = myHeigh;
        this.ridus = ridus;
        /*    this.volumeOfCylinder = function () {
               return Math.PI * this.ridus **2 * this.myHeigh 
           } */
    }
    volumeOfCylinder = function () {


        return Math.PI * this.ridus ** 2 * this.myHeigh;
    }
}
const volumeCylinder = new Cylinder(1, 2);

console.log(volumeCylinder.volumeOfCylinder());

//task 03 

class Tv {
    constructor(barnd) {
        this.barnd = barnd
        this.channel = 1
        this.volume = 50
    }
    volumeGetHigh = () => {
        if (this.volume >= 100) {
            console.log(`${this.volume} you cann't git up this is a high level `);
        } else {
            this.volume += 20
            console.log(` volume get up ${this.volume} `)
        }
    }
    volumeGetdown = () => {
        if (this.volume <= 0) {
            console.log(`${this.volume} you cann't get dwon this is a lower level `);
        } else {
            this.volume -= 20
            console.log(` volume get down ${this.volume} `);;
        }
    }
    randomChannel = () => {
        return this.channel = Math.floor(Math.random() * 50);
    }

    resetTv = () => {
        this.volume = 50;
        this.channel = 1;
    }
    getTvStatus = () => {
        return `${this.barnd} on channel ${this.channel} of volume ${this.volume} `
    }
}
const myTv = new Tv('sony');
// why does't work .why result is [Function: volumeGetHigh]
//[Function: randomChannel]

myTv.volumeGetHigh
myTv.volumeGetHigh

console.log(myTv.volumeGetHigh);
console.log(myTv.randomChannel);
console.log(myTv.resetTv);
console.log(myTv.volumeGetdown);
