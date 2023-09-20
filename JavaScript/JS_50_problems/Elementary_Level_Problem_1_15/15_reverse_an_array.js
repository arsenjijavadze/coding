/**
 * Problem 15: Reverse an Array
 * Write a function that reverses the elements of an array without using th 'reverse()' method
 * 
 */

function reverseArray(arr) {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3]));