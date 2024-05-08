/*
'''
In this problem, we will be taking in a number and creating a linked list out of it, where each node has a value of a single digit in the number. The output should read in the same order as the input number.
 
EXAMPLE(S)
createLL(123)
Output: 1 -> 2 -> 3  
 
FUNCTION SIGNATURE
function createLL(number: Int) -> Node:
'''
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// my solution: converting to string
function createLL(number) {
  let strNum = number.toString();
  let head = new Node(+strNum.at(0));
  let currNode = head;

  for (let i = 1; i < strNum.length; i++) {
    const node = new Node(+strNum[i]);

    currNode.next = node;
    currNode = currNode.next;
  }

  return head;
}

// their solution
function createLL2(number) {
  if (number <= 0) return new Node(0);

  let currNum = number;
  let prevNode = null;
  let currNode = null;

  while (currNum > 0) {
    let nodeValue = currNum % 10; // 3 | 2 | 1

    currNode = new Node(nodeValue); // 3 | 2 | 1
    currNode.next = prevNode; // null | 1 -> 2 -> 3
    prevNode = currNode; // 1 -> 2 -> 3

    currNum = Math.floor(currNum / 10);
  }

  return currNode;
}

console.log(createLL(123));
