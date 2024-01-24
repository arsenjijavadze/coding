/**
 * Problem 17: Find the Missing Number
 * You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n. Write
 * a function to find the missing number.
 */

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([6, 1, 3, 2, 5, 0]));
console.log(missingNumber([1, 2, 3]));