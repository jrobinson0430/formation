/*
Imagine you work at a company like Google, Facebook, OpenAI or any other company with a major online service. Millions to potentially billions of people are counting on your service to be up and running and accessible. It's an interesting thought exercise just to estimate the number of individual HTTP requests made to one of these services in a single day or even per second!

One key component of these systems is to ensure that no user can consume more than their fair share of the system's capacity to respond to these requests. This is accomplished via rate limiting, restricting the rate at which any single user can make requests.

The goal of the rate limiter is to make sure humans who use the system are able to do so, while scripts and other automatic processes might be slowed down or even denied access to reserve enough capacity for real users.

A rate-limiting algorithm (or heuristic) tracks the rate of requests from any single user and decides to allow the request through or deny it.

Work with your fellows to derive, implement, and test multiple rate-limiting algorithms. Discuss the pros and cons of each along the way.

Design these rate limiters in a testable way. We recommend passing in the current time as an argument along with the user id. The time can be a number representing seconds or milliseconds.
 

EXAMPLE(S)
console.log(isRateLimited('spammy', 1)); // false, not limited, allowed through
for (let i = 0; i < 1000; i++) isRateLimited('spammy', 1); // make a lot of calls at the same time
console.log(isRateLimited('spammy', 1)); // true, limiter kicks in, request is denied
console.log(isRateLimited('other', 1)); // false, this other user is allowed through!

// simulate waiting a long time by increasing the current time
console.log(isRateLimited('spammy', 1000000)); // false
 

FUNCTION SIGNATURE
function isRateLimited(userID: string, currentTime: number): boolean
*/

/*
1. Time is strictly increasing.
2. Dictionary maps users -> most recent time.
3. Want to have a minimum time.
4. Can rate limit on whatever you want.
5. Sliding window: x amount of actions in a certain amount of time.
6. From first request, create window of time where user can ask maximum of R requests.

Algo #1: User -> most recent time; t of next request should be > most recent time + interval
  If request > request timestamp saved + time limit:
    new request timestamp with 1 transaction count
    Allow it.
  else
    increment transaction count.  
    If it's more than allowed, then deny.
    Else allow it.
Algo #2: Sliding Window
Algo #3: Token bucket: Predefined capacity of tokens in a queue; after certain time, get refilled;
Algo #4: Like algo #3, but max capacity is dependent on number of users
Algo #5: 'Inverse' of tokens

Algo #1: Easiest to code: keep latest timestamp;
Sliding window: Easy to code;
Token bucket: 'Real-life' but harder to code.


Implementation of sliding window:
We push each request and its timestamp onto an array
We use the window to only return the timestamps within a certain range
Range being time since or the number of requests
Track when requests come in and requests can be made once we have exceeded more than the limit
certain number of requests per limit

function isRateLimited(userID: string, currentTime: number): boolean

{
  user -> time of the beginning of the window
}

{

}

3 Transactions per 3 second window
 1  2  3  4  5  6   (Seconds)
[1, 1, 1, 0, 2, 1]  (TPS)
 <Window>


Implementation of token bucket:

function isRateLimited(userID: string, currentTime: number): boolean

 bucket limit = <number>
 tokensperseconds = 1000
 let queue = queue
 



*/

/* Sliding window
let requestCounts = {}; // id -> count
const MAX_REQUESTS = 3;
const INTERVAL = 10;
let lastWindowStart = 0;

function isRateLimitedSlidingWindow(id, t) {
  if (t - lastWindowStart > INTERVAL) {
    lastWindowStart = t;
    requestCounts = {};
  }
  
  requestCounts[id] = (requestCounts[id] || 0) + 1;
  
  return requestCounts[id] > MAX_REQUESTS;  
}
*/

/* Token bucket
const MAX_TOKENS = 3;
const TOKEN_INTERVAL = 10; // tokens += 1 every 10 ms

const tokens = {}; // id -> { count, lastFilled }

function isRateLimitedTokenBucket(id, t) {
  if (!tokens[id]) {
    tokens[id] = { count: MAX_TOKENS, lastFilled: t };
  }
  
  if (tokens[id].count <= 0) {
    tokens[id].count = Math.min(
      Math.floor((t - tokens[id].lastFilled) / TOKEN_INTERVAL),
      MAX_TOKENS
    );
    tokens[id].lastFilled = t;
  }
  
  const isLimited = (tokens[id].count <= 0);

  if (!isLimited) {
    tokens[id].count -= 1;
  }
  
  return isLimited;
}
*/