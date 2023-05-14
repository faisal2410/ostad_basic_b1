// In JavaScript, there are several math operators that can be used to perform arithmetic operations on numbers.

// Here are some of the most commonly used math operators:

// + (addition): adds two numbers together or concatenates two strings.

// 👀👀
// const x = 10;
// const y = 5;
// const z = x + y; // 15

// 👀👀
const str1 = "Hello, ";
const str2 = "world!";
const str3 = str1 + str2; // "Hello, world!"
// - (subtraction): subtracts one number from another.

//  👀👀
// const x = 10;
// const y = 5;
// const z = x - y; // 5

// * (multiplication): multiplies two numbers together.

// 👀👀

// const x = 10;
// const y = 5;
// const z = x * y; // 50

// / (division): divides one number by another.

// 👀👀
// const x = 10;
// const y = 5;
// const z = x / y; // 2
// % (modulus): returns the remainder of a division operation.

//   👀👀
// const x = 10;
// const y = 3;
// const z = x % y; // 1

// ++(increment): increments a number by 1.


// let x = 10;
// x++; // 11

// --(decrement): decrements a number by 1.

// 👀👀
// let x = 10;
// x--; // 9
// It's worth noting that these operators can be combined and used in more complex expressions.


const x = 10;
const y = 5;
const z = (x + y) * 2; // 30

// In this example, the parentheses are used to ensure that the addition operation is performed before the multiplication operation.


function mathOperators(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);
}

mathOperators(10, 5);
// Output:
// Sum: 15
// Difference: 5
// Product: 50
// Quotient: 2
