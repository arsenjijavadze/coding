/**
 * Problem 10: Remove Duplicates
 * Write a function that removes duplicate values from an array.
 */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

//* The Alternative solution:

// function removeDuplicates(arr) {
//     const uniqueArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));