/**
 * Problem 13: Fibonacci Sequence 
 * Write a function that generates the Fibonacci sequence up to a given number of te
 */

function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }

    return sequence;
}

console.log(fibonacci(8));

//* Alternative Solution 1

// function fibonacci(n) {
//     let result = [0];
//     let numX = 0; // itial number
//     let numA = 0;
//     let numB = 1;
//     for (let i = 0; i < n - 1; i++) {
//         numX = numA + numB;
//         result.push(numX);
//         numB = numA;
//         numA = numX;
//     }
//     return result;
// }


// console.log(fibonacci(8));

//* Alternative solution 2: Recursive Function

// function fibonacciRecursive(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//     if (n === 2) return [0, 1];

//     const sequence = fibonacciRecursive(n - 1);
//     sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
//     return sequence;
// }

// console.log(fibonacciRecursive(8));

//* Alernative solution 3: Using a While Loop

// function fibonacciWhileLoop(n) {
//     const sequence = [0, 1];

//     while (sequence.length < n) {
//         const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//         sequence.push(next);
//     }

//     return sequence;
// }

// console.log(fibonacciWhileLoop(8));
