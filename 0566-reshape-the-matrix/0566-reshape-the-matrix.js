/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  //instantiate a rows and columns variable
  let row = mat.length;
  let col = mat[0].length;
  //check if reshape can be done
  // rows * cols !== r * c return: mat
  if ((row * col) !== (r * c)) return mat;
  //instantiate a new array to empty
  let array = []
  //create new matrix with given dimensions
  let matrix = new Array(r).fill(0).map(() => new Array(c).fill(0))
  //iterate using rows and columns to fill the new array
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      array.push(mat[i][j])
    }
  }
  // console.log(array)
  //iterate in reverse starting at the end of new matrix
  //fill new matrix by popping values from array
  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      matrix[i][j] = array.pop();
    }
  }
  //return the new matrix
  return matrix;
};
