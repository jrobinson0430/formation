/*
'''
❓ PROMPT
Given a binary tree with node values represented as integers, find and return the most frequent node value.

You can assume there will always be a most frequent node and no ties.

Example(s)
    5 <--- root
print(findMostFrequentNodeValue(root) == 5)

    5 <--- root
 10   5
print(findMostFrequentNodeValue(root) == 5)

    6 <--- root
  6   6
 6 6
print(findMostFrequentNodeValue(root) == 6)
 

🔎 EXPLORE
List your assumptions & discoveries:
* You must traverse the entire tree so the search type isn't necessarily relevent here. Might want to implement a BFS and a DFS to gain familiarity.
* will need a dictionary to track the frequency of each node value
* use another variable to store the current highestFreq value so traversing the dictionary is not necessary.

Input: binary tree root

output: integer that appears must frequently

Insightful & revealing test cases:
 * how do we handle empty trees? return null
 * per constraints, we can assume there will be no ties with the most frequent value.

🧠 BRAINSTORM
What approaches could work?
# BFS approach that utilizes a queue

# DFS approach that utilizes the recursion and the call stack along with a parameter carried in the function calls. 

Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 # 1 
  * Initialize a queue with the root, dictionary, and highestFrequency variables.
  * create a loop that stops once the queue is empty.
  * retrieve the current freq count of the current node value if it exists and increment, otherwise set it to 1.
  * compare the nodes frequency to the highestFrequency and replace if it is larger
  * return the highestFrequency integer.
  


🛠️ IMPLEMENT
function findMostFrequentNodeValue(root) {
def findMostFrequentNodeValue(root: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
// Binary trees are defined with this interface:
class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value;
    this.left = leftChild;
    this.right = rightChild;
  }
}

const testData1 = new Node(1); // => 1

const testData2 = new Node(1, null, new Node(2, new Node(3))); // => 4
//       1
//     2   3

const testData3 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3))
); // => 4
//         1
//       9   3
//     2       3

const testData4 = new Node(
  1,
  new Node(9, new Node(2)),
  new Node(3, null, new Node(3, null, new Node(10)))
); // => 4
//        1
//      9    3
//    2         3
//                10

const testData5 = new Node(1, new Node(1), new Node(1)); // => 1
//      1
//    1   1

const testData6 = new Node(
  1,
  new Node(1),
  new Node(1, new Node(1), new Node(2))
); // => 3

//          1
//       1      1
//            1    2

function findMostFrequentNodeValue(root) {
  const queue = [root];
  const dictionary = {};

  // index 0: integer | index 1: highest frequency
  let highestFrequency = [null, 0];

  while (queue.length) {
    const node = queue.shift();
    let count = dictionary[node.value] || 0;
    count = count + 1;
    dictionary[node.value] = count;
    if (count > highestFrequency.at(1)) {
      highestFrequency = [node.value, count];
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  console.log(highestFrequency);
  return highestFrequency.at(0);
}

findMostFrequentNodeValue(testData3);
