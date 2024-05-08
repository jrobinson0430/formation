function reverseStack(stack) {}

/*
'''
Reverse Stack In-Place

Given a stack, recursively reverse it using only standard-library operations for that data type. Your solution should be achieved in-place/using the input data structure.

For stacks, these are: push(), pop(), peek(), size().
 

EXAMPLE(S)
The stack [1, 9, 3, 4] should return [4, 3, 9, 1]
The stack [1] should return [1]
 

FUNCTION SIGNATURE
def reverseStackInPlace(stack)
'''
*/

class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const ll = new Node(1, new Node(2, new Node(3)))

function placeBackIntoStack(stack, elem) {
  if (stack.length === 0) {
    stack.push(elem);
    return;
  }

  const top = stack.pop();
  placeBackIntoStack(stack, elem);
  stack.push(top);
}



function reverseStackInPlace(stack) {
  if (stack.length === 0) {
    return;
  }

  const elem = stack.pop();
  reverseStackInPlace(stack);
  placeBackIntoStack(stack, elem);
}

console.log(placeBackIntoStack(ll))