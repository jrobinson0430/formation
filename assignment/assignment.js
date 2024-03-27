function decode(messageFile) {
  const dictionary = {};
  let decodedMessage = [];
  let levelIncrement = 1, levelValue = 1;

  fs.readFileSync(messageFile, 'utf8').trim().split('\r\n').forEach(str => {
    const [id, word] = str.split(' ');
    dictionary[id] = word;
  })
  
  while (dictionary[levelValue]) {
    decodedMessage.push(dictionary[levelValue]);
    levelIncrement++
    levelValue += levelIncrement
  }

  return decodedMessage.join(' ')
}

// Example usage:
const decodedMessage = decode("assignment/coding_qual_input.txt");
console.log(decodedMessage);