// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (num = 0 , num1 = 0, num2 = 0, num3 = 0 ) => {
    let numbers = (num + num1 + num2 + num3);
    return numbers / 3;
  };
  

/* const average = (num = 0 , num1 = 0, num2 = 0, num3 = 0 ) => {
  const average2 = () => num + num1 + num2 + num3 / 3;
  return average2;
}; */

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

