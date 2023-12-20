/*
Imagine you work at a company like Google, Facebook, OpenAI or any other company with a major online service. Millions to potentially billions of people are counting on your service to be up and running and accessible. It's an interesting thought exercise just to estimate the number of individual HTTP requests made to one of these services in a single day or even per second!

One key component of these systems is to ensure that no user can consume more than their fair share of the system's capacity to respond to these requests. This is accomplished via rate limiting, restricting the rate at which any single user can make requests.

The goal of the rate limiter is to make sure humans who use the system are able to do so, while scripts and other automatic processes might be slowed down or even denied access to reserve enough capacity for real users.

A rate-limiting algorithm (or heuristic) tracks the rate of requests from any single user and decides to allow the request through or deny it.

Work with your fellows to derive, implement, and test multiple rate-limiting algorithms. Discuss the pros and cons of each along the way.

Design these rate limiters in a testable way. We recommend passing in the current time as an argument along with the user id. The time can be a number representing seconds or milliseconds.
 
MAX_NUMBER_OF_REQUEST_PER_USER = 3
WINDOW_SIZE = 10
- window is inclusive

- hashmap: user -> number of call
- setTimeout -> to reset timestamp within WINDOW_SIZE interval

-

- hashmap: user -> [number of call, timestamp of first call]
- hashmap of only last 10 timespatamps elapsed -> obj of name strings: each string has a count of count

---------

startTime = " "
hashmap: user -> number of call

EXAMPLE(S)
console.log(isRateLimited('spammy', 1)); // false, not limited, allowed through
for (let i = 0; i < 1000; i++) isRateLimited('spammy', 1); // make a lot of calls at the same time
console.log(isRateLimited('spammy', 10)); // true, limiter kicks in, request is denied
console.log(isRateLimited('other', 1)); // false, this other user is allowed through!

// simulate waiting a long time by increasing the current time
console.log(isRateLimited('spammy', 1000000)); // false
 

FUNCTION SIGNATURE
function isRateLimited(userID: string, currentTime: number): boolean

Global
1. global hashmap
   start time  init 0
   MAX_NUMBER_OF_REQUEST_PER_USER = 3
   WINDOW_SIZE = 10
Within the function: 
2. reset if it exceeds the window size; startTime+WINDOW_SIZE<currentTime
      update start time, startTime =currentTime
      reset hash map
   build/update the hash map
   return based on number of request i.e hash map value
*/

let userRequests = {};

const MAX_NUMBER_OF_REQUEST_PER_USER = 3;
const WINDOW_SIZE = 10;
let startTime = 0;

function isRateLimited(userID, currentTime) {
  //sliding window approach
  if (currentTime > startTime + WINDOW_SIZE) {
    startTime = currentTime;
    userRequests = {};
  }
  // if(!userRequests[userID]) userRequests[userID] = 1
  // else userRequests[userID]++

  userRequests[userID] = (userRequests[userID] || 0) + 1;
  // console.log(userRequests)
  return userRequests[userID] > MAX_NUMBER_OF_REQUEST_PER_USER;
}

function isRateLimitedTB(userID, currentTime) {}
console.log(isRateLimited("spammy", 1)); // false, not limited, allowed through
for (let i = 0; i < 10; i++) {
  console.log(isRateLimited("spammy", 1));
} // make a lot of calls at the same time
console.log(isRateLimited("spammy", 10)); // true, limiter kicks in, request is denied
console.log(isRateLimited("other", 1)); // false, this other user is allowed through!
// simulate waiting a long time by increasing the current time
console.log(isRateLimited("spammy", 1000000)); // false
