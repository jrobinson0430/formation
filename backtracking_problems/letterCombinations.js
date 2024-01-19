/**
 * @param {string} digits
 * @return {string[]}
 * 
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * 
 * 
 * 

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */
var letterCombinations = function (digits) {

  if (!digits.length) return [];
  const allStrings = [];
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function backtrack(remainingDigits, combinations = "") {
    if (!remainingDigits.length) {
      allStrings.push(combinations);
      return;
    }
    let currentDigit = map[remainingDigits[0]];

    for (let char of currentDigit) {
      backtrack(remainingDigits.slice(1), combinations + char);
    }
  }

  backtrack(digits);
  return allStrings;
};
