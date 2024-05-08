/*
Stacks and queues are often used as lists of things to do or items to be processed in a particular order. In this series of exercises, the goal is to practice using stacks and queues to manage work to be done while searching through friend connections.

Given an object/dictionary of friend lists:
1. Given a person's name, return a list of all of the friends of their friends (2nd order friends)
2. Given a person's name and a positive number, n, greater than 0, return the nth order friends. For n = 1, that is the person's direct friends. For n = 2, this gives the same result as the first problem.
3. Given two people's names, return the distance between them in friend connections, their Kevin Bacon number?

"Daniel"
n=1: ["Mike", "Sophie", "James", "Tony"]
n=2: ["James", "Luke", "Mike", "Tony", "Eun Ji", "Sophie"]

3. input: "Daniel", "Eun Ji", n=2
*/

const friends = {
  Daniel: ["Mike", "Sophie", "James", "Tony"],
  Mike: ["Daniel", "James", "Luke"],
  Tony: ["Daniel", "Sophie"],
  Sophie: ["Mike", "Daniel", "Tony", "Eun Ji"],
  "Eun Ji": ["Sophie"],
  James: ["Daniel", "Mike"],
  Luke: ["Mike"],
};

// Can the person be not on the list -- if so return empty array
// can include the original person, preferablly not
// can include a friend, even if they already appeared at an earlier point

// For 3rd prompt
// assume there is always some connection between two friends

/*
- a set or array which will hold the 2nd order friends
- stack (use an array) - will contain the input friend ([Daniel, 0])
- init a list of friends already seen

- while there are things in the stack
- pop the first thing in the stack (call it cur) - [name, distance]
- if the depth is 2
  - add them to the answer array

- we'll inspect all the people "cur" is friends with (loop)
- check the seen list
  - if we haven't seen this person
  - add that person to the stack along with their distance, [Mike, 1]
  - add them to the list of people we've seen

- return the answer array
x
*/

function friendOfFriends(friend, list) {
  let secondOrderFriends = [];
  let alreadySeen = new Set([friend]);

  let stack = [[friend, 0]];

  while (stack.length) {
    const [name, distance] = stack.pop();

    if (distance === 2) {
      secondOrderFriends.push(name);
    }

    for (let key of list[name]) {
      if (!alreadySeen.has(key)) {
        stack.push([key, distance + 1]);
        alreadySeen.add(key);
      }
    }
  }

  return secondOrderFriends;
}

// console.log(friendOfFriends('Daniel', friends))

function friendOfFriends2(friend, list, n) {
  let secondOrderFriends = [];
  let alreadySeen = new Set([friend]);

  let stack = [[friend, 0]];

  if (!list[friend]) {
    return [];
  }

  while (stack.length) {
    const [name, distance] = stack.pop();

    if (distance === n) {
      secondOrderFriends.push(name);
    }

    for (let key of list[name]) {
      if (!alreadySeen.has(key)) {
        stack.push([key, distance + 1]);
        alreadySeen.add(key);
      }
    }
  }

  return secondOrderFriends;
}

function friendOfFriends3(friend1, friend2, list) {
  let alreadySeen = new Set([friend1]);

  let stack = [[friend1, 0]];

  if (!list[friend1]) {
    return [];
  }

  while (stack.length) {
    const [name, distance] = stack.pop();
    for (let key of list[name]) {
      if (!alreadySeen.has(key)) {
        if (key === friend2) {
          return distance + 1;
        }
        stack.push([key, distance + 1]);
        alreadySeen.add(key);
      }
    }
  }

  return -1;
}

// console.log(friendOfFriends2('Daniel', friends, 3))
// console.log(friendOfFriends2('Daniel', friends, 1))
// console.log(friendOfFriends2('Joe', friends, 1))

const friends2 = {
  Daniel: ["Mike", "Sophie", "James", "Tony"],
  Mike: ["Daniel", "James", "Luke"],
  Tony: ["Daniel", "Sophie"],
  Sophie: ["Mike", "Daniel", "Tony", "Eun Ji"],
  "Eun Ji": ["Daniel"],
  James: ["Daniel", "Mike"],
  Luke: ["Mike"],
};

console.log(friendOfFriends3("Daniel", "Eun Ji", friends));
console.log(friendOfFriends3("Eun Ji", "Daniel", friends));

/*
def nOrderFriends(name, n, friends):
    if n<=0:
        return #precondition
    
    queue = [name]
    nextLevelFriends = set()
    for _ in range(n): #repetitive iteration to generate next order friends
        nextLevelFriends = set() #reset each iteration
        while len(queue)>0:
            nextFriendsFriendsToAdd = queue.pop(0)
            nextLevelFriends = nextLevelFriends.union(set(friends.get(nextFriendsFriendsToAdd,[])))
        queue = list(nextLevelFriends)

    return queue

def getOrderBetween(name1,name2, friends):
    #usage of helper function
    orderNum = 1
    while orderNum <=6: #upper limit based on "six degrees of separation"
        friend1OrderFriends = nOrderFriends(name1,orderNum,friends)
        friend2OrderFriends = nOrderFriends(name2,orderNum,friends)
        
        if name1 in friend2OrderFriends or name2 in friend1OrderFriends:
            return orderNum
        orderNum+=1
    
    return "more than 6 degrees of separation"


def getOrderBetweenOptimized(name1,name2, friends):
    #optimized to integrate with nOrderFriends code; prevents excessive generation of smaller n values
    orderNum = 1

    queue1 = [name1]
    queue2 = [name2]
    nextLevelFriends1 = set()
    nextLevelFriends2 = set()
    for orderNum in range(1,7):
        while len(queue1)>0:
            #generate friend 1's next level friends
            nextFriend1sFriendsToAdd = queue1.pop()
            nextLevelFriends1 = nextLevelFriends1.union(set(friends.get(nextFriend1sFriendsToAdd,[])))

        while len(queue2)>0:
            #generate friend 2's next level friends
            nextFriend2sFriendsToAdd = queue2.pop()
            nextLevelFriends2 = nextLevelFriends2.union(set(friends.get(nextFriend2sFriendsToAdd,[])))

        if name1 in nextLevelFriends2 or name2 in nextLevelFriends1:
            #O(1) search
            return orderNum
       
        queue1 = nextLevelFriends1
        queue2 = nextLevelFriends2

    return "more than 6 degrees of separation"

    */
