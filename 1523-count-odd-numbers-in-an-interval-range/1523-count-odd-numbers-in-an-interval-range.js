/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    //create count array
    let oddsCount = 0 ;
    //iterate through input array
    for (let i = low; i <= high; i++) {
        // console.log(i)
        if (i % 2 === 1) {
           oddsCount++
        }
    }
    //return count array
     return oddsCount;
};