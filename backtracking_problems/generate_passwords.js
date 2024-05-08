/*
'''
❓ PROMPT
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

Example(s)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]


🔎 EXPLORE
List your assumptions & discoveries:
we have two choices every decision: include the letter or exclude it





Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function generatePasswords(validCharacters, minLength, maxLength) {
def generatePasswords(validCharacters: list[str], minLength: int, maxLength: int) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generatePasswords(validCharacters, minLength, maxLength) {
  const allPasswords = [];

  function helper(current = []) {
    if (current.length > maxLength) return;

    if (current.length >= minLength) {
      allPasswords.push(current.join(""));
    }

    for (let i = 0; i < validCharacters.length; i++) {
      current.push(validCharacters[i]); // append
      helper(current);
      current.pop(); // undo after recursion
    }
  }

  helper();
  return allPasswords;
}

console.log(
  JSON.stringify(generatePasswords(["a", "b", "c", "d"], 0, 0)) ===
    JSON.stringify([""])
);
console.log(
  JSON.stringify(generatePasswords(["a", "b", "c", "d"], 0, 1)) ===
    JSON.stringify(["", "a", "b", "c", "d"])
);
console.log(
  JSON.stringify(generatePasswords(["a", "b", "c", "d"], 1, 1)) ===
    JSON.stringify(["a", "b", "c", "d"])
);
console.log(
  JSON.stringify(generatePasswords(["a", "b"], 3, 3)) ===
    JSON.stringify(["aaa", "aab", "aba", "abb", "baa", "bab", "bba", "bbb"])
);
console.log(
  JSON.stringify(generatePasswords(["a"], 2, 4)) ===
    JSON.stringify(["aa", "aaa", "aaaa"])
);
console.log(
  JSON.stringify(generatePasswords(["a"], 2, 4)) ===
    JSON.stringify(["aa", "aaa", "aaaa"])
);
console.log(
  JSON.stringify(generatePasswords(["a", "b", "c"], 2, 3)) ===
    JSON.stringify([
      "aa",
      "aaa",
      "aab",
      "aac",
      "ab",
      "aba",
      "abb",
      "abc",
      "ac",
      "aca",
      "acb",
      "acc",
      "ba",
      "baa",
      "bab",
      "bac",
      "bb",
      "bba",
      "bbb",
      "bbc",
      "bc",
      "bca",
      "bcb",
      "bcc",
      "ca",
      "caa",
      "cab",
      "cac",
      "cb",
      "cba",
      "cbb",
      "cbc",
      "cc",
      "cca",
      "ccb",
      "ccc",
    ])
);
console.log(
  JSON.stringify(generatePasswords(["a", "b", "c", "d"], 2, 3)) ===
    JSON.stringify([
      "aa",
      "aaa",
      "aab",
      "aac",
      "aad",
      "ab",
      "aba",
      "abb",
      "abc",
      "abd",
      "ac",
      "aca",
      "acb",
      "acc",
      "acd",
      "ad",
      "ada",
      "adb",
      "adc",
      "add",
      "ba",
      "baa",
      "bab",
      "bac",
      "bad",
      "bb",
      "bba",
      "bbb",
      "bbc",
      "bbd",
      "bc",
      "bca",
      "bcb",
      "bcc",
      "bcd",
      "bd",
      "bda",
      "bdb",
      "bdc",
      "bdd",
      "ca",
      "caa",
      "cab",
      "cac",
      "cad",
      "cb",
      "cba",
      "cbb",
      "cbc",
      "cbd",
      "cc",
      "cca",
      "ccb",
      "ccc",
      "ccd",
      "cd",
      "cda",
      "cdb",
      "cdc",
      "cdd",
      "da",
      "daa",
      "dab",
      "dac",
      "dad",
      "db",
      "dba",
      "dbb",
      "dbc",
      "dbd",
      "dc",
      "dca",
      "dcb",
      "dcc",
      "dcd",
      "dd",
      "dda",
      "ddb",
      "ddc",
      "ddd",
    ])
);

console.log(generatePasswords(["a", "b", "c", "d"], 3, 4).length === 320);
console.log(generatePasswords(["a", "b", "c", "d"], 3, 5).length === 1344);
