
const testData1 = new Map();
testData1.set('Oliver', 3);
testData1.set('Tobey', 3);


const testData2 = new Map();
testData2.set('Oliver', 3);
testData2.set('Pinty', 3);
testData2.set('Pixel', 2);
testData2.set('Tobey', 1);

function earliestFellows(fellowTimes) {
  // grab the values, iterate over them to find the smallest integer representing the earliest time.

  let output = [];
  let earliestTime = Infinity;
  const dictValues = fellowTimes.values();

  for (let val of dictValues) {
    earliestTime = val < earliestTime ? val : earliestTime;
  }

  // iterate over the dictionary looking for entries that match the earliestTime.
  for (let entry of fellowTimes) {
    if (entry.at(1) === earliestTime) output.push(entry.at(0));
  }

  return output;
}

earliestFellows(testData1)
earliestFellows(testData2)