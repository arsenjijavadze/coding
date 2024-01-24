/**
 * Problem 11: Title Case
 * 
 */

function titleCase(sentence) {
    const words = sentence.split(' ');
    const titleCasesWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return titleCasesWords.join(' ');
}

console.log(titleCase("the quick brown fox"));