/*
'''
❓ PROMPT
The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F.  The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given a number *n*, write a function that prints out all *n*-digit ternary numbers.

Example(s)
Numbers starting with zero shouldn't normally be included but the ternary representing the zero value is a valid 1-digit ternary. No other strings should start with a "0"!

generateNDigitTernaries(1) == ["0","1","2"]
generateNDigitTernaries(2) == ["10","11","12","20","21","22"]


                   1                                 2
            0      1      2                   0      1      2
           012    012    012                 012    012    012


🔎 EXPLORE
List your assumptions & discoveries:
 base case: when the length of the ternary number is equal to n

 if n > 1 and number.length === 0 we know we cannot pick 0

 we have 3 choices at each 'decision' except the very 1st decision which cannot be 0.


Insightful & revealing test cases:
 if n is 1, return an explicit ['0', '1', '2']
 if n is 0, return an empty array

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function generateNDigitTernaries(n) {
def generateNDigitTernaries(n: int) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generateNDigitTernaries(n) {
  const ternaries = [];
  let ternary = [];

  function backtrack() {
    if (ternary.length === n) {
      return ternaries.push(ternary.join(""));
    }

    for (let i = 0; i < 3; i++) {
      if (!ternary.length && n > 1 && i == 0) continue;
      ternary.push(i);
      backtrack();
      ternary.pop();
    }
  }

  backtrack();
  console.log(ternaries);
  return ternaries;
}

console.log(
  JSON.stringify(generateNDigitTernaries(1)) === JSON.stringify(["0", "1", "2"])
);
console.log(
  JSON.stringify(generateNDigitTernaries(2)) ===
    JSON.stringify(["10", "11", "12", "20", "21", "22"])
);
console.log(
  JSON.stringify(generateNDigitTernaries(3)) ===
    JSON.stringify([
      "100",
      "101",
      "102",
      "110",
      "111",
      "112",
      "120",
      "121",
      "122",
      "200",
      "201",
      "202",
      "210",
      "211",
      "212",
      "220",
      "221",
      "222",
    ])
);
console.log(generateNDigitTernaries(4).length === 54);
console.log(generateNDigitTernaries(5).length === 162);
console.log(generateNDigitTernaries(6).length === 486);
console.log(generateNDigitTernaries(7).length === 1458);
console.log(generateNDigitTernaries(8).length === 4374);
console.log(generateNDigitTernaries(9).length === 13122);
console.log(generateNDigitTernaries(10).length === 39366);
