// 1. Logging numbers from 1 to 10:

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }



// 2. Repeating a task until a condition is met:


let isDone = false;
while (!isDone) {
    // do something
    if (conditionIsMet) {
        isDone = true;
    }
}


// 3. Generating a random number between 1 and 10:

// let randomNumber;
// while (!randomNumber || randomNumber < 1 || randomNumber > 10) {
//     randomNumber = Math.floor(Math.random() * 10) + 1;
// }
// console.log(randomNumber);

// 4.Checking if a string contains a certain character:

// let inputString = "hello world";
// let i = 0;
// let containsLetter = false;

// while (i < inputString.length) {
//     if (inputString[i] === "o") {
//         containsLetter = true;
//         break;
//     }
//     i++;
// }

// console.log(containsLetter); // true


// 5. Summing up numbers in an array:

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }

// console.log(sum); // 15