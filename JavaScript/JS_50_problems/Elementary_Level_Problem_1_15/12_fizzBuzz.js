/** 
 * Problem 12: FizzBuzz
 * Write a function that prints numbers from 1 to n. But for multiples of 3, print 
 * "Fizz" instead of the number, and for multiples of 5, print "Buzz" instead of 
 * number. For numbers which are multiples of both 3 and 5, pring "FizzBuzz".
 */




function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);