/*
 * Problem 5: Check for Palindrome
 * Write a function that checking if a given
 * string is a palindrome (reads the same forwards and
 * backwards).
 */

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("apple"));
