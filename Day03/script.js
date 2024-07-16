// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = 0;

if (num == 0) {
  console.log("The number is zero");
} else if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 16;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = -10,
  num2 = -5,
  num3 = -2;
if (num1 > num2 && num1 > num3) {
  console.log("The largest number is " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The largest number is " + num2);
} else {
  console.log("The largest number is " + num3);
}

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log
// the day name to the console.

let dayOfWeek = 8;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
    break;
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85; // You can change this score to test different grades
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(grade);

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 7; // You can change this number to test different values

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);




                                                // Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also 
// divisible by 400) and log the result to the console.

let year = 2024; 

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

let result1 = isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`;

console.log(result1);


