/*
'''

Q. Given a linked list, append an element with a target value to the list iteratively.

🔎 EXPLORE
What are some other insightful & revealing test cases?
Input: linked list and a target element.

Output: linked list with the target element added to the end.

In order to append an element to the end of a linked list you must first find the tail (end). Once you've that. create a new node with the target element as the value and point the currents tail to the new node you just created.

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: iteratively
- initialize a newNode variable with the target element as the value.
- traverse the linked list until you find the tail.
  - point the tails next pointer to the node you created.
- return the updated linked list

Time: O(N)
Space: O(N)

Algorithm 2: recursive
- base case: when you've reached the end of the linked list.

 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
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

// function append(head, target) { // iteratively
//   const newNode = new ListNode(target);
//   if (!head) return newNode;

//   let current = head
//   while(current.next) {
//     current = current.next;
//   }

//   current.next = newNode;
//   return head;
// }

// function append(head, target) { // uses helper
//   const newNode = new ListNode(target);
//   if (!head) return newNode;

//   function traverse(node) {
//     if (node.next) return traverse(node.next);
//     node.next = newNode;
//     return head;
//   }

//   return traverse(head);

// }

function append(head, target) {
  // recursion without a helper
  if (!head) return new ListNode(target);

  if (head.next) {
    append(head.next, target);
  } else {
    head.next = new ListNode(target);
  }

  return head;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(arrayify(append(null, 1))); // [1]
console.log(arrayify(append(LL1, 7))); // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))); // [0, 7]
