/**
 * Problem 20: Rotate Array 
 * Write a function that rotate an array to the right by k steps, where k is a non-negative
 * integer.
 */


function rotateArray(nums, k) {
    const n = nums.length;
    k %= n; // Handle cases where k is larger than array length

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the ramaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums, 3);
console.log(nums);