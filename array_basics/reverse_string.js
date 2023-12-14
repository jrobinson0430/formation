const testData = "Formation";

function reverseString(s) {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) reversedString += s.at(i);

  return reversedString;
}

reverseString(testData);
