                // Activity 1: Arthmetic Operations
// Task1: add two number

const add = (a, b) => {
    return a +b;
}
console.log(add(2, 3)); // Output: 5


// Task1: subtract two number

const subtract = (a, b) => {
    return a - b;
}
console.log(subtract(2, 3)); // Output: 5


// Task1: multiply two number

const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3)); // Output: 5


// Task1: divide two number

const divide = (a, b) => {
    return a / b;
}
console.log(divide(2, 3)); // Output: 5


// Task1: find the remainder of two number is divided by another and log the result to the console.

const remainder = (a, b) => {
    return a % b;
}
console.log(remainder(2, 3)); // Output: 5






                    // Activity 2: Assignment Operators
// Task6: use the += operator to add a number to a variable

let variable1 = 10;
variable1 += 5;
console.log(variable1); // Output: 15



//Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let variable2 = 10;
variable2 -= 5;
console.log(variable2); // Output: 5




                                                // Activity 3: Comparison Operators
//Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let number1 = 10;
let number2 = 5;

console.log(number1 > number2); // Output: true
console.log(number1 < number2); // Output: false


//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

console.log(number1 >= number2); // Output: true
console.log(number1 <= number2); // Output: false

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.

console.log(number1 == number2); // Output: false



                                    // Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let condition1 = 11;
let condition2 = 11;  
console.log(condition1 <= 10 && condition2 >=1 )

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(condition1 <= 10 || condition2 >= 0)

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(condition1 !== condition2)




                                                    // Activity 5: Ternary Operator
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let numberCheck1 = -5;


numberCheck1 > 0 ? console.log('Number is positive') : console.log('Number is negative')