/*
'''
❓ PROMPT
Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

As a follow-up, how would you handle it when there's circular knowledge? For example, Jono's suggestion is to ask Angus, and Angus' suggestion is to ask Jono. These 'cycles' aren't restricted to pairs of dogs, they can be of any size.

Example(s)
dogs = {
  'Carter': ['Fido', 'Ivy'],
  'Ivy': ["HAT"], // Ivy has seen the hat
  'Loki': ['Snoopy'],
  'Pepper': ['Carter'],
  'Snoopy': ['Pepper'],
  'Fido': []
}
findHat(dogs, 'Loki') == 'Ivy'
 

🔎 EXPLORE
List your assumptions & discoveries:
 INPUT:
 dogs: adjacency list
 bestFriend: string representing the starting point

 OUTPUT: name of the dog that has seen the hat
 
 - account for cycles
 - graph may have undirected edges. 
 - you will not necessarily find a dog that has seen the hat. what do we return if that happens? return string "Couldn't find the hat"
 - are the names case sensitive? yes
 - is hat value always in caps? yes
 - can more than one dog see the hat? no
 - will at least 1 dog see the hat? yes, only 1 dog
 - will there be any islands or forests? possibly


Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
** unsure of the time/space complexity. do we account for the edges? would it be (v + e)
Algorithm 1:
Time: O(V) V representing each node within the graph
Space: O()
 

📆 PLAN
Outline of algorithm #:
- initialize a result string with a default value of: "Couldn't find the hat"
- initialize a visited set: new Set()
- initialize a queue: [bestFriend]
- create a while loop:
  - stop condition: queue.length
  - dequeue from queue

 

🛠️ IMPLEMENT
function findHat(dogs, bestFriend) {
def findHat(dogs: dict, bestFriend: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findHat(dogs, bestFriend) {
  let result = `Couldn't find the hat`;
  const visited = new Set();
  const queue = [bestFriend];

  while (queue.length) {
    const node = queue.shift();

    if (visited.has(node)) continue;
    visited.add(node);

    for (const child of dogs[node]) {
      if (child == "HAT") return node;
      queue.push(child);
    }
  }
  return result;
}

let dogs = {
  Carter: ["Fido", "Ivy"],
  Ivy: ["HAT"], // Ivy has seen the hat
  Loki: ["Snoopy"],
  Pepper: ["Carter"],
  Snoopy: ["Pepper"],
  Fido: [],
};

console.log(findHat(dogs, "Loki") == "Ivy");
console.log(findHat(dogs, "Snoopy") == "Ivy");
console.log(findHat(dogs, "Ivy") == "Ivy");
console.log(findHat(dogs, "Fido") == "Couldn't find the hat");

dogs = {
  Ariel: ["Bork"],
  Bork: ["Cassie"],
  Cassie: ["Drex"],
  Drex: ["Zoe"],
  Zoe: ["HAT"],
};

console.log(findHat(dogs, "Ariel") == "Zoe");
console.log(findHat(dogs, "Bork") == "Zoe");
console.log(findHat(dogs, "Cassie") == "Zoe");
console.log(findHat(dogs, "Drex") == "Zoe");
console.log(findHat(dogs, "Zoe") == "Zoe");
