/*
Q. return all permutations of array.
*/

function permute(nums) {
  const result = [];
  if (nums === 0) return [];
  if (nums.length === 1) return [nums];

  // base case: a permutation of length 1 only has itself as a permutation
  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    // 0
    const current = nums.at(i); // 1
    const remaining = [...nums.slice(0, i), ...nums.slice(i + 1)]; // [] + [2,3]
    const remainingPermuted = permute(remaining);

    for (let j = 0; j < remainingPermuted.length; j++) {
      const permutatedArray = [current, ...remainingPermuted[j]];
      console.log(current, remainingPermuted);
      result.push(permutatedArray);
    }
  }

  return result;
}

console.log(permute([1, 2, 3]));

var permute = function (nums) {
  const permutations = [];
  let permutation = [];

  function backtrack() {
    console.log(permutation);
    if (permutation.length === nums.length) {
      return permutations.push([...permutation]);
    }

    for (let num of nums) {
      if (permutation.includes(num)) continue;
      permutation.push(num);
      backtrack();
      permutation.pop();
    }
  }

  backtrack();

  return permutations;
};