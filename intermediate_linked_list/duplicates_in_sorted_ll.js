// Given two sorted linked lists of integers, return a list that includes the values in both.
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(a, b) {
  /*
- Since the list is sorted, we can utilize that within the logic of the function.
EXPLORE: 
INPUT:
a: sorted link list
b: sorted link list

OUTPUT:
array representing the values that are in both linked lists.


do we return an empty array if no values are represented in both lists?
is the result array only unique integers? for example, ll a has 2 10s and b has 2 10s, would we need to add 2 10s to the result array or just 1?
will both ll inputs have a length of 1 or greater?


- we will need to traverse both linked lists at the same time. The trick is to rely on the sorted aspect. Since it is sorted. we can make a comparison for each lists current node.

- while loop (node1 && node2)
    - once we traverse all the way through 1 list, we know there will no longer be an opportunity for shared values
- if node1.value === node2.value
    - add to result set
    - move both node1 and node2 to their next pointers
- if node1.value < node2.value
    - move node1 to its next pointer
- if node1.value > node2.value
    - move node2 to its next pointer

time complexity: O(N) N representing the number of nodes we must traverse before reaching the end of 1 of the lists
space complexity: o(x) x representing the length of the result array
    - the current nodes for each list are constant space, they will only ever hold 1 node

*/

  let output = new Set();
  if (!a || !b) return [];

  let node1 = a;
  let node2 = b;

  while (node1 && node2) {
    if (node1.value === node2.value) {
      output.add(node1.value);
      // move both nodes to their next pointer
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1.value < node2.value) {
      // move the node1 pointer
      node1 = node1.next;
    } else {
      // if node1 is not equal to or less than node2
      // move the node2 pointer
      node2 = node2.next;
    }
  }

  // not sure on syntax
  return Array.from(output);
}
