/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    //edge case
    if (m * n !== original.length) {
        return [];
    }
    //declare new matrix array 
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < m; i++) {
        let row = original.slice(i * n, (i + 1) * n)
        newArr.push(row)
    }
    ///return array
    return newArr
};