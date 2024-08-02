// Day 4: Loops

// Tasks/Activities:
// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
// let factorialNumber: number = 4;
// let returnValue:number = 1;

// for (let i = 0; i <= factorialNumber; i++) {
//     returnValue = returnValue * (factorialNumber - i)
     
// }
// console.log(returnValue)





// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

const num: number = 5;

for (let i = 1; i <= 10; i++) {
  // console.log(`${num} * ${i} = ${num * i}`)
}

// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let number: number = 10;

// while(number <= 10){
//     console.log(number);
//     number++;
// }

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.

// while(number >= 1){
//     console.log(number)
//     number--;
// }

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

// do {
//     console.log(number);
//     number++;
// } while(number < 5)

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let count:number = 1;
let countValue:number = 1

do{
    countValue = countValue * count
    count++;

}while(count <= 5)
// console.log(countValue)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:



for(let i = 0; i <= 5; i++ ){
  let line = (' ')
  for(let j = 1; j <= i; j++){
    line += '*'
  }
  // console.log(line);
  
}



// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i = 0; i <=10; i++){
  // if(i !== 5){
  //   console.log(i)
  // }
  if(i == 5){
    continue
  }else{
    // console.log(i)
  }

}



// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i = 1; i<=10; i++){
  if(i == 7){
    break
  }
  console.log(i)
}