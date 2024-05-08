/*
'''
❓ PROMPT
Convert a sorted array into a balanced binary search tree. Return the root of the created tree.

Example(s)
Input:  [1, 2, 3, 4, 5] =>

Output:
        3
   2        5
1        4

or
        3
    2       4
1              5

or
    3
1       5
   2  4

or
   3
1     4
   2     5
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT:
sorted array of integers
- in order to be converted into a balanced BST, it must have an odd length

OUTPUT:


Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sortedArrayToBST(nums) {
def sortedArrayToBST(nums: list[int]) -> TreeNode:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// [1,2,3,4,5]
// root: 3
// [1,2,root,3,4]
function sortedArrayToBST(nums) {
  const root = new TreeNode(Math.floor(nums / 2));

  function helper(node, index) {}

  helper(root);
  return root;
}

// console.log(isCorrect(sortedArrayToBST([1, 2, 3, 4, 5])))
// console.log(isCorrect(sortedArrayToBST([-10, -3, 0, 5, 9])))
// console.log(isCorrect(sortedArrayToBST([])))
// console.log(isCorrect(sortedArrayToBST([1])))
// console.log(isCorrect(sortedArrayToBST([1,2])))
// console.log(isCorrect(sortedArrayToBST([1,2,3,4,5])))
// console.log(isCorrect(sortedArrayToBST([1,2,10,20,35,50,420,609])))
// console.log(isCorrect(sortedArrayToBST([-100,-50,-25,-20,-10,-1,0,1,2,10,20])))

/*******************************************/
/** This code is intentionally obfuscated **/
/*******************************************/
function isCorrect(r) {
  return b(r) && v(r);
}
function gH(r) {
  if (r == null) return 0;
  let lH = gH(r.left);
  if (lH == -1) return -1;
  let rH = gH(r.right);
  if (rH == -1) return -1;
  if (Math.abs(lH - rH) > 1) return -1;
  return Math.max(lH, rH) + 1;
}
function b(r) {
  return gH(r) != -1;
}
function v(r) {
  return v(r, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
function v(r, m, M) {
  if (r == null) return true;
  if (r.val >= M || r.val <= m) return false;
  return v(r.left, m, r.val) && v(r.right, r.val, M);
}
