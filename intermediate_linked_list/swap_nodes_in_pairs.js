/*

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

 1 -> 2 -> 3 -> 4
 2 -> 1 -> 4 -> 3
 */


var swapPairs = function(head) {
    if (!head) return head

    let output = new ListNode();
    output.next = head;

    let current = output;

    while(current.next && current.next.next) { // current: sentinel -> 1 -> 2 -> 3 -> 4
    const node1 = current.next; // 1 -> 2 -> 3 -> 4 
    const node2 = current.next.next; // 2 -> 3 -> 4
    
    current.next = node2 // 2 -> 3 -> 4

    node1.next = node2.next; // 1 -> 3 -> 4
    node2.next = node1; // 2 -> 1 -> 3 -> 4
    current = current.next.next

    }
    return output.next
};