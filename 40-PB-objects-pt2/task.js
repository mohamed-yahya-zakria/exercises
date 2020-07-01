const newArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const newObject = {};
// ITERATOR, i, INDEX, COUNTER 
for (let i = 0; i < newArray.length; i++) {
    newObject["weekDay" + i] = newArray[i];
}
// how to find the larger number of array
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