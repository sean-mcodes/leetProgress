/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //instantiate last variable to the end of nums1
  let last = m + n - 1;
  //iterate while m && n > 0
  while (m > 0 && n > 0) {
    //fill in nums1 from the end
    //check to see if nums1[m] > nums2[n]
    if (nums1[m - 1] > nums2[n - 1]) {
      //adjust nums 1 depending on which value is greater and decrement m || n
      nums1[last] = nums1[m - 1]
      m--;
    } else {
      nums1[last] = nums2[n - 1]
      n--;
    }
    //decrement last always
    last--;
  }


  //check for remaining values in nums2
  //if they are there then append them to nums1
 while (n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
};