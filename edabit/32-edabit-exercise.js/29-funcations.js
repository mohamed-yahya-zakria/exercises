// task one

/* Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0 */
/// the solution///
sum = 0;
function length(str) {
	if (str.length === 0){
		return 0;
	}
	else { 
		
		return length (str.substring(1) -1)
    }
}
console.log(length(" apple"))

// task two
/* Recursion: Reverse a String
Write a function that reverses a string. Make your function recursive.

Examples
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ "" */
/// the solution///
function reverse(str) {
	if (str === "olleh") {
		return ;
	}
	else {
		return reverse (str.reverse());
	}
}
reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""

// task three 
/* Recursion: Factorials
Write a function that calculates the factorial of a number recursively.

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1 */
/// the solution///
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));

// task four 
 // Recursion: Fibonacci Numbers
  //Fibonacci numbers are created in the following way:

/* F(0) = 0
F(1) = 1
...
F(n) = F(n-2) + F(n-1)
Write a function that calculates the nth Fibonacci number.

Examples
fib(0) ➞ 0

fib(1) ➞ 1

fib(2) ➞ 1

fib(8) ➞ 21 */

/// the solution///