/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * param {TreeNode} root
 * return {number}
 */
var maxDepth = function (root) {
  //instantiate totalDepth
  let totalDepth = 0;
  //instantiate helper function that tracks a node: (root) and a depth: (0)
  const findDepth = (node, depth) => {
    //base case if no node: return
    if (!node) return;
    //base case if there is no left or right leaf node
    //totalDepth: Math.max()
    //return
    if (!node.left && !node.right) {
      totalDepth = Math.max(totalDepth, depth)
      return;
    }
    //recursive case
    //call helper on left side: helper(node.left, depth + 1)
    findDepth(node.left, depth + 1)
    //call helper on right: helper(node.right, depth + 1)
    findDepth(node.right, depth + 1)
  }
  //intital call to helper
  findDepth(root, 1);
  //return totalDepth
  return totalDepth;
};