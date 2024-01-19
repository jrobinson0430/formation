/*
'''
Generate all plus & minus expressions that equals target

Given a string that contains only digits from 0 to 9, and an integer value, *target*. Print all expressions which evaluate to *target* using the plus(+) and minus(-) binary operators between the digits.

You will likely need a helper function to recurse. You can use a loop within your recursive function because we're not monsters.
 
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
- must use all numbers in some combination
- can use addition or subtraction within each expression

function genSetBU(nums) {
  let ret = [];
  function genSet(nums, subset=[], idx=0) {
    // bc return if nothing left;
    if(idx === nums.length) {
      ret.push(subset);
      return;
    }

    // don't include num
    genSet(nums, subset, idx+1);
    
    // include the num
    genSet(nums, [...subset, nums[idx]], idx+1);
  }

  genSet(nums);
  return ret;
}

['a', 'b']
'', ['a'], ['b'], ['a', 'b']

123


1 + 2
1 - 2
Input: 
- string of digits
- target: integer representing the needed outcome of math expression

Output: array of strings representing a math expression that equals the target integer

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''


EXAMPLE(S)
generateExprs("123", 6) == ['1 + 2 + 3']
generateExprs("125", 7) == ['12 - 5']
generateExprs("420", 420) == ['420']
generateExprs("1210", 2) == ['1 + 2 - 1 + 0','1 + 2 - 1 - 0','12 - 10']
 
FUNCTION SIGNATURE
function generateExprs(seq, target) {
def generateExprs(seq: str, target: int) -> None:
'''
*/

/* subproblem: finding all number combinations  '123'
Choosing
1. We generally iterate over decisions. What are we iterating over here? What are the choices  for each  decision?  Do  we  need  a  for  loop?
- string representing digits
- 

'1 + 2 + 3'
function genSet(string, subString="", idx=0) {
    // bc return if nothing left;
    if(idx === str.length) {
      // p
      ret.push(subset);
      return;
    }

    // add the next number
    genSet(nums, subset + " + ", total + num[idx], idx+1);
    
    // subtract the next number
    genSet(nums, subset + " - ", total - num[idx], idx+1);
  }
}
123
23

        1

  +2        -2

+3   -3  +3    -3

Exploring
3. How can we represent that choice? How Should we modify the parameters and store our previous choices (avoiding arms-length recursion). Do we need to use a wrapper due to extra parameters?

4. How should we restrict our choices to be valid?

5. How should we use the return value of the recursive calls? Are we looking for all solutions or just one?

Un-choosing
6. How do we un-modify the parameters from step 3? Do we need to explicitly un-modify, or are they copied? Are they un-modified at the same level as they were modified?

Base  Case
7. What should we do in the base case when we're out of decisions (usually return true)?

8. Is there a case for when there aren't any valid choices left or a 'bad' state is reached (usually return false)?

9. Are the base cases ordered properly? Are we avoiding arms-length recursion?

  *** Short-circuiting the base case, also known as arm's-length recursion, consists of checking the base case before making a recursive call i.e., checking if the next call will be the base case, instead of calling and then checking for the base case. ***
*/

function generateExprs(seq, target) {
  let ret = [];
  function genExp(seq, subString = "", total = 0, idx = 0) {
    // bc return if nothing left;
    console.log("total", total, "subString", subString);
    if (idx === seq.length) {
      if (total === target) {
        ret.push(subString.slice(3));
      }
      return;
    }

    // add the next number

    const newTotal = total + +seq[idx];
    genExp(seq, subString + " + " + seq[idx], newTotal, idx + 1);

    const newTotalSub = idx === 0 ? seq[idx] : total - +seq[idx];
    // subtract the next number
    genExp(seq, subString + " - " + seq[idx], newTotalSub, idx + 1);
  }
  genExp(seq);

  return ret;
}
// t//

// console.log(generateExprs("123", 6))// plus only
// console.log(JSON.stringify(generateExprs("123", 6).sort())
//   == '["1 + 2 + 3"]') // plus only

console.log("return", generateExprs("1210", 2));

// console.log(JSON.stringify(generateExprs("125", 7).sort())
//   == '["12 - 5"]') // minus only
// console.log(JSON.stringify(generateExprs("1236", 0).sort())
//   == '["1 + 2 + 3 - 6"]') // mix
// console.log(JSON.stringify(generateExprs("1235",  - 3).sort())
//   == '["1 - 2 + 3 - 5"]') // mix
// console.log(JSON.stringify(generateExprs("12036", 0).sort())
//   == '["1 + 2 + 0 + 3 - 6","1 + 2 - 0 + 3 - 6"]')
// console.log(JSON.stringify(generateExprs("12036", 18).sort())
//   == '["1 + 20 + 3 - 6"]')
// console.log(JSON.stringify(generateExprs("1010", 9).sort())
//   == '["10 - 1 + 0","10 - 1 - 0"]')
// console.log(JSON.stringify(generateExprs("420", 420).sort())
//   == '["420"]')
// console.log(JSON.stringify(generateExprs("1210", 2).sort())
//   == '["1 + 2 - 1 + 0","1 + 2 - 1 - 0","12 - 10"]')

function generateExprs(seq, target) {
  let results = [];

  function calculateExpr(currentExpr, currentIndex, total) {
    if (currentIndex === seq.length && total === target) {
      results.push(currentExpr);
      return;
    }

    // Loop to put operators (+, -) at all positions
    for (let i = currentIndex; i < seq.length; i++) {
      // Ignore numbers with a leading 0
      if (seq[currentIndex] === "0" && i !== currentIndex) {
        break;
      }

      // Grab 1+ chars for processing
      let segment = seq.substring(currentIndex, i + 1);
      let segmentValue = parseInt(segment);

      // If first index, only send the segment value since there is no second operand (and so no need for a + / -)
      if (currentIndex === 0) {
        calculateExpr(currentExpr + segment, i + 1, segmentValue);
        // Try + / - each time
      } else {
        calculateExpr(
          `${currentExpr} + ${segment}`,
          i + 1,
          total + segmentValue
        );
        calculateExpr(
          `${currentExpr} - ${segment}`,
          i + 1,
          total - segmentValue
        );
      }
    }
  }

  calculateExpr("", 0, 0);
  return results;
}

