/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // const words = [];
    // //split string into array
    // const array = s.split(' ')
    // for (i of array) { if (i.length > 0) words.push(i) }
    // //return the length of the last index
    // return words[words.length - 1].length
    
    const array = s.trim().split(' ')
    return array[array.length - 1].length
};