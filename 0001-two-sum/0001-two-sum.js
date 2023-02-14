/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //numbers array, target num
 //return numbers array
var twoSum = function(nums, target) {
    //create indice array
    let indices = [];
    //iterate through input array
    for ( let i = 0; i < nums.length; i++) {
        for ( let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if(i === j) {
                    continue;
                } else {
                indices.push(i,j)
                return indices;
                }
            }
        }
    }
};