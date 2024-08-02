// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

const checkNumber = (num: number): string => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// console.log(checkNumber(10));  // Output: Even
// • Task 2: Write a function to calculate the square of a number and return the result.

const task2 = (num: number): number => {
  return num * num;
};
// console.log(task2(5));  // Output: 25

// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(a, b) {
    const max = a > b ? a : b;
    // console.log(max);
  };
  
  // Example usage
  findMax(10, 20); // 20
  findMax(5, 3);   // 5
  
// • Task 4: Write a function expression to concatenate two strings and return the result.
const Task4 = (str1:string, str2:string):string => {
    let strJoin = str1.concat(str2)
    return strJoin
}

// console.log(Task4('This is my first', ' Javascript program. ') )




                                    // Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const Task5 = (num1:number,num2:number) => num1 + num2;
// console.log(Task5(2,4))


// ⚫ Task 6: Write an arrow function to check if a string contains a 
// specific character and return a boolean value.

const task6 = (val1:string, val2:string):boolean => {
    return val1.includes(val2) ? true : false
}   

// console.log(task6('This is learn coding' , 'p'))



                                // Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product.
//  Provide a default value for the second parameter.

const task7 = (a:number, b:number = 1) => a * b;

// Example usage
// console.log(multiply(5, 3)); // 15
// console.log(multiply(7));    // 7 (7 * default value of 1)

// ⚫ Task 8: Write a function that takes a person's name and age and returns 
// a greeting message. Provide a default value for the age.
const task8 = (name:string, age:number = 23) => {
    return `Hello, ${name}! You are ${age} years old.`;
}

// console.log(task8('John', 30))
                            // Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number,
// and calls the function that many times.
const callBackFunc = (a:string,b:string) => {
    return a.concat(b)
}

const task9 = (val1:number, val2:CallableFunction) => {
    return val2('react is a ', 'frontendjs library')
}



let valTaskReturn = task9(5, callBackFunc)
console.log(valTaskReturn)

// console.log(valTaskReturn)


// • Task 10: Write a higher-order function that takes two functions and a value,
//  applies the first function to the value, and then applies the second function
// to the result.


