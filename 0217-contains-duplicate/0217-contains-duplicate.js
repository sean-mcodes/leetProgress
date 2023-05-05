/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //create cache to store counts of characters
  const cache = {};
  //iterate through array param
  for (let i = 0; i < nums.length; i++) {
    //count each occurrence of each number
    if (cache[nums[i]] === undefined) {
      cache[nums[i]] = 1
    } else {
      return true;
    }
  }

  //iterate through cache
  // for (let key in cache) {
  //   if (cache[key] > 1) return true;
  // }

  return false;
};

