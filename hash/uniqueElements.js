// O(N) time - one pass
function numUniqueValues(array) {
  const counts = new Map();
  let uniques = 0;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const count = (counts.get(value) || 0) + 1;
    counts.set(value, count);
    if (count === 1) {
      uniques++;
    } else if (count === 2) {
      uniques--;
    }
  }

  return uniques;
}

// O(N) time - multiple passes, functional style
function numUniqueValues(array) {
  const counts = new Map();

  array.forEach((el) => {
    counts.set(el, (counts.get(el) || 0) + 1);
  });

  return Array.from(counts.values()).filter((count) => count === 1).length;
}
