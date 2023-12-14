/*
'''
Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

🔎 EXPLORE
What are some other insightful & revealing test cases?
- how do we handle an empty input?
INPUT: linked list
OUTPUT: integer representing the number of elements in the unsorted linked list

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: iteratively
- handle an empty input by returning 0
- Initialize a counter variable
- traverse through the linked list using a while loop
  - stop condition being if there is a next node or not.
  - each iteration, increment the counter
- return the count variable
Time: O(N)
Space: O(N)

Algorithm 2: recursively
- base case: if there is no node, return 0;
- otherwise, make the recursive call to the next node.
- return 1
- return the function call (think magic function)
 

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

function count_iteratively(head) { // iteratively
  let count = 0;

  if (!head) return count;

  while(head) {
    count++;
    head = head.next;
  }

  return count;
}

function count(head) {
  return head ? (1 + count(head.next)) : 0
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// console.log(count(null)) // 0
console.log(count(LL1)); // 3
// console.log(count(new ListNode())) // 1
