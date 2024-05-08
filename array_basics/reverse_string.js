/*
'''
❓ PROMPT
Because strings are immutable, this problem takes more work than it does for an array. With an array, we can move individual values around and assign them into different locations. But with a string, we need to actually create an entirely new one.

Yes, in many modern languages this can be done with built in methods, but here we're working on basic coding patterns and coding fluency. We're going to mostly write this out.

Example(s)
reverseString("noitamroF") => "Formation"
 

🔎 EXPLORE
List your assumptions & discoveries:
* Should i convert the string into an array to iterate? no.
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function reverseString(s)
def reverseString(s):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const testData = "Formation";

function reverseString(s) {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) reversedString += s.at(i);

  return reversedString;
}

reverseString(testData);
