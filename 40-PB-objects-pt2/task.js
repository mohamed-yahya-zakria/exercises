const newArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const newObject = {};
// ITERATOR, i, INDEX, COUNTER 
for (let i = 0; i < newArray.length; i++) {
    newObject["weekDay" + i] = newArray[i];
}