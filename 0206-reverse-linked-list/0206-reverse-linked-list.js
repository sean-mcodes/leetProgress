/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} head
 * return {ListNode}
 */
var reverseList = function (head) {
  //instantiate previous variable to null
  let previous = null;
  //instantiate current node to head param
  let current = head;
  //iterate through list
  //while current !== null
  while (current !== null) {
    //instantiate nextNode to the current nodes next node
    let nextNode = current.next;
    //assign the current nodes next prop to the previous node
    current.next = previous;
    //assign previous node to current node
    previous = current;
    //assign current node to nextNode
    current = nextNode
  }

  //return previous
  return previous;
};