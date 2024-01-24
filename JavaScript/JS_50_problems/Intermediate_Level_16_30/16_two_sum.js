/**
 * Problem 16: Two Sum
 * Write a function that takes an array of numbers and target sum. Find two numbers
 * in the array that add up to the target sum and return their indices.
 */
function twoSum(nums, target) {
    // Create a map to store the indices of the numbers in the array.
    const numMap = new Map();

    // Iterate over the array.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number. 
        const complement = target - nums[i];

        // Check if the complement is already in the map.
        if (numMap.has(complement)) {
            // Return the indices of the current number and the complement.
            return [numMap.get(complement), i];
        }

        // Add the current number and its index to the map.
        numMap.set(nums[i], i);
    }

    // If we reach this point, then no two numbers in the array add up to the target sum.
    return null;
}


//* Alternative solution 
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }

//console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 7, 11, 15], 16));
//console.log(twoSum([1, 2, 3, 4], 3));
//console.log(twoSum([1, 15, 2, 22, 9, 1, 3], 3));