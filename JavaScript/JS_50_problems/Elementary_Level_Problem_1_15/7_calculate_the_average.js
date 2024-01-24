/* 
* Write a function that calculate the average of an array of numbers
*/

function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// 
// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// }
console.log(calculateAverage([3, 6, 9]));
console.log(calculateAverage([1, 2, 3, 4, 5]));

