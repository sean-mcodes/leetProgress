/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //instantiate beginning of sub array
  let maxSub = nums[0];
  //instantiate currSum variable
  let currSum = 0;
  //iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    //if current sum is less than 0
    if (currSum < 0) {
      //reset current sum to 0
      currSum = 0
    }
    //add to current sum
    currSum += nums[i]
    //re assign max sub array to the max of the current sum and the max sub array
    maxSub = Math.max(maxSub, currSum)
  }
  //return max sub array
  return maxSub;
};