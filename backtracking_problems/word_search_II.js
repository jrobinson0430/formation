/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class TrieTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;

    for (const char of word) {
      if (!curr.children[char]) curr.children[char] = new TrieNode();

      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    let curr = this.root;

    for (const char of word) {
      if (!curr.children[char]) return [false];
      curr = curr.children[char];
    }

    return [true, curr.isEndOfWord];
  }
}
/*
we need to use every square as the start of the potential word and check 4 different decisions: 
    - left/right && up/down
after each decision we need to check if the currentWord is within the prefixTree
    - if yes, add to results array
    - otherwise continue

stop conditions will be when the next 'decision' is out of the bounds of the matrix or when the word does not match any word in the prefix tree
    - we do not know all the words within the prefix tree or the length of the longest word so they will not be considered for stop conditions.

since we need to use each square as the start of the word once, we need a loop outside of the helper function
    - we will need a loop within the helper function to simulate the different decisions that can be made
        - we must remember to undo the last decision in order to continue down other 'paths' within the decision tree.

we do need to worry about backtracking onto the 'path' we have already established for this particular 'word'.
    - could we add a property to our TrieNode: hasVisited and continue to trigger it throughout the recursive calls? i dont think so
    - could we carry a set as an argument within the helper and add the coordinates as a string to the set when we add and remove it when we undo the decision?
        - lets implement the set() to prevent overlapping our currentWord

input:
[
    [a, b],
    [c, d]
]
words we are trying to find: ["abcb"]
possible words on board:
a b c d ab ac ba bc ca cd cd cb abd acd bac bdc cab cdb dca dba abdc acdb bacd bdca cabd cdba dcab dbac

 the first iteration will currentWord will be a which is in the prefix tree but is not the end of a word so we continue to make more decisions
 next we try going left and up which will take us out of bounds
 the next valid decision is right: ab which is in the prefix tree but not the end of a word

// possibledirections:
left: [0, -1]
right: [0, 1]
up: [-1, 0]
down: [1, 0]
*/

// add a check for a max length of words array

var findWords = function (board, words) {
  const prefixTree = new TrieTree();
  for (const word of words) prefixTree.insert(word);

  const result = new Set();
  const moves = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  const lengthArr = words.map((word) => word.length);
  const maxLength = Math.max(...lengthArr);
  function backtrack(currentWord, row, col, visitedSet) {
    if (currentWord.length > maxLength) return;
    const [isValid, isEnd] = prefixTree.search(currentWord.join(""));
    if (!isValid) return;

    if (isValid && isEnd) {
      result.add(currentWord.join(""));
    }
    for (const [rowShift, colShift] of moves) {
      const newRow = row + rowShift;
      const newCol = col + colShift;

      if (newRow < 0 || newRow >= board.length) continue;
      if (newCol < 0 || newCol >= board[0].length) continue;
      if (visitedSet.has(newRow * 10 + newCol)) continue;

      currentWord.push(board[newRow][newCol]);
      visitedSet.add(newRow * 10 + newCol);
      backtrack(currentWord, newRow, newCol, visitedSet);
      currentWord.pop();
      visitedSet.delete(newRow * 10 + newCol);
    }
  }

  // traverses the matrix to use each char as the start of the word
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtrack([board[i][j]], i, j, new Set([i * 10 + j]));
    }
  }

  return Array.from(result);
};

// need to figure out how to optimize this solution so it stays within the time constraints.


// ___________________ //

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

class Trie {
  constructor(root = null) {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.word = word;
  }
}

var findWords = function (board, words) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let res = [];

  function dfs(node, x, y) {
    if (node.word) {
      res.push(node.word);
      node.word = null; // prevent duplicates
    }

    // return if out of bounds
    // return if board char is not in node.children
    if (
      x < 0 ||
      x >= board.length ||
      y < 0 ||
      y >= board[0].length ||
      !node.children[board[x][y]]
    ) {
      return;
    }

    const char = board[x][y];

    // mark board location as visited
    board[x][y] = "#";

    // continue searching for words via dfs
    for (const [dx, dy] of dirs) {
      dfs(node.children[char], x + dx, y + dy);
    }

    // reset board location
    board[x][y] = char;
  }

  // build the trie
  // iterate over the board, call dfs at each location
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(trie.root, i, j);
    }
  }

  return res;
};