/**
 * Problem 19: Merge Sorted Arrays
 * Write a function that merges two sorted arrays into a single sorted array.
 */

function mergeSortedArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
mergeSortedArrays(nums1, 3, nums2, 3);
console.log(nums1);