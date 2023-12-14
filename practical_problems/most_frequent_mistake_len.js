/*
'''
❓ PROMPT
You're practicing the riffle shuffle in cardistry (https://youtube.com/shorts/NFnJoWcaL_0). You start with the red cards in one hand and black cards in the other and try to interweave them perfectly, meaning the colors alternate every card once you merge them into a single deck.

You build a machine that accepts a deck of cards to automatically determine the length of your most common mistake after the merge. The most common mistake can be identified by one that is not alternating from the opposite color. For example, "B, R, B, R" would be a perfectly alternating sequence, but there is one mistake in "B, B, R, B". If there are no mistakes, then return 0.

Example(s)
Given the shuffled deck: ["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B"]

The following sequences of consecutive cards of the same color:

"R", "R", "R" - Length 3
"R", "R", "R", "R" - Length 4
"B", "B", "B" - Length 3

Returns 3 because it's the most "common" mistake, occurring twice.
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT: array of single char strings 'R' or 'B'
OUTPUT: integer representing the length of the most common occuring mistake length

because the question wants to know the length of consecutive cards of the same color you don't have to exclude the card that is technically in the right order.




Insightful & revealing test cases:
 - will there only be one correct sequence length?
- ["R", "R", "R", "B", "B", "R", "R", "R", "R", "B", "R", "B", "B", "B", "R", "R", "R", "R"]
  - return 3 and 4 because they both occur twice?

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- use a map and a counter. iterate over array determining when there are consecutively colored cards.
  - if consecutive, increment counter
  - if not
    - add counter to the map
    - reset counter to 1
Time: O(N)
Space: O()
 
Algo 2:


📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function mostFreqMistakeLength(deck) {
def mostFreqMistakeLength(deck: list[str]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function mostFreqMistakeLength(deck) {
  let curr = deck[0];
  let ocurrences = {};
  let mostFrequent = 0;

  for (let i = 1; i < deck.length; i++) {
    let char = deck[i];

    if (curr[0] === char) {
      curr += char;
    } else {
      if (curr.length > 1) {
        const count = (ocurrences[curr.length] || 0) + 1;
        mostFrequent = count > mostFrequent ? curr.length : mostFrequent;
        ocurrences[curr.length] = count;
      }

      curr = char;
    }
  }
  if (curr.length > 1) {
    const count = (ocurrences[curr.length] || 0) + 1;
    mostFrequent = curr.length > mostFrequent ? curr.length : mostFrequent;
    ocurrences[curr.length] = count;
  }

  for (let [key, value] of Object.entries(ocurrences)) {
    if (value === mostFrequent) return Number(key);
  }

  return mostFrequent;
}

console.log(mostFreqMistakeLength(["R"]), 0);
console.log(mostFreqMistakeLength(["B", "R"]), 0);
console.log(mostFreqMistakeLength(["R", "R"]), 2);
console.log(
  mostFreqMistakeLength(["R", "R", "B", "R", "B", "B", "R", "R", "B"]),
  2
);
console.log(
  mostFreqMistakeLength(["R", "R", "R", "B", "R", "B", "R", "R", "R", "B"]),
  3
);
console.log(
  mostFreqMistakeLength(["R", "R", "R", "B", "B", "R", "R", "R", "B", "B"]),
  3
);
console.log(
  mostFreqMistakeLength(["R", "B", "R", "B", "R", "B", "R", "B", "R", "B"]),
  0
);
console.log(
  mostFreqMistakeLength(["R", "R", "B", "R", "R", "R", "R", "R", "B", "B"]),
  2
);
console.log(
  mostFreqMistakeLength([
    "B",
    "B",
    "B",
    "B",
    "R",
    "R",
    "R",
    "B",
    "R",
    "R",
    "R",
  ]),
  3
);
console.log(
  mostFreqMistakeLength([
    "R",
    "R",
    "R",
    "B",
    "B",
    "B",
    "B",
    "R",
    "R",
    "R",
    "B",
  ]),
  3
);
console.log(
  mostFreqMistakeLength([
    "R",
    "R",
    "R",
    "B",
    "B",
    "R",
    "R",
    "R",
    "R",
    "B",
    "R",
    "B",
    "B",
    "B",
  ]),
  3
);

