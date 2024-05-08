/*
'''
Frequency Stack

Implement a stack that returns the most frequent element when the pop() method is called instead of the last element added. In the event of a tie, pop the last element added into the stack.
 

EXAMPLE(S)
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 

FUNCTION SIGNATURE
class FreqStack:
    def push(val: int) -> None:
        pass

    def pop() -> Optional[int]:
        pass
'''

EXPLORE
Input:
  push(): integer
  pop(): no input

Output:
  push(): stack
  pop(): most frequent element returned

BRAINSTORM
#1 
push(): create a stack as well as a dictionary to track the frequency
pop(): search the dictionary for the most frequent element and return it.

#2
push(): push into the stack.
pop(): use a variable to track the most frequent element.

*/

class FreqStack {
  constructor() {
    this.stack = [];
    this.freqDict = {};
  }

  push(num) {
    this.stack.push(num);

    if (!this.freqDict[num]) this.freqDict[num] = [];
    this.freqDict[num].push(this.stack.length - 1);

    return this.stack;
  }

  pop() {
    let mostFrequent = 0;
    let index;
    for (let key in this.freqDict) {
      // [1, 2, 2, 3, 3]

      [1][(1, 2)][(1, 2, 1)][(1, 2, 1)][(1, 2, 3, 1, 2)][(1, 2, 3, 4, 1, 2)];
      const freqVal = this.freqDict[key].length;

      if (freqVal > mostFrequent) {
        mostFrequent = freqVal;
        index = this.freqDict[key].at(-1);
        // index = this.freqDict[key][this.freqDict.length - 1]
      } else if (freqVal === mostFrequent) {
        let newIndex = this.freqDict[key].at(-1);
        if (newIndex > index) {
          index = newIndex;
        }
      }
    }
    console.log(mostFrequent, index);

    const elem = this.stack.splice(index, 1);
    console.log("elem", elem.at(-1));
    // console.log('elem', elem[0])
    console.log(this.stack);
    // [1,2,3]
    // pop to "some" variable
    // remove element from stack
    // return "some" variable
    // recalculate index
  }
}

// class FreqStack {
//   constructor() {
//     this.stack = [];
//   }

//   push(num) {
//     this.stack.push(num);
//     return this.stack;
//   }

//   pop() {
//     // find the top frequent element(s) and push into a temp array
//     // pop to "some" variable
//     // remove element from stack
//     // return "some" variable

//     // dic = {
//     // '1' : []
//     //}

//     let mostFreqElements = [];
//     let highestFreq = 0;

//     for (let elem of this.stack) {

//     }

//   }
// }

const stack = new FreqStack();
stack.push(1);
stack.push(2);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack);
