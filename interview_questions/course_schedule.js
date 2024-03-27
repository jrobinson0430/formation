/*
'''
Suppose you're a school headmaster and somebody has drafted a course list for a new program. Each course has an ID associated with it, and they may have prerequisites.

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
 
[0,1], [0,2] -> [0, [1,2]]

EXAMPLE(S)
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

FUNCTION SIGNATURE
function courseSchedule(numCourses, prerequisites)
'''

* can have the same course multiple times with different prerequisites.

- utilize an adjacency list and traverse adjacency list to determine if the can take all of the listed courses.

INPUT:
matrix with inner arrays with fixed length of 2
index 0: course
index 1: prerequisites required before you can complete course

OUTPUT:
boolean representing whether or not you can take all of the listed courses. 

- build an adjacency list. 
  key: course being taken
  value: array of prerequisites required.
- traverse the adjaceny list to determine if there is a cycle.
  - using DFS and a set. when we encounter a course, add it to the set and when we are done with that course, remove it from the set.
  - if at any time we try to add a course that has already been added to the set, we know we have cycle and should return false. 
  {
    1: [0, 2],
    2: [0, 4],
    0: [4],
    4: [1]
  }

  [[1,0], [1,2], [2,0], [2,4], [0,4], [4,1]]



Input: numCourses = 4, prerequisites = [[1,0],[1,2]] // true
Input: numCourses = 4, prerequisites = [[1,0],[1,2], [0, 1]] // false


*/

// [[1,0],[0,1]] // false
function courseSchedule(numCourses, prerequisites) {
  const adjList = {};

  prerequisites.forEach((courseInfo) => {
    const [course, prerequisite] = courseInfo;

    if (adjList[course]) {
      adjList[course].push(prerequisite);
    } else {
      adjList[course] = [prerequisite]
    }
  })
/*
  {
    1: [0],
    0: [1]
  }
  */
  let isValid = true;

  function dfs(course, visitedSet) { //course = 
    if (!isValid) return;
    if (visitedSet.has(course)) return isValid = false; // {}
    visitedSet.add(course); // {}

    if (!adjList[course]) return; 

    for (const prerequisite of adjList[course]) { // []
      dfs(prerequisite, visitedSet); // prerequisite = , visitedSet = {}
    }
  }

  for (let course of Object.keys(adjList)) {
    dfs(course, new Set()); // course = 
  }

  return isValid;
}

console.log(courseSchedule(2, [[1, 0], [0, 1]])) // false
console.log(courseSchedule(5, [[1, 0], [2, 1]])) // true
console.log(courseSchedule(2, [[1, 0]])) // true
console.log(courseSchedule(4, [])) // true
console.log(courseSchedule(3, [[1, 0], [1, 2], [2, 0], [2, 4], [0, 4], [4, 1]])) // false



function courseSchedule(numCourses, prerequisites) {
  const graph = new Map();

  const indegree = Array(numCourses).fill(0);
  const queue = [];

  const coursesTaken = [];

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indegree[e]++;
  }

  // Push our starting/no-dependency nodes into a queue
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  // Process our course dependencies
  while (queue.length) {
    // Dequeue course
    const course = queue.shift();

    // Push to order
    coursesTaken.push(course);

    // Track indegree edges
    const dependentCourses = graph.get(course);

    if (dependentCourses) {
      for (const dependentCourse of dependentCourses) {
        indegree[dependentCourse]--;
        if (indegree[dependentCourse] === 0) queue.push(dependentCourse);
      }
    }
  }

  // Return results at end
  return numCourses === coursesTaken.length;
};




var canFinish = function(numCourses, prerequisites) {
  const adjList = new Map();
  const visited = new Set();

  for (const [a, b] of prerequisites) {
      if (!adjList.has(a)) adjList.set(a, []);
      adjList.get(a).push(b);
  }

  for (const course of adjList.keys()) {
      if (!depCheck(course)) return false;
  }

  function depCheck(course) {
      if (visited.has(course)) return false;
      if (!adjList.has(course)) return true;
      visited.add(course);
      const deps = adjList.get(course);
      for (const dep of deps) {
          if (!depCheck(dep)) return false;
      }
      visited.delete(course);
      adjList.delete(course);
      return true;
  }

  return true;
};