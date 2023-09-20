/**
 * Problem 14: Find Prime Numbers
 * Write a function that finds all prime numbers up to a give number
 */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function findPrimes(n) {
    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(findPrimes(30));

//* alternative solution 1

// function sieveOfEratosthenes(n) {
//     const isPrime = new Array(n + 1).fill(true);
//     isPrime[0] = false;
//     isPrime[1] = false;

//     for (let p = 2; p * p <= n; p++) {
//         if (isPrime[p]) {
//             for (let i = p * p; i <= n; i += p) {
//                 isPrime[i] = false;
//             }
//         }
//     }

//     const primes = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime[i]) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// console.log(sieveOfEratosthenes(30));


//* alternative soluttion 2
// function isPrime(num) {
//     //corner case
//     if (num <= 1) {
//         return false;
//     }

//     //check from 2 to n-1
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function findPrimes(n) {
//     const primes = [];

//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// console.log(findPrimes(30));
