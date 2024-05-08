/*
'''
Next Greater Element

Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.

For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.
 

EXAMPLE(S)
next_greater_element([2, 7, 3, 5, 4, 6, 8]) == [7, 8, 5, 6, 6, 8, -1]
next_greater_element([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]
 


FUNCTION SIGNATURE
function findNextGreaterElements(arr) {}
'''
*/

/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
Input:
- array of integers

Output:
- array of integers representing the next greater elements or -1 if there is no next greater.

- will the input array have duplicates?
- last element will always be -1


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
use a nested loop brute force approach where the other loop iterates over the array once and the inner loop iterates over whatever is left in the array. we perform in place replacement if applicable to get a constant space complexity.

Time: O(N^2)
Space: O(1)

Algorithm 2: (optimal)

Time: O(N)
Space: O(N)

📆 PLAN

[2, 7, 3, 5, 4, 6, 8]
 i  j
Outline of algorithm #1:
- Initialize an outer loop, i
  - i = 0 | i < arr.length
  - const currentElement = arr[i]
  - let newElement = -1;
  - initialize an inner loop
    - j = i + 1 | arr.length
    const checkElement = arr[j]
    logic: checkElement > currentElement
      - replace newElement with checkElement
      - break out of inner loop
  - arr[i] = newElement

- return input arr
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function next_greater_element2(arr) {
  // would need a variable of some sort to track data
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    let newElement = -1;
    for (let j = i + 1; j < arr.length; j++) {
      const checkElement = arr[j];
      if (checkElement > currentElement) {
        newElement = checkElement;
        break;
      }
    }
    arr[i] = newElement;
  }
  return arr;
}
// stack: [8, 7]
//results: [7, 8, 5, 6, 6 , 8, -1]
// [2, 7, 3, 5, 4, 6, 8]

/*
- initialize a stack: []
- initialize a for loop
  - i = arr.length - 1 | i >=0
  - store arr[i] in variable
  - while loop
    (stack.at(-1) < arr[i] && stack.length)
    - pop from stack

- arr[i] = top of stack | -1
- push stored arr[i] into stack
*/

function next_greater_element(arr) {
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i];
    while (stack.length && stack.at(-1) < currentElement) {
      stack.pop();
    }
    arr[i] = stack.length ? stack.at(-1) : -1;
    stack.push(currentElement);
  }
  return arr;
}

/*
Initialize a stack, and then process the array starting from the end.
For each element, check if the top of the stack contains an element that is greater than the current element. If not, keep popping from the stack until this is true. Once this condition is met, the top of the stack is the next greatest element of the current element. Write this into the results array, then push the current element onto the stack.
The top of the stack will store the next greater element for each position as we process the element -- since we are processing from right to left, all elements previously processed are to the right of the current element being processed in the original array.
*/
console.log(next_greater_element([])); // []
console.log(next_greater_element([1])); // [-1]
console.log(next_greater_element([1, 2, 3, 4])); // [2, 3, 4, -1]
console.log(next_greater_element([2, 7, 3, 5, 4, 6, 8])); // [7, 8, 5, 6, 6, 8, -1]
console.log(next_greater_element([5, 4, 3, 2, 1])); // [-1, -1, -1, -1, -1]
