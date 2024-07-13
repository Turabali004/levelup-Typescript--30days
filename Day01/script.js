                            //ACTIVITY1: Variable Declaration
//Task1 : Declare a variable using var, assign it a number, and log the value to the console.
var day = 1;
console.log(day);

//Task2 : Declare a variable using let, assign it a string, and log the value to the console.
let purpose = `Learn in public`
console.log(purpose);



                            //ACTIVITY_2: Constant Declaration
//Task3 : Declare a constant using const, assign it a boolean value, and log the value to the console.
const enrolled = true;
console.log(enrolled);


                            //ACTIVITY_3: Data Types
//Task4 : Create variable of different data typesc (number, string, boolean, object, array) and log each variable's type using the typeof operator.

// Number
let number = 5;
console.log(`Number ${number} | Type: ${typeof number}`);


// String
let name = 'Turab_Ali';
console.log(`Name ${name} | Type: ${typeof name}`);


//Booleans
let isStudent = true;
console.log(`Is Student ${isStudent} | Type: ${typeof isStudent}`);


//Objects
let skills = {
    mainLanguage: 'JavaScript',
    framework: 'React nodjs nextjs',
};
console.log(`Number ${skills} | Type: ${typeof skills}`);


//Array
let specilized = ['Frontend', 'Backend'];
console.log(`Specialized ${specilized} | Type: ${typeof specilized}`);



                            //ACTIVITY_4: Reassigning values
//Task5 : Declare a varibale using let, assign it an initial value, reassign a new value, and log both valus to the console.

let age = 22;

console.log( `Initial Age: ${age}`);
age = 23;

console.log( `Age after change: ${age}`);





                            //ACTIVITY_4: Reassigning values
//Task6 : Try reassigning a variable declared with const and observe the error.

const constantValue = 'This is a constant value';

//constantValue = 'New Value'; //This will cause an error because const variables cannot be reassigned.