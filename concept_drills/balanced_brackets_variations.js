/**
isBalanced - is a string containing only ( and ) characters balanced?
a. Using stack
b. Using only count
isBalancedMulti - string may contain { }, [ ], and ( )
isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.
 */

//

function isBalanced(str) {
  let stack = []; // LIFO
  for (let i = 0; i < str.length; i += 1) {
    let value = str[i];
    // if ( , push to stack
    if (value === "(") {
      stack.push(value);
    } else {
      // null check for stack so that str starts with (, pop  on emptystack returns undefined
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }
  // check the final product is an empty stack after iteration
  return stack.length === 0;
}

// console.log(isBalanced("(())")) // === true
// console.log(isBalanced("(()))")) // === false
// console.log(isBalanced("))((")) // === false

function isBalancedCount(str) {
  let count = 0;

  for (let char of str) {
    if (char === "(") {
      count = count + 1;
    } else {
      count = count - 1;
    }
    // guarantees starting with (
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

// console.log(isBalancedCount("(())")) // === true
// console.log(isBalancedCount("(()))")) // === false
// console.log(isBalancedCount("))((")) // === false

function isBalancedMulti(str) {
  let stack = [];
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let popped = stack.pop();
      if (char === ")" && popped !== "(") {
        return false;
      } else if (char === "]" && popped !== "[") {
        return false;
      } else if (char === ")" && popped !== "(") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isBalancedMulti("{([])}")) // true
// console.log(isBalancedMulti("{}()[]")) //true
// console.log(isBalancedMulti("{{))")) //false

// () {} []

function isBalancedMultiDic(str) {
  let stack = [];
  let dic = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };
  for (let char of str) {
    if (dic[char]) {
      stack.push(char);
    } else if (dic[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
}

// console.log(isBalancedMultiDic("{([])}")) // true
// console.log(isBalancedMultiDic("{}()[]")) //true
// console.log(isBalancedMultiDic("{{))")) //false

//isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.
// ()(() -- stack length will be 1
// (())) -- stack length will be -1 (??)
// () -- ?
// )))))))
// ()()()( -- true
/**
 * buffer = 1 -- to keep track of the only one mistake
 * for loop to iterate thorugh the string
 * if (  --> push to stack
 * else --> pop
 *  if pop returns undefined, decrement the buffer
 * check if buffer - stack.len
 */

function isBalancedBuffer(str) {
  let stack = []; // LIFO
  let buffer = 1;
  for (let i = 0; i < str.length; i += 1) {
    let value = str[i];
    // if ( , push to stack
    if (value === "(") {
      stack.push(value);
    } else {
      let popped = stack.pop();
      if (popped === undefined) {
        buffer--;
      }
    }
  }
  return buffer - stack.length >= 0;
}

console.log(isBalancedBuffer("((()))")); // true
console.log(isBalancedBuffer("()()()")); //true
console.log(isBalancedBuffer("(())))")); //false
console.log(isBalancedBuffer("((())))")); // true
console.log(isBalancedBuffer("(((")); // false
