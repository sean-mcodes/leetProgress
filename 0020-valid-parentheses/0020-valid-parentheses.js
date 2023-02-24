/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create an array to collect brackets
    const openers = [];
    //iterate through string
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (curr === '(' || curr === '{' || curr == '[') {
            openers.push(curr)
        } else if (curr === ')' && openers.length !== 0 && openers[openers.length - 1] === '(') {
            openers.pop()
        } else if (curr === '}' && openers.length !== 0 && openers[openers.length - 1] === '{') {
            openers.pop()
        } else if (curr === ']' && openers.length !== 0 && openers[openers.length - 1] === '[') {
            openers.pop()
        } else {
            return false;
        }
         
    }
    return openers.length === 0
    
 };