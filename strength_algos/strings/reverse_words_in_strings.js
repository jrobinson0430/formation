class Test {
  constructor(test_name = "", printTests = false) {
    this.total_count = 0;
    this.problem_count = 0;
    this.total_score = 0;
    this.problem_score = 0;
    this.current_problem = "";
    this.failed_problems = [];
    console.log(`Beginning Test: ${test_name}`);
  }

  // Test Helpers
  test(expected_outcome, outcome, case_num) {
    if (expected_outcome == outcome) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  testMultipleCases(possible_outcomes, outcome, case_num) {
    var possible_outcome;
    for (possible_outcome of possible_outcomes) {
      if (this.compareArrays(possible_outcome, outcome)) {
        return this.passed(case_num);
      }
    }
    return this.failed(case_num);
  }

  testForArrays(expected_outcome, outcome, case_num) {
    if (this.compareArrays(expected_outcome, outcome)) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  compareArrays(array1, array2) {
    return (
      array1.length === array2.length &&
      array1.filter((a, i) =>
        Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a
      ).length === 0
    );
  }

  testMatchAny(expected_outcome, outcome, case_num) {
    if (this.isEqual(expected_outcome, outcome)) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  isEqual(array1, array2) {
    var sortedArr1 = [];
    var sortedArr2 = [];
    for (var a1 of array1) {
      sortedArr1.push(a1.sort());
    }
    for (var a2 of array2) {
      sortedArr2.push(a2.sort());
    }
    return this.compareArrays(sortedArr1.sort(), sortedArr2.sort());
  }

  // Test Logistics
  startProblem(problemName) {
    this.current_problem = problemName;
    this.problem_score = 0;
    this.problem_count = 0;
    this.failed_problems = [];
  }
  passed(case_num) {
    this.total_score += 1;
    this.problem_score += 1;
    this.problem_count += 1;
    this.total_count += 1;
  }
  failed(case_num) {
    this.problem_count += 1;
    this.total_count += 1;
    this.failed_problems.push(case_num);
  }
  endProblem() {
    console.log(
      `\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`
    );
    if (this.failed_problems.length > 0) {
      console.log(`   ** Failed Test Cases: ${this.failed_problems}`);
    }
  }
  printFinal() {
    console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`);
  }
}

var test = new Test("");

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayify(head) {
  var ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.value);
    ptr = ptr.next;
  }
  return array;
}

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

function arrayifyTree(root) {
  if (!root) {
    return [];
  }
  var queue = [];
  var array = [];
  queue.push(root);
  while (queue.length !== 0) {
    var node = queue.shift();
    array.push(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return array;
}

/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a string, reverse the string word by word.

Note:
• Remove any extra white space (e.g. "b a" -> "a b" // only keep 1 whitespace).
• Remove any leading or trailing white spaces (e.g. " Hi " -> "Hi").

Examples:
• Given a string: "I love programming" // returns: "programming love I"
• Given a string: " " // returns: ""
*/

/*
'''
🔎 EXPLORE
Input: string of words with possible irregular whitespace

Output: string of words reversed with single spacing only

What are some other insightful & revealing test cases?
- we are reversing the ordering of the words, not the characters within the words
- we need to remove any irregular white space
  - we can use the trim method to take care of spaces at the front and back.
  - will need to provide logic to handle extra spaces within the group of words


CONSTRAINTS:
- must not have any extra/irregular spacing
- output of words must be the reverse of the input words
  - NOT the characters within the words: i am a programmer  -> programmer a am i

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
  - utilizing a temp variable and a result variable (strings), iterate over the input starting from the end. whenever you encounter a space you know you have found a complete word and should add the temp variable to the results. If your temp variable is empty and you encounter a space, continue to next iteration, otherwise start the process of building another word. 
Time: O(n) n being the number of characters within the input string
Space: O(n) I think it would be n being the length of the result string.
 

📆 PLAN
Outline of algorithm #:
- initialize a resultStr: ''
- trim the input string using built in method: .trim() (non destructive!!)
- loop over input backwards
  - initialize a temp variable
  - add words to temp until you reach a space
  - when you reach a space and temp has a length, add it to the result string and reset temp
  - when you reach a space and temp does not have a length, continue to the next iteration
- return resultStr  

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function rw(input) {
  input = input.trim();
  if (!input.length) return "";

  let resultStr = "";
  let temp = "";

  for (let i = input.length - 1; i >= 0; i--) {
    const char = input[i];
    if (char === " " && !temp.length) continue;
    if (char === " " && temp.length) {
      resultStr += temp + " ";
      temp = "";
    } else {
      temp = char + temp;
    }
  }
  resultStr += temp;
  console.log(resultStr);
  return resultStr;
}



//  canonical (theirs)
function reverseWords(sentence) {
  const words = sentence.split(" ").filter((s) => s !== "");

  let i = 0,
    j = words.length - 1;

  while (i < j) {
    [words[i], words[j]] = [words[j], words[i]];
    i++;
    j--;
  }
  return words.join(" ");
}

// manual, no library functions (theirs)
function reverseWords(s) {
  const wordsWithoutSpaces = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    // skip empty spaces
    if (s[i] !== " ") {
      // if you reach the end of the input OR the end of a word
      if (i + 1 >= s.length || s[i + 1] === " ") {
        word += s[i];
        wordsWithoutSpaces.push(word);
        word = "";
        continue;
      }
      word += s[i];
    }
  }

  let result = "";

  for (let i = wordsWithoutSpaces.length - 1; i >= 0; i--) {
    if (i === wordsWithoutSpaces.length - 1) {
      result += wordsWithoutSpaces[i];
    } else {
      result += " " + wordsWithoutSpaces[i];
    }
  }

  return result;
}

// Test Cases
test.startProblem("Reverse Words In String");
test.test("world! hello", rw("  hello world!  "), 1);
test.test("", rw(""), 2);
test.test("", rw("   "), 3);
test.test("a", rw("  a"), 4);
test.endProblem();
