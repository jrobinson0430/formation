/*
'''
❓ PROMPT
Given an org chart of a company, employee A, and employee B: figure out if employee B is a direct report to employee A.

Employee B must report directly to employee A - this occurs if Employee A is the parent node of Employee B.

Employees in our tree are represented as integer values (eg: 1).

Return true if employee A manages employee B, false if not.

Example(s)
      1  <---- ceo
   2   3
      4  5
     6  
isDirectReport(ceo, 1, 2) == True
isDirectReport(ceo, 1, 4) == False
isDirectReport(ceo, 2, 1) == False
isDirectReport(ceo, 2, 3) == False
 

🔎 EXPLORE
List your assumptions & discoveries:
 The first step is to determine which traversal order we want to use. It appears a DFS is appropriate. and the order should be NLR (post-order) or NRL (pre-order). 

 Input:
  1. root node (CEO)
  2. manager (employee A)
  3. underling (employee B) 

Output: Boolean

Insightful & revealing test cases:


 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
* implement a post order DFS.
* 
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function isDirectReport(person, manager, employee) {
def isDirectReport(person: Node, manager: int, employee: int) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
// Binary trees are defined with this interface:
class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

const testData1 = new Node(1); // => 1

const testData2 = new Node(1, null, new Node(2, new Node(3))); // => 4
//       1
//     2   3

const testData3 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3))
); 
//         1
//       9   3
//     2       3

const testData4 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3, null, new Node(10)))
);
//        1
//      9    3
//    2         3
//                10

const testData5 = new Node(1, new Node(1), new Node(1)); // => 1
//      1
//    1   1

const testData6 = new Node(
  1,
  new Node(1),
  new Node(1, new Node(1), new Node(2))
); // => 3

//          1
//       1      1
//            1    2

function isDirectReport(person, manager, employee) {
  if (!person) return false;
  console.log(person.value);
  if (person.value === manager) {
    if (person.left?.value === employee || person.right?.value === employee) {
      return true;
    } else {
      // if we get here it means we found the manager and have checked both of their underlings and determined they do not match the employee in question and can thus end the search.
      return false;
    }
  }

  return (
    isDirectReport(person.left, manager, employee) ||
    isDirectReport(person.right, manager, employee)
  );
}

let ceo = new Node(
  1,
  new Node(2),
  new Node(3, new Node(4, new Node(6)), new Node(5))
);

// 5
let solo = new Node(5);

//   5
// 10
let partner = new Node(5, new Node(10));

// console.log(isDirectReport(null, 1, 2))
// console.log(isDirectReport(solo, 1, 2))
// console.log(isDirectReport(partner, 5, 5))
// console.log(isDirectReport(partner, 5, 10))
// console.log(isDirectReport(ceo, 1, 2) === true)
console.log(isDirectReport(ceo, 1, 4) === false);
// console.log(isDirectReport(ceo, 2, 1) === false)
// console.log(isDirectReport(ceo, 2, 3) === false)
// console.log(isDirectReport(ceo, 3, 1) === false)
// console.log(isDirectReport(ceo, 3, 5) === true)
// console.log(isDirectReport(ceo, 4, 5) === false)
// console.log(isDirectReport(ceo, 4, 6) === true)
// console.log(isDirectReport(ceo, 1, 1) === false)
// console.log(isDirectReport(ceo, 4, 4) === false)
