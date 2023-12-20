/*

Q. Reverse a given linked list.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
• Given a linked list: 1 // returns 1

*/
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayify(head) {
  let ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.value);
    ptr = ptr.next;
  }
  return array;
}

function reverse(head) {
  /*
INPUT: linked list
OUTPUT: the input linked list reversed

- This is a great use case for a stack implementation.
  - iterate over linked list adding each node to the stack
  - once you reach the last node in the linked list, it will become the new head
  - use a while loop to iterate over stack, for each iteration
    - pop a node and add it to the linked list by assigning pointers
      - current.next = popped node
    - reassign the current node to current.next

  Time: O(N) N being the number of nodes in the linked list
  Space: O(N) N being the number of nodes in the stack array
*/
  let stack = [];

  while (head.next) {
    // head.next bc we want to keep the tail intact in this ll to set as new head
    stack.push(head);
    const next = head.next; // this stores the rest of the linked list
    head.next = null; // this removes the pointer to prevent a cycle
    head = next; // head now becomes the next that is the rest of the list
  }

  let newHead = head;
  while (stack.length) {
    head.next = stack.pop();
    head = head.next;
  }

  return newHead;
}

// Test Cases
var LL1 = new ListNode(
  13,
  new ListNode(
    1,
    new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))
  )
);
console.log(arrayify(reverse(new ListNode(1)))); // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))); // [2, 1]
console.log(arrayify(reverse(LL1))); // [10, 7, 3, 5, 1, 13]
