/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let word = ''
  //iterate through string in reverse
   for (let i = x.length - 1; i >= 0; i--) {
       // console.log(x[i])
       word += x[i]
   }
    if (x === word) {
        return true
    }
    return false;
};