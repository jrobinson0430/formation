/*
'''
Given a distance d, a pendulum starts at d and swings from d to negative d and back. For example, given distance 3, the pendulum goes 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3, and back again. 
Given a time t, return the pendulum's position. The time starts at 0.

In this example, 0 returns 3, 1 returns 2, 3 returns 0, and so on.
 1 0 -1 = 3
 2 1 0 -1 -2 = 5
 3 2 1 0 -1 -2 -3 = 7

 d * 2 + 1 = cycle length 
d = 3 
3 - 3 = k = 0
EXAMPLE(S)
Input: d = 5, t = 7
Output: -2
Explanation: The pendulum swings as follows, with the 7th tick on the -2 position.
5 4 3 2 1 0 -1 -2 -3 -4  -5 -4 -3 -2  -1 0 1 2 3 4 5 4 3 2 1...
0 1 2 3 4 5  6  7  8  9  10 11 12 13 14


example 2:
d = 3
t = 10
pendulum: 3, 2, 1, 0, -1, -2, -3. -2  -1. 0  1 2
          0  1. 2. 3. 4.  5.  6.   7.  8. 9

3 - (10 % 7) = 0

t=11
3 - 11%7 = -1 

if number of cycles is odd multiply result by - 1

cycle number: Math.floor(time / cycle length)
pendulum position: distance - (time % cycle length)

result = 5
direction = -
max = 5
min = -5
t = 7

while (time) {
    if result ever got to min or max, reverse the direction

    increasing or decreasing our result

    time--
}

return result

FUNCTION SIGNATURE
function pendulum(distance, time)
'''
*/

/* 

edge case: if time is 0 return distance

init cycle length: distance * 2 + 1
init cycle #: The floor of time / cycle length

find postion with formula: distance - (time % cycle length)

if (cycle length is odd) return position * - 1
else return position

*/
//                    2       5
function pendulum(distance, time) {
  const cycleLength = distance * 2; // 5
  const cycleNum = Math.floor(time / cycleLength);

  const pendulumPos = distance - (time % cycleLength);

  return cycleNum % 2 == 0 ? pendulumPos : pendulumPos * -1;
}

// 5 - (5%2) -> 2
// 2 1 0 -1 -2 -1 0 1 2 1 0 -1 -2 -1 0

console.log(pendulum(2, 0), 2);
console.log(pendulum(2, 1), 1);
console.log(pendulum(2, 2), 0);
console.log(pendulum(2, 3), -1);
console.log(pendulum(2, 4), -2);
console.log(pendulum(2, 5), -1); // got -2, should be -1
console.log(pendulum(2, 6), 0); //
console.log(pendulum(2, 8), 2); //
console.log(pendulum(2, 9), 1); //

console.log(pendulum(5, 0), 5);
console.log(pendulum(5, 3), 2);
console.log(pendulum(5, 8), -3);
console.log(pendulum(5, 9), -4);
console.log(pendulum(5, 10), -5);
console.log(pendulum(5, 11), -4);
console.log(pendulum(5, 19), 4);
console.log(pendulum(5, 20), 5);
console.log(pendulum(5, 21), 4);

console.log(pendulum(3, 0), 3);
console.log(pendulum(3, 1), 2);
console.log(pendulum(3, 2), 1);
console.log(pendulum(3, 3), 0);
console.log(pendulum(3, 4), -1);
console.log(pendulum(3, 5), -2);
console.log(pendulum(3, 6), -3);
console.log(pendulum(3, 7), -2);
console.log(pendulum(3, 9), 0);
console.log(pendulum(3, 12), 3);
console.log(pendulum(3, 13), 2);

/*
Follow-up:
What if the pendulum reduces by 1 distance per full swing? For example, for distance 3, the pendulum would go 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 1, 0, -1, -2, -1, 0, 1, 0, -1, 0 and then stay on 0 from this point forward.
 
6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0

distance 3:
length = 6

if time >6

distance--
time-=6

*/
