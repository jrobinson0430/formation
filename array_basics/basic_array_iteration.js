const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array.at(i));
  }
}

function printEveryOtherValue(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array.at(i));
  }
}

function printEveryOtherValueSkipFirst(array) {
  for (let i = 1; i < array.length; i += 2) {
    console.log(array.at(i));
  }
}

function printEveryKth(array, k) {
  for (let i = 0; i < array.length; i += Number(k) || 1) {
    console.log(array.at(i))
  }
}

function printReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array.at(i))
  }
}


function printReverseEveryOtherValue(array) {
  for (let i = array.length - 1; i >= 0; i -= 2) {
    console.log(array.at(i))
  }
}

function printReverseEveryOtherValueSkipLast(array) {
  for (let i = array.length - 2; i >= 0; i-= 2) {
      console.log(array.at(i))
    }

}

function printReverseEveryKth(array, k) {
  for (let i = array.length - 1; i >= 0; i -= Number(k) || 1) {
    console.log(array.at(i))
  }
}



// printArray(testData);
// printEveryOtherValue(testData)
// printEveryOtherValueSkipFirst(testData);
// printEveryKth(testData, 3);
// printReverse(testData);
// printReverseEveryOtherValue(testData);
// printReverseEveryOtherValueSkipLast(testData);
// printReverseEveryKth(testData, 3);