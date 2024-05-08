/*
'''
❓ PROMPT
Given two strings *x* and *y* we can create an interleaving by repeatedly taking the first character of either and appending the characters together to form a new string. Specifically, valid interleavings will have these properties:

1. len(interleaving) == len(x) + len(y)
2. *interleaving - x = y* and *interleaving - y = x* meaning that removing the characters in *x* from the interleaving will produce *y* and vice versa.
3. x and y both appear as subsequences in the interleaving. The order of characters in x and y are preserved in the interleaving.

Given *x*, *y*, and *s*, write a function that determines whether *s* is a valid interleaving of *x* and *y*.

For this exercise, solve this with backtracking. There are [solutions](https://leetcode.com/problems/interleaving-string/solution/) with more efficient complexities that employ dynamic programming or recursion with memorization but they aren't expected for this task. We'll get to those later.

Example(s)
These are some valid interleaving using the strings *ABC* and *BCD*:

isInterleaving("ABC", "BCD", "BABCCD") == True
Explanation:
 x:             AB C
 y:            B  C D
 interleaving: BABCCD

isInterleaving("ABC", "BCD", "ABCBCD") == True
Explanation:
 x:            ABC
 y:               BCD
 interleaving: ABCBCD

isInterleaving("ABC", "BCD", "BCDABC") == True
Explanation:
 x:               ABC
 y:            BCD
 interleaving: BCDABC

isInterleaving("ABC", "BCD", "BCABDC") == True
Explanation:
 x:              AB C
 y:            BC  D
 interleaving: BCABDC

isInterleaving("ABC", "BCD", "BABCDD") == False
Explanation:
BABCDD cannot be created from the any combination of the sequences ABC & BCD
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function isInterleaving(x, y, s) {
def is_interleaving(x: str, y: str, s: str) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/



function isInterleaving(s1, s2, s3, i1 = 0, i2 = 0) {
  if (s1.length + s2.length !== s3.length) return false;

  if (i1 + i2 === s3.length) {
    return true;
  }

  if (s1[i1] === s3[i1 + i2] && isInterleave(s1, s2, s3, i1 + 1, i2))
    return true;
  if (s2[i2] === s3[i1 + i2] && isInterleave(s1, s2, s3, i1, i2 + 1))
    return true;
  return false;
}

console.log(isInterleaving("XXXXX", "YYYYY", "shorter") === false);
console.log(isInterleaving("X", "Y", "longer") === false);
console.log(isInterleaving("X", "Y", "XY") === true);
console.log(isInterleaving("X", "Y", "YX") === true);
console.log(isInterleaving("X", "Y", "XX") === false);
console.log(isInterleaving("X", "Y", "YY") === false);
console.log(isInterleaving("ABC", "D", "ABCD") === true);
console.log(isInterleaving("ABC", "D", "ABDC") === true);
console.log(isInterleaving("ABC", "D", "ADBC") === true);
console.log(isInterleaving("ABC", "D", "DABC") === true);
console.log(isInterleaving("AABCC", "DBBCA", "AADBBCBCAC") === true);
console.log(isInterleaving("ABC", "BCD", "BABCCD") === true);
console.log(isInterleaving("ABC", "BCD", "ABCBCD") === true);
console.log(isInterleaving("ABC", "BCD", "BCDABC") === true);
console.log(isInterleaving("ABC", "BCD", "BCABDC") === true);
console.log(isInterleaving("ABC", "BCD", "BABCDD") === false);
console.log(isInterleaving("ABC", "BCD", "ABBCCD") === true);
console.log(isInterleaving("ABC", "BCD", "DCCBBA") === false);
console.log(isInterleaving("ABC", "BCD", "ABBDCC") === false);
console.log(isInterleaving("ABC", "BCD", "ACBBCD") === false);