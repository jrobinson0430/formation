/*
'''
Q. Reverse a given linked list.

Examples:
• Given a linked list: 
         13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 
         returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
         
current list: 10 
=> does not have a next pointer. we have found the input lists tail which will be the new lists head.

stack: [13, 1, 5, 3, 7]

- do i need to create a new variable?


• Given a linked list: 1 // returns 1

🔎 EXPLORE
What are some other insightful & revealing test cases?
Input: linked list

Output: reversed linked list



🧠 BRAINSTORM
What approaches could work?
Algorithm 1: iteratively
Time: O()
Space: O()

- initialize a stack variable to hold the linked list nodes as you remove them.
- iterate through the linked list, removing each node as you go.
- once you reach the tail you know you have the new lists head.
  - create a loop with a stop condition of stack.length
    - set the new heads next pointer to the last node you put into the stack. (utilizing pop method).

 

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

function reverse(head) {
  let stack = [];
  let current = head;

  while (current.next) {
    stack.push(current);
    const next = current.next;
    current.next = null;
    current = next;
  }

  let newHead = current;

  while (stack.length) {
    current.next = stack.pop();
    current = current.next;
  }
  return newHead;
}

// O(N) time
function reverse2(head) {
  // their solution..which is terribly confusing and hard to follow for me.
  let previous;
  let current = head;

  while (current) {
    [current.next, current, previous] = [previous, current.next, current];
  }

  return previous;
}

function reverseLLRecursive(head) {
  // base case for recursive call
  if (head === null || head.next === null) return head;

  // recursively calls function until we reach the base case (the tail)
  // stores the newHead in order to return it
  const newHead = reverseLLRecursive(head.next);

  // makes new connection
  head.next.next = head;

  // breaks the old connection
  head.next = null;

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
