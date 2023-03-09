/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    let i = 0;

    //when there is a character and when each character passes a test i will increment
    while (strs[0][i] && strs.every(s => strs[0][i] === s[i])) {
     i++;   
    }
    
    return strs[0].substring(0, i)
};