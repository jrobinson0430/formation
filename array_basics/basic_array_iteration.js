/*
'''
❓ PROMPT
Let's practice some basic skills in manipulating arrays and dealing with indices. We're going to iterate through the array and print out the values. Then we'll work through some variations that will help you get comfortable working with indices.

Use an input array of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] to verify the output easily. For the variations with a k parameter, use values of 1 through 10.

1. Print out every value
2. Print out every other value
3. Print out every other value, skipping the first one
4. Add a second parameter, k, and now print out every kth value, starting with the first.

Finally, print all of these again in *reverse*:
1. Every element starting with the last
2. Every other element starting with the last index
3. Every other element skipping the last index
4. Every kth element starting with the last

#### 🥅 Goal
Write this code as cleanly as possible with no special cases or if-statements, just choosing the starting index, increment expression, and ending condition for each loop.


Example(s)
testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
k=3

printEveryKth(testData, k)

0,3,6,9
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function printArray(array)
function printEveryOtherValue(array)
function printEveryOtherValueSkipFirst(array)
function printEveryKth(array, k)
function printReverse(array)
function printReverseEveryOtherValue(array)
function printReverseEveryOtherValueSkipLast(array)
function printReverseEveryKth(array, k)

def printArray(array: list[int]) -> None:
def printEveryOtherValue(array: list[int]) -> None:
def printEveryOtherValueSkipFirst(array: list[int]) -> None:
def printEveryKth(array: list[int], k: int) -> None:
def printReverse(array: list[int]) -> None:
def printReverseEveryOtherValue(array: list[int]) -> None:
def printReverseEveryOtherValueSkipLast(array: list[int]) -> None:
def printReverseEveryKth(array: list[int], k: int) -> None:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array.at(i));
  }
}

function printEveryOtherValue(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array.at(i));
  }
}

function printEveryOtherValueSkipFirst(array) {
  for (let i = 1; i < array.length; i += 2) {
    console.log(array.at(i));
  }
}

function printEveryKth(array, k) {
  for (let i = 0; i < array.length; i += Number(k) || 1) {
    console.log(array.at(i));
  }
}

function printReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array.at(i));
  }
}

function printReverseEveryOtherValue(array) {
  for (let i = array.length - 1; i >= 0; i -= 2) {
    console.log(array.at(i));
  }
}

function printReverseEveryOtherValueSkipLast(array) {
  for (let i = array.length - 2; i >= 0; i -= 2) {
    console.log(array.at(i));
  }
}

function printReverseEveryKth(array, k) {
  for (let i = array.length - 1; i >= 0; i -= Number(k) || 1) {
    console.log(array.at(i));
  }
}

// printArray(testData);
// printEveryOtherValue(testData)
// printEveryOtherValueSkipFirst(testData);
// printEveryKth(testData, 3);
// printReverse(testData);
// printReverseEveryOtherValue(testData);
// printReverseEveryOtherValueSkipLast(testData);
// printReverseEveryKth(testData, 3);
