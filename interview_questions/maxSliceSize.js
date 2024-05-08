function howMany(cakes, size) { // size: 2
  let current = 0;

for (const cakeNum of cakes) {
    console.log('current', current)
      current += Math.floor(cakeNum / size);
}
  console.log('canMake', current)
  console.log('----------')
  return current;
}

function maxSliceSize(cakes, attendees) { // attendees: 5
  let min = 0;
  let max = Math.max(...cakes);
  let bestSoFar = 0;

while (min < max) { // min: 2 | max: 4
  console.log(min, max)
    const curSize = min + Math.ceil((max - min) / 2);  // 2
    console.log('curSize', curSize)
      console.log("''''''''''''''''''''''''''")
      const canMake = howMany(cakes, curSize); // 3
      if (canMake >= attendees) { // true
          min = curSize; // 2
          bestSoFar = curSize; // 4
      } else {
          max = curSize - 1; // 4
      }
  }

  return bestSoFar;
}



function calculateSlices(cakes, currentSize) {
let current = 0;

for (const cake of cakes) {
  current += Math.floor(cake / currentSize)
}

return current;
}

function myMaxSliceSize(cakes, attendees) {

const maxSlices = Math.max(...cakes);
let results = 0;

for (let i = 1; i <= maxSlices; i++) {
  const totalSlices = calculateSlices(cakes, i);
  if (totalSlices < attendees) break;
  results = i
}

return results;

}

console.log(myMaxSliceSize([5, 2, 7, 4, 9], 5), 4);
console.log(myMaxSliceSize([1, 2, 3, 4, 9], 6), 2);
console.log(myMaxSliceSize([1, 2, 3, 4, 9], 5), 3);
console.log(myMaxSliceSize([8, 4, 2, 6, 1, 2, 1, 7], 14), 2);
console.log(myMaxSliceSize([4, 9, 4, 3, 6, 6, 2, 5, 8, 7, 6], 13), 3);
console.log(myMaxSliceSize([5, 4], 10), 0);