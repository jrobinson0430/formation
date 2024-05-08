let testData = ["oliver", "pixel", "oliver", "pinky"];


function removeDuplicateFellows(fellows) {
  const newSet = new Set();
  let output = [];

  for (let elem of fellows) {
    if (!newSet.has(elem)) {
      newSet.add(elem);
      output.push(elem)
    }
  }
  console.log(output)
}

removeDuplicateFellows(testData)