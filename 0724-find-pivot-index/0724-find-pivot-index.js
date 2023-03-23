/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = 0;
    //create a left sum variable that will keep track of the left side sum
    let leftSum = 0;
    //iterate through nums to find total sum
    nums.forEach(num => {return totalSum += num})
    //we will iterate through the given array
    //checking if totalSum - leftSum - currIdx = leftSum
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - leftSum - nums[i] === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    
    return -1;
};