/*
'''
❓ PROMPT
Given a list of words *L* and a maximum password length *maxLength*, generate all valid human-friendly passwords using *L* that are at most *maxLength* long with the following rules. This was inspired by https://xkcd.com/936/

We can generate a human-friendly password by concatenating several words from a list of words (e.g. *correct horse battery staple*). Define a human-friendly password to be a string made up of words such that:

1. The password is comprised of only words from the list
2. Each word is separated by a space between them
3. Each word is used at most once
4. The password can be at most *maxLength* long when including spaces.

Example(s)
These are valid human-friendly passwords generated from the list:
[apple, bat, cheese, dog]
- apple bat cheese dog
- apple cheese bat
- dog apple
- cheese bat dog

However, there's a maxLength value that can be passed in that limits the possible combinations:
generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10) ==
[
  "apple",
  "dog",
  "zebra",
  "apple dog",
  "dog apple",
  "dog zebra",
  "zebra dog"
]
"zebra apple" and "apple zebra" are skipped because they're 11 chars.
 

🔎 EXPLORE
List your assumptions & discoveries:
- start by creating an exhaustive search of all possible combinations

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function generateAllHumanFriendlyPasswords(words, maxLength) {

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
Choosing  
1. We generally iterate over decisions. What are we iterating over here? What are the choices  for each  decision?  Do  we  need  a  for  loop?
  - we are iterating over words in the array to find possible password combinations. the order matters here so duplicates wont be a problem

Exploring
3. How can we represent that choice? How Should we modify the parameters and store our previous choices (avoiding arms-length recursion). Do we need to use a wrapper due to extra parameters?
  - the wrapper will have the global result variable: []
  - the helper will have:
    - iterator: to keep track of where we are in the array
    - current: to track the current word combinations: []
      - an array will allow us to add spaces before pushing to the global variable
    - length: integer representing the total length of string (including spaces).

4. How should we restrict our choices to be valid?
  - we will store all password combinations that are at least 1 word and does not exceed the maxLength constraint

5. How should we use the return value of the recursive calls? Are we looking for all solutions or just one?
  - we do not need the return value of the recursive call.
  - we are looking for multiple solutions

Un-choosing
6. How do we un-modify the parameters from step 3? Do we need to explicitly un-modify, or are they copied? Are they un-modified at the same level as they were modified?
  - we will need to explicitly un-modify the decision because we are using an array.
    - push -> make recursive call -> pop to continue down another path

Base  Case
7. What should we do in the base case when we're out of decisions (usually return true)?
  - if the length is greater than 0 and less than maxLength
    - add current to global result variable
    - if length is greater than maxLength, return to stop path search

8. Is there a case for when there aren't any valid choices left or a 'bad' state is reached (usually return false)?
  - if maxLength is less than than the shortest word in the input array we know there will be no possible password combinations.
    - this will return an empty array.

9. Are the base cases ordered properly? Are we avoiding arms-length recursion?
  - we will avoid arms-length recursion

  *** Short-circuiting the base case, also known as arm's-length recursion, consists of checking the base case before making a recursive call – i.e., checking if the next call will be the base case, instead of calling and then checking for the base case. ***
*/

// function generateAllHumanFriendlyPasswords(words, maxLength) {
//   const result = [];

//   function backtrack(i, totalLength, password = []) {

//     if (i == words.length) {
//       result.push([...password])
//       return
//     }
//     const currentWord = words[i]
//     password.push(currentWord);

//     backtrack(i + 1, totalLength + currentWord.length + 1, password)
//     password.pop()
//     backtrack(i + 1, totalLength, password)

//   }

//   backtrack(0, 0)
//   console.log(result)
//   return result
// }

/*

*/

function generateAllHumanFriendlyPasswords(words, maxLength) {
  const result = [];
  const usedWordSet = new Set();

  function backtrack(totalLength, password = []) {
    if (totalLength > maxLength) return;

    if (totalLength > 0 && totalLength <= maxLength) {
      result.push([...password].join(" "));
    }

    for (let word of words) {
      if (!usedWordSet.has(word)) {
        // if it doesnt have it
        password.push([word]);
        usedWordSet.add(word);
        const charsAdded = totalLength === 0 ? word.length : word.length + 1;
        totalLength += charsAdded;

        backtrack(totalLength, password);

        // remove the word and unmark it
        totalLength -= charsAdded;
        usedWordSet.delete(word);
        password.pop();
      }
    }
  }

  backtrack(0);

  // console.log(result)
  return result;
}

console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords([], 0)) ===
    JSON.stringify([])
);
console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords([], 5)) ===
    JSON.stringify([])
);
console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords(["horse"], 0)) ===
    JSON.stringify([])
);
console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords(["horse"], 4)) ===
    JSON.stringify([])
);
console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords(["horse"], 5)) ===
    JSON.stringify(["horse"])
);
console.log(
  JSON.stringify(generateAllHumanFriendlyPasswords(["horse"], 10)) ===
    JSON.stringify(["horse"])
);

console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 0)
  ) === JSON.stringify([])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 1)
  ) === JSON.stringify([])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 3)
  ) === JSON.stringify(["dog"])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 5)
  ) === JSON.stringify(["apple", "dog", "zebra"])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 8)
  ) === JSON.stringify(["apple", "dog", "zebra"])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 9)
  ) ===
    JSON.stringify([
      "apple",
      "apple dog",
      "dog",
      "dog apple",
      "dog zebra",
      "zebra",
      "zebra dog",
    ])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10)
  ) ===
    JSON.stringify([
      "apple",
      "apple dog",
      "dog",
      "dog apple",
      "dog zebra",
      "zebra",
      "zebra dog",
    ])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 11)
  ) ===
    JSON.stringify([
      "apple",
      "apple dog",
      "apple zebra",
      "dog",
      "dog apple",
      "dog zebra",
      "zebra",
      "zebra apple",
      "zebra dog",
    ])
);
console.log(
  JSON.stringify(
    generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 20)
  ) ===
    JSON.stringify([
      "apple",
      "apple dog",
      "apple dog zebra",
      "apple zebra",
      "apple zebra dog",
      "dog",
      "dog apple",
      "dog apple zebra",
      "dog zebra",
      "dog zebra apple",
      "zebra",
      "zebra apple",
      "zebra apple dog",
      "zebra dog",
      "zebra dog apple",
    ])
);
