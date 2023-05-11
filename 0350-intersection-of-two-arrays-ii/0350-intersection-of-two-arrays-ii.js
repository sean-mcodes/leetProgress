/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let results = [];
  //create hash map
  nums1.forEach((num) => {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  })
  //iterate through second nums array to check hash values
  nums2.forEach((num) => {
    if (map[num] > 0) {
      results.push(num);
      map[num]--;
    }
  })

  // console.log(map);
  return results;
};


/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/