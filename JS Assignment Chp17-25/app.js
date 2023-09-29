// QUESTION 1

// let emptyMultiArray = [[]];

// QUESTION 2

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];

// QUESTION 3

// for(let i = 1; i <= 10; i++) {
//     document.write(i);
// }

// QUESTION 4

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the number for multiplication table: ', (num) => {
//   rl.question('Enter the length of the table: ', (length) => {
//     console.log(`Multiplication table for ${num} up to ${length} terms:`);

//     for(let i = 1; i <= length; i++) {
//       let result = num * i;
//       console.log(`${num} * ${i} = ${result}`);
//     }

//     rl.close();
//   });
// });

// QUESTION 5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// QUESTION 6

//* FOR FORWARD
console.log("Counting:");
for(let i = 1; i <= 15; i++) {
    console.log(i);
}
//* FOR REVERSE
console.log("Reverse counting:");
for(let i = 10; i >= 1; i--) {
    console.log(i);
}
//* FOR EVEN
console.log("Even:");
for(let i = 0; i <= 20; i += 2) {
    console.log(i);
}
//* FOR ODD  
console.log("Odd:");
for(let i = 1; i <= 19; i += 2) {
    console.log(i);
}

// QUESTION 7

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter an item to search: ");
// let isItemFound = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         isItemFound = true;
//         break;
//     }
// }

// if (isItemFound) {
//     alert(`Yes, ${userInput} is found in the list.`);
// } else {
//     alert(`${userInput} is not found in the list.`);
// }

// QUESTION 8

// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log(`The largest number in the array is: ${largest}`);

// QUESTION 9

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// document.write(`The smallest number in the array is: ${smallest}`);

// QUESTION 10 

// for(let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         Document.write(i);
//     }
// }


