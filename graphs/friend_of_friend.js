/*
'''
❓ PROMPT
Given a vertex and edge list of users of a social network and two user IDs, return whether they are friends of friends.

Example(s)
users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]
friends = [("Jeff", "Susan"), ("Jeff", "Fred"), ("Susan", "Ed"), ("Ed", "Fred"), ("Jason", "Zach")]

Jeff---|
 |     |
Susan  |   Jason - Zach
 |     |
 Ed - Fred

isFOF(users, friends, "Jeff", "Ed") -> True
isFOF(users, friends, "Jeff", "Susan") -> False
isFOF(users, friends, "Jeff", "Jeff") -> False
 

🔎 EXPLORE
List your assumptions & discoveries:
 INPUT:
 users: array of strings representing friends (vertexes/nodes)
 friends: matrix of strings representing edges/links between vertexes
 user1: name of the first user (string)
 user2: name of the second user (string)

 OUTPUT: boolean representing if user1 is a friend of a friend (second degree) of user2

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
BFS approach is appropriate because we want to check each degree of friendship between the different users.
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #:
- create a toAdjacencyList helper
- initialize a visited set: new Set()
- initialize a queue: [[user1, 0 (representing the degree of friend)]]
- initialize a while loop
  - stop condition: queue.length
  - dequeue from queue
    - optimization: if the degree of friend is greater than 2, return false
    - if current is in visited set, continue
    - add curent to visited set
  - if degree is two and current == user2 return True
    - otherwise populate queue per normal
 

🛠️ IMPLEMENT
function isFOF(vertex_list, edge_list, user1, user2) {

'''
*/

const users = ["Jeff", "Susan", "Ed", "Fred", "Jason", "Zach"]; // vertex's
const friends = [
  // edges/links
  ["Jeff", "Susan"],
  ["Jeff", "Fred"],
  ["Susan", "Ed"],
  ["Ed", "Fred"],
  ["Jason", "Zach"],
];

function toAdjacencyList(vList, eList) {
  // undirected
  const adjacencyList = {};
  for (const vertex of vList) adjacencyList[vertex] = [];

  for (const [friend1, friend2] of eList) {
    adjacencyList[friend1].push(friend2);
    adjacencyList[friend2].push(friend1);
  }
  return adjacencyList;
}
toAdjacencyList(users, friends);
// Jeff---|
//  |     |
// Susan  |   Jason - Zach
//  |     |
//  Ed - Fred

function isFOF(vertex_list, edge_list, user1, user2) {
  if (!vertex_list.includes(user1) || !vertex_list.includes(user2))
    return false;
  const adjacencyList = toAdjacencyList(vertex_list, edge_list);

  // bfs approach with a twist
  // the queue is going to consist of tuples 0: friend 1: degree

  const visited = new Set();
  const queue = [[user1, 0]];

  while (queue.length) {
    const [currentUser, degree] = queue.shift();
    if (visited.has(currentUser)) continue;
    if (degree > 2) return false;
    if (degree == 2 && currentUser == user2) return true;
    visited.add(currentUser);

    for (const friend of adjacencyList[currentUser])
      queue.push([friend, degree + 1]);
  }

  return false;
}

// Happy path
console.log(isFOF(users, friends, "Jeff", "Ed"));
console.log(isFOF(users, friends, "Ed", "Jeff"));
console.log(isFOF(users, friends, "Susan", "Fred"));
console.log(isFOF(users, friends, "Fred", "Susan"));

// Too close: Jason -> Zach (distance 1)
console.log(isFOF(users, friends, "Jason", "Zach") === false);

// Distance 1 or 3: Jeff -> Fred / Jeff -> Susan -> Ed -> Fred
console.log(isFOF(users, friends, "Jeff", "Fred") === false);

// Nonexistent path
console.log(isFOF(users, friends, "Zach", "Jeff") === false);
console.log(isFOF(users, friends, "Jeff", "Zach") === false);

// Users not in the network
console.log(isFOF(users, friends, "Foo", "Jeff") === false);
console.log(isFOF(users, friends, "Jeff", "Foo") === false);
console.log(isFOF(users, friends, "Foo", "Bar") === false);

const users2 = ["Ben", "Emily", "Ana", "Chris", "John", "Jess", "Ken"];
const friends2 = [
  ["Chris", "Ben"],
  ["Chris", "Emily"],
  ["Chris", "Ana"],
  ["Chris", "John"],
  ["Chris", "Jess"],
  ["Chris", "Ken"],
];

// Ben ---|  |--- Emily
// Ana -- Chris - John
// Jess --|  |--- Ken

// Happy path
console.log(isFOF(users2, friends2, "Ben", "Ana"));
console.log(isFOF(users2, friends2, "Ana", "Ben"));
console.log(isFOF(users2, friends2, "Jess", "Ana"));
console.log(isFOF(users2, friends2, "Emily", "Ben"));
console.log(isFOF(users2, friends2, "John", "Ken"));
console.log(isFOF(users2, friends2, "Ken", "Emily"));

console.log(isFOF(users2, friends2, "Chris", "Ben") === false);
console.log(isFOF(users2, friends2, "Chris", "Ana") === false);
console.log(isFOF(users2, friends2, "Chris", "Jess") === false);
console.log(isFOF(users2, friends2, "Chris", "Emily") === false);
console.log(isFOF(users2, friends2, "Chris", "John") === false);
console.log(isFOF(users2, friends2, "Chris", "Ken") === false);
console.log(isFOF(users2, friends2, "Ken", "Chris") === false);

const users3 = ["Ben", "Emily", "Ana", "Tony", "Chris", "John", "Jess", "Ken"];
const friends3 = [
  ["Tony", "Ben"],
  ["Tony", "Jess"],
  ["Tony", "Ana"],
  ["Tony", "Chris"], // friend bridge
  ["Chris", "Emily"],
  ["Chris", "John"],
  ["Chris", "Ken"],
];

// Ben ---|        |---- Emily
// Ana - Tony -- Chris - John
// Jess --|        |---- Ken

console.log(isFOF(users3, friends3, "Chris", "Ben"));
console.log(isFOF(users3, friends3, "Chris", "Ana"));
console.log(isFOF(users3, friends3, "Chris", "Jess"));
console.log(isFOF(users3, friends3, "Tony", "Emily"));
console.log(isFOF(users3, friends3, "Tony", "John"));
console.log(isFOF(users3, friends3, "Tony", "Ken"));

// Distance 3
console.log(isFOF(users3, friends3, "Ben", "Emily") === false);
console.log(isFOF(users3, friends3, "Ana", "John") === false);
console.log(isFOF(users3, friends3, "Jess", "Ken") === false);
