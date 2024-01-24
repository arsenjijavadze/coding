/*
* Problem 6:Find the Largest Number
* Write a function that finds the largest number in an array of numbers.
*/

function findLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(findLargestNumber([3, 8, 1, 9, 4]));