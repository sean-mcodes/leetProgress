/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let year = 0;
   //create object with roman keys and values
    var romans = {
                    I:1,
                    V:5,
                    X: 10, 
                    L:50, 
                    C: 100, 
                    D: 500, 
                    M:1000
                   }
    //iterate through string
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        if (romans[current] < romans[next]) {
            let diff = romans[next] - romans[current]
            year += diff;
            i += 1;
        } else {
            year += romans[current];
        }
    }
    return year;
};