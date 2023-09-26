/**
 * Problem 16: Two Sum
 * Write a function that takes an array of numbers and target sum. Find two numbers
 * in the array that add up to the target sum and return their indices.
 */
//123456789
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
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