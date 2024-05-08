/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  /*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 - we dont care about the string until it reaches a length of 10
 - any input string less than 10 characters will not be considered and should return an empty array


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- using a 2 pointer approach with a dictionary iterate over input string:
    - left: 0
    - right: 9
    - stop condition right < string.length
    ** could stick to just 1 pointer variable and always add 9 to it **
- if 10 char string is already in map increment, otherwise set it to 1
- iterate over map, if DNA sequence occurs more than once, push into output array, otherwise do nothing
Time: O(N) N being the length of the string
Space: O(N + M) N representing the length of the 
 

📆 PLAN
Outline of algorithm #: 
- initialize a dictionary = {}
-initialize an output set = {}
- handle input strings with a length less than 10
    - return []
- interate over string with a for loop
    - stop condition is i < string.length - 10
    - populate dictionary
        - if string is already in dictionary, add it to the output set
        - otherwise, set the string as the key and the value to true

- return the set converted to an array.
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
  var findRepeatedDnaSequences = function (s) {
    let dictionary = {};
    let outputSet = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
      let sequence = s.slice(i, i + 10);
      if (dictionary[sequence]) {
        outputSet.add(sequence);
      } else {
        dictionary[sequence] = true;
      }
    }

    return Array.from(outputSet);
  };
}