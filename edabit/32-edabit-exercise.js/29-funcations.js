'use strict';
// task one

/*  Write a function that returns the length of a string. Make your function recursive. 

length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0  */

// task one solution

//sum = 0;
function length(str) {
	if (str.length === "") {
		return 0;
	} else {
		return length(str.substring(1) + 1)
	}
}
console.log(length("apple"))
// task two
/* Write a function that reverses a string. Make your function recursive.

Examples
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ "" */
// soulation task two

function reverse(str) {
	if (str === "") {
		return "";
	} else {
		return reverse(str.substr(1)) + str.charAt(0);
	}
}
reverse("hello") //➞ "olleh"

reverse("world") // ➞ "dlrow"

reverse("a") //➞ "a"

reverse("") // ➞ ""

// task three 

/* Write a function that calculates the factorial of a number recursively.

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1 */
// task three solution
function factorial(x) {

	if (x === 0) {
		return 1;
	}
	return x * factorial(x - 1);

}
console.log(factorial(5));

//other way to solution task tree
let sum2 = 1;

function factorial2(number) {
	if (number === 1) { //base case
		return sum2;
	} else {
		console.log('number', number);
		sum2 *= number;
		console.log('sum2', sum2);
		return factorial2(number - 1)
	}
}

console.log(factorial2(5));
//task four
/* Fibonacci numbers are created in the following way:

F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
Write a function that calculates the nth Fibonacci number.

Examples
fib(0) ➞ 0

fib(1) ➞ 1

fib(2) ➞ 1

fib(8) ➞ 21 */
// task four solution
// Fibonacci numbers 0,1,1,2,3,5,8,13,21
function fib(n) {
	if (n <= 1) {
		return n;
	} else {
		return fib(n - 1) + fib(n - 2); // -1 + 2 2=1
	}
}
console.log(fib(2));