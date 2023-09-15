//Problem 3: Factorial
//Write a function that calculate the factorial of a given number.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
