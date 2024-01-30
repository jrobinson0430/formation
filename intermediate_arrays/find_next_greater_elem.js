/*
'''
Next Greater Element

Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.

For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.
 

EXAMPLE(S)
next_greater_element([2, 7, 3, 5, 4, 6, 8]) == [7, 8, 5, 6, 6, 8, -1]
next_greater_element([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]
 

FUNCTION SIGNATURE
def findNextGreaterElements(input: List[int]) -> List[int]
'''
*/

function findNextGreaterElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let newNum = -1;

    for (let j = i + 1; j < arr.length; j++) {
      const checkNum = arr[j];
      if (checkNum > current) {
        newNum = checkNum;
        break;
      }
    }
    arr[i] = newNum;
  }
  console.log(arr);
}

findNextGreaterElements([2, 7, 3, 5, 4, 6, 8]);
findNextGreaterElements([5, 4, 3, 2, 1]);
