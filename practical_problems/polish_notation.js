/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/

var evalRPN = function (tokens) {
  /*
    - this is a perfect use case for a stack
    - if integer, push into stack
    - if operator, pop the last two items in the stack and perform operation
        - add the calculated value to the stack and continue

                 -
    input: [3, 4,-]
    stack:[3]
    stack:[3, 4]
    stack: [3] | integer: 4 * this should be the second number
    stack: [] | integer: 3 * this should be the first number

    Input: tokens = ["2","1","+","3","*"]
    stack: [2]
    stack: [2, 1]
    stack: [2] num2: 1
    stack: []  num1: 2
    perform 2 + 1 = 3
    stack: [3]
    stack: [3,3]
    stack: [3] num2: 3
    stack: [] num1: 3
    perform 3 * 3 = 9
    return 9 because you are at the end of the string.

    - initialize a stack: []
        - imitation: can only use push and pop methods
    - create a calculator dictionary with each of the 4 operations
    - iterate over tokens string
        - if elem is a number, add to stack
        - if elem is operation, remove last 2 nums from stack
            - the first popped number is the second number in the expression
            - the second popped number is the 1st in the expression
            - perform calculation
    */

  let stack = [];
  const operations = (operation, x, y) => {
    let answer = null;
    switch (operation) {
      case "+":
        answer = x + y;
        break;
      case "*":
        answer = x * y;
        break;
      case "-":
        answer = x - y;
        break;
      case "/":
        answer = x / y;
        break;
    }

    return answer > 0 ? Math.floor(answer) : Math.ceil(answer);
  };
  for (let operand of tokens) {
    if (Number.isNaN(+operand)) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(operations(operand, num1, num2));
    } else {
      stack.push(+operand);
    }
  }
  return stack.pop();
};
