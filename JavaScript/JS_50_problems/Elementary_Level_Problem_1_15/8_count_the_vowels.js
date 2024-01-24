/**
 * Problem 8:  Count the Vewels
 * Write a function that counts the number oof vowels in a string (case-insensitive).
 */

function countVowels(str) {
    const vowelRegex = /[aeiou]/gi; // This regular expression matches all lowercase and uppercase vowels in a case-insensitive manner('i' flag), and it uses the 'g' flag to match ass occurences in the string, not just the first one.
    const vowels = str.match(vowelRegex);
    return vowels ? vowels.length : 0;
}

//* Alternative Solution:

// function countVowels(str) {
//     const vowels = "aeiouAEIOU"; // List of lowercase and uppercase vowels
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

console.log(countVowels("Hello, World!"));
