/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //create a current total variable to track each solution index
    let currTotal = 0;
    //create an array to hold solutions
    let solutions = [];
    //iterate through array
    for (let i = 0; i < nums.length; i++) {
      //add to total and push the value into the solutions array
      currTotal += nums[i];
      solutions.push(currTotal);  
    }    
    //return array of numbers
    return solutions;
};