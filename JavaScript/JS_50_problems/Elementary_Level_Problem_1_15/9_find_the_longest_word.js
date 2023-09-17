/**
 * Problem 9: Find th Longest Word
 * Write a function that finds the longest word in a sentence.
 */

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox"));