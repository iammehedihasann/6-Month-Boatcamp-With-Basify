//Arithmetic Opearator
let x = 10;
let y = 5;

console.log(x + y); // Addition: 15
console.log(x - y); // Subtraction: 5
console.log(x * y); // Multiplication: 50
console.log(x / y); // Division: 2
console.log(x % y); // Modulus (remainder): 0

// Increment and Decrement
x++;
console.log(x); // Increment: 11
y--;
console.log(y); // Decrement: 4


//################  Assignment Operators #############################
let a = 20;
console.log(a); // 20

a += 10; // a = a + 10
console.log(a); // 30

a -= 5; // a = a - 5
console.log(a); // 25

a *= 2; // a = a * 2
console.log(a); // 50

a /= 5; // a = a / 5
console.log(a); // 10

a %= 3; // a = a % 3
console.log(a); // 1


//######################  Comparison Operators ###########################


let b = 10;
let c = '10';

console.log(b == c);   // Equal to: true 
console.log(b === c);  // Strict equal to: false 

console.log(b != c);   // Not equal to: false 
console.log(b !== c);  // Strict not equal to: true

console.log(b > 5);    // Greater than: true
console.log(b < 20);   // Less than: true
console.log(b >= 10);  // Greater than or equal to: true
console.log(b <= 5);   // Less than or equal to: false

//##################### Logical Operators ########################

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);  // AND: false 
console.log(isTrue || isFalse);  // OR: true
console.log(!isTrue);            // NOT: false 

let num = 20;
console.log((num > 10) && (num < 30)); // true 
console.log((num < 10) || (num > 15)); // true 

//####################### let m = 10;
let n = 5;
let m =10
// Arithmetic
let sum = m + n; // 15
let difference = m - n; // 5
console.log(sum, difference);

// Assignment with Arithmetic
sum += 5;  // sum = sum + 5, now sum is 20
console.log(sum);

// Comparison
let isEqual = (sum === 20); // true
let isNotEqual = (difference !== 10); // true
console.log(isEqual, isNotEqual);

// Logical
let isPositive = (sum > 0) && (difference > 0); // true (both are positive)
console.log(isPositive);
