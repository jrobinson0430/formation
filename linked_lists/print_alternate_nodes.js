/*
'''
Write a program to recursively alternate printing nodes.  You are not allowed to use loop constructs. You can assume that the head node should always be printed first. To simplify testing, return a string.


1. Instead of printing alternate nodes, accept a second parameter, *frequency*, that specifies how many nodes to skip.

1. Instead of always printing the head, accept a third parameter, *offset*, that specifies how many nodes to skip initially.
 

EXAMPLE(S)
n1 = 1 -> 2 -> 3
printAlternate(n1) == "1 -> 3"
 

FUNCTION SIGNATURE
function printAlternate(node) {
function printAlternate(node, frequency) {
n1 = 1 -> 2 -> 3
printAlternate(n1) == "1 -> 3". frequency = 1
1 node is skipped 
frequency = 2 .  "1" 


n1 = 1 -> 2 -> 3 -> 4
requency = 2 .  "1 -> 4"

function printAlternate(node, frequency, offset) {


def printAlternate(node: Node) -> str:
'''
*/

/*
follow the brainstorming steps:


1. Do you have any questions to ask to clarify the requirement ?








2. Edge cases and constraint
input can be empty/head can be null -> empty string 
recursion -> constraint -> how many nodes will there be ?  <1000
loop -> 1B 

limited to one computer 

3. Algorithm & data structure (bruteforce first, then talk about optimized solution)

1, base case when stop the recursion 
2. logic in each recursive call 
3. call itself 


base case: when node is null 
recursive logic: using a bool as a paremeter 
call 


base case: when node is null
recursive logic: using the frequency argument in our helper
- each interation of the helper we decrement the count
  - if count == 0, we push that nodes value into the array
    - reset count to frequency
  - otherwise we do nothing
-recurse to next node


4. test cases

*/

// Jacob

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// function printAlternate(head) {

//   function helper(node,isEven, str = []) {
//     if (!node) return str.join(' -> ');

//     if (isEven) {
//       str.push(node.val)
//     }

//     return helper(node.next, !isEven, str)
//   }

//   return helper(head, true)
// }

/*
n1 = 1 -> 2 -> 3
printAlternate(n1) == "1 -> 3". frequency = 1
1 node is skipped 
*/
function printAlternate(head, frequency, offset) {
  function helper(node, count, str = []) {
    // if (offset > 0) {
    //   if (node.next == null) return ''
    //   offset--
    //   return helper(node.next, count, str)
    // }

    if (!node) return str.join(" -> ");

    if (count == frequency) {
      str.push(node.val);
      count = 0;
    } else {
      count++;
    }

    return helper(node.next, count, str);
  }

  return helper(head, frequency - offset, []);
}

// Yeji
// function printAlternate (node) {
//   let nodeArr = []
//   function helper(node, isEven) {
//     if (!node) return
//     if (isEven) nodeArr.push(node.val)
//     return helper(node.next, !isEven)
//   }
//   helper(node,true)
//   return nodeArr.join('->')
// }

function printAlternate(node, freq) {
  let nodeArr = [];
  function helper(node, counter) {
    if (!node) return;
    if (counter === freq) nodeArr.push(node.val);
    if (counter === 0) {
      return helper(node.next, freq);
    } else {
      return helper(node.next, (counter -= 1));
    }
  }
  helper(node, freq);
  return nodeArr.join(" -> ");
}

const test1 = new Node(
  13,
  new Node(1, new Node(5, new Node(3, new Node(7, new Node(10)))))
); // 13 -> 5 -> 7

const test2 = null; // ''

const test3 = new Node(null); // ''

const test4 = new Node(15); // 15

const test5 = new Node(
  12,
  new Node(11, new Node(5, new Node(3, new Node(6, new Node(2)))))
); // 12 -> 5

console.log(printAlternate(test1, 1)); // 13->5->7-
console.log(printAlternate(test1, 4)); //13->10
console.log(printAlternate(test1, 5)); //13
console.log(printAlternate(test2, 5)); // ''
console.log(printAlternate(test3, 3)); // ''
console.log(printAlternate(test4, 3)); // 15
console.log(printAlternate(test5, 2)); // 12 -> 3
