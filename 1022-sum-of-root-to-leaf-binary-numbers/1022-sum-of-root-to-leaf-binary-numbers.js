/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumRootToLeaf = function (root) {
  //instantiest a total sum variable: 0
  let totalSum = 0;
  //define a helper function to track the node, build
  const helper = (node, build) => {
    //base case if there is no node return:
    if (!node) return;
    //add to node value to current build
    build += node.val.toString()
    //base case if there is no left value and right value //return: total += parseInt(build, 2)
    if (!node.left && !node.right) {
      totalSum += parseInt(build, 2);
      return totalSum;
    }
    //recursive case
    //call helper funciton on left side: helper(node.left, build)
    helper(node.left, build)
    //call helper on right side: helper(node.right, built)
    helper(node.right, build)
  };

  //intital call to helper
  helper(root, '');

  //return total sum
  return totalSum;
};


/**
                    0
                       \
                         1
                           \
                             1

*/