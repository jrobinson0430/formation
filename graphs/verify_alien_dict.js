/** https://leetcode.com/problems/verifying-an-alien-dictionary/description/
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  /*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

    INPUT:
    word: array of words
    order = string of all lowercase letters
    
    OUTPUT: boolean representing whether the words array is sorted or not based on the order strings order
    
    EXPLORE:
    if we convert the order string into a dictionary where key = char and value = index location; we can use the values as an order comparison.
    - logically if we compare two words at a time and word1 -> word2 is sorted we can move onto the next comparison of word2 -> word3 until we reach the end
    
    - an outer loop starting at index 1 will allow us to iterate over the entire words array comparing two words at a time.
        - we need an inner loop to iterate completely over the shorter word
    */

  const orderDict = {};

  for (let i = 0; i < order.length; i++) orderDict[order[i]] = i;

  for (let i = 1; i < words.length; i++) {
    if (!isSorted(words[i - 1], words[i])) return false;
  }

  function isSorted(wordA, wordB) {
    for (let i = 0; i < wordA.length; i++) {
      if (i == wordB.length) return false;
      if (wordA[i] !== wordB[i]) {
        if (orderDict[wordA[i]] > orderDict[wordB[i]]) return false;
        return true;
      }
    }
    return true;
  }
  return true;
};
