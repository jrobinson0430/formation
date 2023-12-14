const testData = [1, 3, 5, 6];
function isMonotonic(nums) {
  if (nums.length === 1 || nums.length === 2) return true;

  const isIncreasing = nums.at(0) < nums.at(-1);

  for (let i = 1; i < nums.length; i++) {
    const last = nums.at(i - 1);
    const current = nums.at(i);

    if (isIncreasing) {
      if (last > current) return false;
    } else if (last < current) return false;
  }
  return true;
}

// isMonotonic(testData);
console.log(isMonotonic(testData));
