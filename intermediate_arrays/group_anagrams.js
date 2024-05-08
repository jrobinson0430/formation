/*
'''
❓ PROMPT
Given an array of strings, group all anagrams together in an array and return an array of these groups.

Example(s)
Input: ["bat", "cat", "tab", "car", "atb"]
Output: [["bat", "tab", "atb"], ["cat"], ["car"]]
 

🔎 EXPLORE
List your assumptions & discoveries:
 - utilize a hash map to store the groups of anagrams
 - this will require 1 pass through the input array
 - also, 1 pass through the hash to build the output array


Insightful & revealing test cases:
 - does it matter if there are no matching anagrams? no
 - can we assume valid input? only strings


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(N) N being the number of strings in the input array
Space: O(N) N being the number of strings in the output array
 
📆 PLAN
Outline of algorithm #: 
 - initialize an output array: []
 - initialize a hash map: {}
 - iterate over array
  - sort each string
  - use sorted string to check for key
    - if it exists, push original string into the values array
    - if not, set it: key: sortedString value: [string]

🛠️ IMPLEMENT
func groupAnagrams(input: [String]) => [[String]]:
def groupAnagrams(words: list[str]) -> list[list[str]]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function groupAnagrams(words) {
  const output = [];
  const dictionary = {};

  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (dictionary[sorted]) {
      dictionary[sorted].push(word);
    } else {
      dictionary[sorted] = [word];
    }
  }

  for (let array of Object.values(dictionary)) output.push(array);
  return output;
}

// Test Case 1: Basic usage
const words1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result1 = groupAnagrams(words1);
console.log(result1.length === 3); // Output: true
// Verify the contents of 1.
console.log(
  result1.some(
    (group) => group.sort().join() === ["eat", "tea", "ate"].sort().join()
  )
); // Output: true
console.log(
  result1.some((group) => group.sort().join() === ["tan", "nat"].sort().join())
); // Output: true
console.log(
  result1.some((group) => group.sort().join() === ["bat"].sort().join())
); // Output: true

// Test Case 2: Empty input
const words2 = [];
const result2 = groupAnagrams(words2);
console.log(result2.length === 0); // Output: true

// Test Case 3: No anagrams
const words3 = ["abc", "def", "ghi", "jkl"];
const result3 = groupAnagrams(words3);
console.log(result3.length === 4); // Output: true
// Verify the contents of 3.
console.log(result3.every((group) => group.length === 1)); // Output: true

// Test Case 4: All words are anagrams
const words4 = ["abc", "cab", "bca", "acb"];
const result4 = groupAnagrams(words4);
console.log(result4.length === 1); // Output: true
// Verify the contents of 4.
console.log(result4[0].sort().join() === words4.sort().join()); // Output: true

// Test Case 5: Multiple groups of anagrams with different lengths
const words5 = ["abc", "cab", "bca", "xyz", "zyx", "acb", "yxz", "def", "fed"];
const result5 = groupAnagrams(words5);
console.log(result5.length === 3); // Output: true
// Verify the contents of 5.
console.log(
  result5.some(
    (group) =>
      group.sort().join() === ["abc", "cab", "bca", "acb"].sort().join()
  )
); // Output: true
console.log(
  result5.some(
    (group) => group.sort().join() === ["xyz", "zyx", "yxz"].sort().join()
  )
); // Output: true
console.log(
  result5.some((group) => group.sort().join() === ["def", "fed"].sort().join())
); // Output: true
