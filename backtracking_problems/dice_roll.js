/*
Q. Write a function diceSum that accepts two integer parameters: A number of dice to roll, and a desired sum of all the die values. Output all combinations of die values that add up to exactly that sum. (array of arrays)

Choosing  
1. We generally iterate over decisions. What are we iterating over here? What are the choices  for each  decision?  Do  we  need  a  for  loop?
  - we are iterating over numbers 1-6 representing a single die.
  - we need a for loop to explore each of the possible outcomes for a single dice roll.

Exploring
3. How can we represent that choice? How Should we modify the parameters and store our previous choices (avoiding arms-length recursion). Do we need to use a wrapper due to extra parameters?
  - Represent the choice using integer values from 1-6 (inclusive), store them in an array which we carry as a parameter in the helper function. we will use the for loop inside the helper function to simulate the different choices being made. 

4. How should we restrict our choices to be valid?
  - the base case is when the numOfDice is equal to the length of the array we are carring in the helper. If the sum of those numbers is equal to the target we know we have found a possible solution and we should add it to the combinations array on the global scope.

5. How should we use the return value of the recursive calls? Are we looking for all solutions or just one?
  - we are looking for all possible solutions where the numOfDice adds up to the target number

Un-choosing
6. How do we un-modify the parameters from step 3? Do we need to explicitly un-modify, or are they copied? Are they un-modified at the same level as they were modified?
  - we explicitly pop (unmodify) the last decision within the for loop to 'backtrack' that path in order to explore another one. 

Base  Case
7. What should we do in the base case when we're out of decisions (usually return true)?
  - numOfDice === combo.length
  - if sum === target, add current combo to the combinations array, return
    - otherwise, return

8. Is there a case for when there aren't any valid choices left or a 'bad' state is reached (usually return false)?
  - if there are no good choices, we will not add any combos to the combinations array and we will end up returning an empty array. this is a valid edge case return.
  - we could provide a short circuit check on the target. if it is greater than numOfDice * 6, then we know there cannot be any valid combos.

9. Are the base cases ordered properly? Are we avoiding arms-length recursion?
  - yes, we are avoiding arms-length recursion.

  *** Short-circuiting the base case, also known as arm's-length recursion, consists of checking the base case before making a recursive call – i.e., checking if the next call will be the base case, instead of calling and then checking for the base case. ***
*/

// setup an exhaustive search first
function diceRollExhaustive(numOfDice) {
  const combinations = [];

  function backtracking(combo = [], sum = 0) {
    if (combo.length === numOfDice) {
      combinations.push([...combo]);
      return;
    }

    for (let i = 1; i < 7; i++) {
      combo.push(i);
      backtracking(combo, sum + i);
      combo.pop();
    }
  }

  backtracking();
  return combinations;
}
// diceRollExhaustive(2)
// [
// [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ],
// [ 1, 5 ], [ 1, 6 ], [ 2, 1 ], [ 2, 2 ],
// [ 2, 3 ], [ 2, 4 ], [ 2, 5 ], [ 2, 6 ],
// [ 3, 1 ], [ 3, 2 ], [ 3, 3 ], [ 3, 4 ],
// [ 3, 5 ], [ 3, 6 ], [ 4, 1 ], [ 4, 2 ],
// [ 4, 3 ], [ 4, 4 ], [ 4, 5 ], [ 4, 6 ],
// [ 5, 1 ], [ 5, 2 ], [ 5, 3 ], [ 5, 4 ],
// [ 5, 5 ], [ 5, 6 ], [ 6, 1 ], [ 6, 2 ],
// [ 6, 3 ], [ 6, 4 ], [ 6, 5 ], [ 6, 6 ]
// ]

// add problem specific details
function diceRoll(numOfDice, target) {
  const combinations = [];

  function backtracking(combo = [], sum = 0) {
    if (combo.length === numOfDice) {
      if (sum === target) combinations.push([...combo]);
      return;
    }

    for (let i = 1; i < 7; i++) {
      combo.push(i);
      backtracking(combo, sum + i);
      combo.pop();
    }
  }

  backtracking();
  return combinations;
}

diceRoll(2, 7);
// [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ], [ 4, 3 ], [ 5, 2 ], [ 6, 1 ] ]
