/*
'''
❓ PROMPT
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.

Example(s)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
  a
  ab
  abc
  ac
  b
  bc
  c
 

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
function getAllSubsequences(word) {
def getAllSubsequences(word: str) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function getAllSubsequences(word) {
  const stack = [];
  const result = [];

  function permute(index) {
    console.log(stack, "|==========|", result, index);
    // stop condition
    if (index === word.length) {
      if (stack.length > 0) result.push(stack.join(""));
      return;
    }

    // without the character
    permute(index + 1);

    // with the character
    stack.push(word[index]); // add path breadcrumb

    permute(index + 1);
    stack.pop(); // remove path breadcrumb
  }

  permute(0);

  return result;
}

getAllSubsequences("abc");
