/*
'''
Given an array of integers a, your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

More formally, given the array a, your task is to count the number of indices 0 ≤ i ≤ a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains at least one pair (a[s], a[t]), where:

* s ≠ t
* a[s] + a[t] = k

Example:

* For a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output is 5.
* Let's consider all subarrays of length m = 4 and see which fit the conditions:
  * Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a[3]) has the sum 5 + 5 = 10, it doesn't fit the requirement s ≠ t.
  * Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
  * Subarray a[2..5] = [7, 5, 3, 5] contains two pairs (a[2], a[4]) and (a[3], a[5]), both with a sum of k = 10.
  * Subarray a[3..6] = [5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
  * Subarray a[4..7] = [3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
  * Subarray a[5..8] = [5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
  * Subarray a[6..9] = [8, 5, 1, 7] doesn't contain any pair with a sum of k = 10.
* So the answer is 5, because there are 5 contiguous subarrays with at least one pair with a sum of k = 10.

 

EXAMPLE(S)
 [2, 4, 7, 5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, result is 5
[2, 2, 2, 2, 2], m = 3, k = 4, result is 3 
 
 console.log(subarraysSumToK([2, 4, 7, 5, 3, 5, 8, 5, 1, 7],4,10))

FUNCTION SIGNATURE
function subarraysSumToK(array, m, k)
'''
/*
EXPLORE

length of arr is always greater than m

BRAINSTORM 
Sliding Window
- init left bound, right bound
- within these bounds, sum array[i] + array[j], if it adds up to k, add 1 to result
- Time: n * m ** 2
- Space: 1

Prefix State map
[1, 2, 3, 4, 4, 7] -> 5

window = lengthOf4

countOfPairs = 1
key = elem
value = index of the value you need if it appears
{
  4:  [1]
  3: [1]
  2: [2]
  1: [3]
}

pairs = [0, 1]
pairs = [[0, 3], [1, 2]]
pairs = [0, 1]

index 4(5th element) switch such that sum needed is 7
pairs = [1, 1]
increment globalPairs

index 5(6th element)
pairs = []


first remove any index in pairs no longer in window
determine new possible pair by adding this new element
add to pairs
if pairs length is greater than 0
update count of pairs



isIndex < k - m 

PLAN

Init left bound = 0, right bound = left bound + m - 1
Init our hash map to {}
Init a counter for pairs found within window

while right bound is less than array's length
  init foundPair bool to false

  loop through our bounds
    calculate key -> k - array[i]
    add key to hashMap, if already exists add index to array else create new array with index inside
    if pair is found set foundPair to true
  
  if foundPair is true, increment our counter

  increment left and right bounds by 1

return counter

Linear Solution

Init our hash map to {}
init pair = []

[1,0,2,2] >window = 4, sum = 3


pairs [0, 0]

[1,2,2,2]

loop through inputs using index:
  step 1
  loop through pair: removing items outside of window

  step 2
  calculate key -> k - array[i]
    add key to hashMap, if already exists add index to array else create new array with index inside
    if found pair, add left index to pairs

  Step 3
  if length of pairs is greater than zero and index >= m; increment counter

return counter
*/

//[0, 0, 0], index = 4, m = 4
//[]
// Jacob
function subarraysSumToK1(array, m, k) {
  const hashMap = {};
  let pairs = [];
  let counter = 0;

  function updateOutOfDate(array, index, m) {
    let j = 0
    while (j < array.length) {
      if (array[j] > (index - m)) {
        break;
      }
      j++
    }
    return array.slice(j)
  }

  for (let i = 0; i < array.length; i++) {

    pairs = updateOutOfDate(pairs, i, m)
    // const key = 
    const key = array[i]
    if (hashMap[key]) {
      hashMap[key] = updateOutOfDate(hashMap[key], i, m)
      pairs = [...pairs, ...hashMap[key]]
    }
    const keyComplement = k - array[i];
    if (hashMap[keyComplement]) {
      hashMap[keyComplement] = updateOutOfDate(hashMap[keyComplement], i, m)
      hashMap[keyComplement].push(i)
    } else {
      hashMap[keyComplement] = [i]
    }
    console.log(i)
    console.log(pairs)
    console.log(hashMap)

    // determine if pair is found
    if (pairs.length && i >= m) counter++
  }

  return counter;
}

// Will

function subarraysSumToK_Will(array, m, k) {
  
  const map = {}
  const pairs = []

  let count = 0

  function updatePair(index){
    for (let j = 0; j < pair.length; j++) {
      if (pairs[j] > index ) {
        pairs.splice(j, 1)
      }
    }
  }

  for (let i = 0; i < array.length; i++){

    updatePair(i)
    
    const key = k - array[i]
    if (map[key] === undefined) {
      map[key] = [i]
    } else {
      map[key].push(i)
      pairs.push(i)
    }

    updatePair(i)


    if(pairs.length > 0 && i >= m) count++
  }

  return count
}
// console.log(subarraysSumToK_Will([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10)) // 5

// Dali
function subArraySumDali(array, m, k) {
  let counter = 0;
  const map = {};
  let pairs = [];

  function prunePairs(array, i) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < i) {
        array.splice(j, 1);
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    //step1
    prunePairs(pairs, i);
    
    //step2
    const key = k - array[i];
    if (!Array.isArray(map[key])) map[key] = [];
    map[key].push(i);
    prunePairs(map[key], i);
    
    if (foundPair) pairs.push(i);

    //step3
    if (pairs.length > 0 && i >= m) counter++;
  }
  return counter;
}

// Chance

/*
[1, 2, 3, 4], 2, 5

hashMap: {
  1: [0],
  2: [1],
}

*/

function subarraysSumToK(array, m, k) {
  const hashMap = {};
  const pairs = [];
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    const rightBound = i + m - 1;

    for (let j = 0; j < pairs.length; j++) {
      if (j > i) pairs.splice(j, 1);
    }

    const num = array[i];
    const diff = k - num;

    if (hashMap[diff]) {
      const indexes = hashMap[diff];
      let left = null;

      for (let index = 0; index < indexes.length; index++) {
        if (index >= i && index <= rightBound) {
          left = index;
          break;
        }
      }

      if (left) pairs.push(left);
    }

    const value = hashMap[num] || [];

    value.push(i);
    hashMap[num] = value;

    if (pairs.length > 0 && i >= m) counter++;
  }

  return counter;
}

console.log(subarraysSumToK1([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10)) // 5
// console.log(subarraysSumToK1([2, 4, 7, 5, 3], 4, 10))
