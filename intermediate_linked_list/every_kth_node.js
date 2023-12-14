/*
'''
❓ PROMPT
Given a linked list and a target k, return a linked list containing every kth element.

Example(s)
head = 1 -> 3 -> 6 -> 2 -> 8 -> 9
everyKthNode(head, 3) == "6 -> 9"
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT: 
- node: head of a linked list of x length.
  - Is there a minimum size to the linked list
  - how should we handle empty lists
  - how should we handle invalid input (ie string, obj, etc).
- k: integer representing the interval the output list should return
  - is k >= 1

OUTPUT: link list of every kth element in the input list.
- what happens if the length of the input list is less than k?
  - return an empty linked list

Insightful & revealing test cases:
- empty link list should return empty linked list
- if k > input list return empty linked list
- if k == 1 return original link list
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
traverse the link list in a traditional way by setting current variable to the head and using a while loop with a stop condition of !current or !current.next. use a counter to track the number of nodes you've traversed. compare to the k integer. when you reach k, add to the new linked list and reset counter to start again
Time: O(N) N being the number of nodes in the linked list
Space: O(N) N being the number of nodes in the output linked list
 

📆 PLAN
Outline of algorithm #:
- initialize a sentinel node
- initialize a new linked list with sentinel as the head
- initialize a counter = 0
- initialize a current variable = node
- create a while loop
  - stop: (node)
- compare the counter to the k integer
  - if equal to
    - add that node to new linked list
    - reset counter
  if not equal to
    - increment counter variable

  - point current to the current.next

- set the tails next pointer to null to break any old connections
return sentinel.next;

'''
*/
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function everyKthNode(node, target) {
  let sentinel = new Node(null, null);
  let kthList = sentinel;
  let counter = 1;
  let current = node;

  while (current) {
    if (counter === target) {
      kthList.next = new Node(current.val, null);
      kthList = kthList.next;
      counter = 1;
    } else {
      counter++;
    }
    current = current.next;
  }

  return sentinel.next;
}

function toString(head) {
  if (!head) return "<empty>";

  let parts = [];
  while (head) {
    parts.push(head.val);
    head = head.next;
  }

  return parts.join(" -> ");
}

// 1 -> 3 -> 6 -> 2 -> 8 -> 9
let head = new Node(
  1,
  new Node(3, new Node(6, new Node(2, new Node(8, new Node(9)))))
);
console.log(toString(everyKthNode(head, 3)) === "6 -> 9");
console.log(toString(everyKthNode(head, 1)) == "1 -> 3 -> 6 -> 2 -> 8 -> 9");
console.log(toString(everyKthNode(head, 5)), "8");
console.log(head);
console.log(toString(everyKthNode(head, 6)), "9");
console.log(head.next.next);
console.log(toString(everyKthNode(head, 7)) == "<empty>");

// 6
head = new Node(6);
console.log(toString(everyKthNode(head, 1)) == "6");
console.log(toString(everyKthNode(head, 20)) == "<empty>");

// 6 -> 12
head = new Node(6, new Node(12));
console.log(toString(everyKthNode(head, 1)) == "6 -> 12");
console.log(toString(everyKthNode(head, 2)) == "12");
console.log(toString(everyKthNode(null, 5)) == "<empty>");
