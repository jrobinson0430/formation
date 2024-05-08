/*
Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

For the last line of text, it should be left-justified, and no extra space is inserted between words.
 k >= the length of the longest word in the input array
 [] input array should return []

Brainstorm:
1. must keep running count
2. must track current line use array ?
3. initialize result array
4. 3 things to check if it exceeds maxWidth: running count + temp/current line length + potential next word
5. after adding extra spaces, add to result array then reset running count and temp/current line array

EXAMPLE(S)
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16

[the, " quick", brown] k = 16 total = 15 extra spaces = 16 - 15 = 1
["fox", " jumps", " over"] k = 16 total = 14 spaces = 14 - 12 = array.length - 1 % 2 = 0 extra spaces
returns
["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the lazy dog    "]  // (left justify, fill the end with 4 spaces)
 

FUNCTION SIGNATURE
function justify(words, maxWidth) {
def fullJustify(words: list[str], maxWidth: int) -> list[str]:
*/

function justify(words, maxWidth) {
  let lineLength = 0;
  let tempArr = [];
  let resultArr = [];

  for (let word of words) {
    if (word.length + tempArr.length + lineLength <= maxWidth) {
      tempArr.push(word);
      lineLength += word.length;
    } else {
      // tempArr = ['the', 'quick', 'brown]
      // call distributeSpaces helper
      resultArr.push(distributeSpaces(tempArr));
      tempArr = [word];
      lineLength = word.length;
    }
  }

  function distributeSpaces(arr) {
    let totalSpacesNeed = maxWidth - lineLength; // 16 - 13 = 3
    let gaps = arr.length - 1;
    let evenlyDistributedSpaces = Math.floor(totalSpacesNeed / gaps); // 1
    let remainderSpace = totalSpacesNeed % gaps; // 1
    let line = "";
    for (let i = 0; remainderSpace > 0; i++) {
      arr[i] += " ";
      remainderSpace--;
    }
    return arr.join(" ".repeat(evenlyDistributedSpaces));
  }
  resultArr.push(tempArr.join(" ").padEnd(maxWidth, " "));
  return resultArr;
}

let input = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

console.log(justify(input, 16));

// SOL

function formatLastLine(words, lineLength) {
  console.log("last", words, lineLength);
  const combined = words.join(" ");
  const extraSpaces = lineLength - combined.length;
  const spaces = new Array(extraSpaces).fill(" ").join("");
  return combined + spaces;
}

function formatRegularLine(words, lineLength) {
  if (words.length === 1) return formatLastLine(words, lineLength);
  const combinedLength = words.reduce((t, x) => x.length + t, 0);

  const numOfWords = words.length;
  const numOfBaselineSpaces = Math.floor(
    (lineLength - combinedLength) / (numOfWords - 1)
  );
  let remainder = (lineLength - combinedLength) % (numOfWords - 1);
  const baselineSpaces = new Array(numOfBaselineSpaces).fill(" ").join("");
  const extraSpaces = baselineSpaces + " ";

  const output = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (remainder > 0) {
      output.push(extraSpaces);
      remainder--;
    } else {
      output.push(baselineSpaces);
    }
    output.push(words[i]);
  }

  return output.join("");
}

function justify(words, maxWidth) {
  if (words.length === 0) return [];

  const lines = [];
  let currentLineWords = [words[0]];
  let currentLineLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    const nextWord = words[i];
    if (nextWord.length + 1 + currentLineLength > maxWidth) {
      // Doesn't fit. Format what we have and add this word as
      // the first on the next line.
      lines.push(formatRegularLine(currentLineWords, maxWidth));
      currentLineWords = [nextWord];
      currentLineLength = nextWord.length;
    } else {
      // Fits. Take it an move on.
      currentLineWords.push(nextWord);
      currentLineLength += nextWord.length + 1;
    }
  }
  if (currentLineLength > 0) {
    lines.push(formatLastLine(currentLineWords, maxWidth));
  }

  return lines;
}
