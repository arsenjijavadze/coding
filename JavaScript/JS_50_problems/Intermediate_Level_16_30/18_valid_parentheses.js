/**
 * Problem 18: Valid Parentheses
 * Write a function that determines if a given string containing only '(', ')', '{','}'
 * '[' and ']' characters is valid. The string is valid if all brackets are closed in 
 * the correct order.
 * @param {string} s The string to check.
 * @returns {boolean} True if the string contains a valid set of parentheses, 
 * false othewise.
 */

function isValidParentheses(s) {
    // Create a stack to keep track of the opening parentheses.
    const stack = [];

    // Create a map of opening parentheses to closing parentheses.
    const brackets = { '(': ')', '{': '}', '[': ']' };

    // Itarate over the string 
    for (const char of s) {
        // If the current character is an opening parenthesis, push it onto the stack.
        if (brackets[char]) {
            stack.push(char);
        }

        // If the current character is a closing paranthesis, check if the top of the stack
        // is the matching opening parenthesis.
        else {
            // Pop the opening parenthesis off the stack.
            const lastChar = stack.pop();

            // If the current character is not the matching opening parenthesis, the 
            // parentheses are not valid.
            if (char !== brackets[lastChar]) {
                return false;
            }
        }
    }
    // If the stack is not empty after iterating over the string, the parentheses are 
    // not valid.
    return stack.length === 0;
}

console.log(isValidParentheses('{[()]}'));