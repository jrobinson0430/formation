/*
Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1
*/

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
- any invalid input should return 0
  - null 
  - undefined

Input:
- linked list

Output:
- integer representing the number of nodes in the linked list

🧠 BRAINSTORM
What approaches could work?
- we must iterate over the entire linked list:
  - can be recursively done.

Algorithm 1: Iterative approach
- initialize a current variable: head;
- initialize a count variable: 0;
- catch invalid inputs:
  - if (!head) return 0 | count
- utilizing a while loop
  - stop: (current)
- each iteration
  - increment count variable by 1
  - reassign current
    - current = current.next
- return count;
Time: O(N) N being the number of nodes in the link list
Space: O(1)? constant time or is it o(N) because if the current variable?

algorithm 2: recursive approach
- stop condition:
  - if (!head) return 0
  - call function using (head.next)
    - return 1 + function(head.next)
 

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

// algo 1
function count(head) {
  let count = 0;
  if (!head) return count;

  let current = head;

  while (current) {
    count++;
    current = current.next;
  }
  return count;
}

// algo 2
function count(head) {
  // return !head ? 0 : 1 + count(head.next)
  if (!head) return 0;
  return 1 + count(head.next);
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(count(null)); // 0
console.log(count(LL1)); // 3
console.log(count(new ListNode())); // 1
  