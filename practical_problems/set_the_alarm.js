/*
'''
❓ PROMPT
You're exhausted after a long day and heading to bed, but you still have to set the alarm clock on your phone. You already have one you set the day before, so all you have to do is update it.

To set your alarm, the hours and minutes are set independently, each by scrolling upwards or downwards. One shift changes an hour or minute value by one, up or down. The values are organized cyclically, which means that dragging 0 minutes downwards turns it into 59, and dragging 59 upwards turns it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

Given the time of the previous alarm and the new desired time, what is the minimum number of scroll moves to set the new time?

Example(s)
For setTime = "07:30" and timeToSet = "08:00", the output should be
minScrollToSet(oldTime, newTime) = 31.

Shifting hours upwards once will change the alarm to "08:30", and shifting minutes 30 times downwards will change it to "08:00".

minScrollToSet("7:30", "8:00") === 31
minScrollToSet("7:00", "6:31") === 30
minScrollToSet("7:00", "6:25") === 26
 

🔎 EXPLORE
List your assumptions & discoveries:
- we need to treat the hours and minutes seperate because going from :59 -> :00 will not modify the hours.
- we need to determine what way will be more optimized: going up or down
  - use Math.min() should allow us to test both ways and come away with the correct 


  1pm -> 13
  2pm -> 14

  if (min > 12) {
    min += (12 - min)
  }

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function minScrollToSet(oldTime, newTime) {
def minScrollToSet(oldTime: str, newTime: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function minScrollToSet(oldTime, newTime) {
  let shiftCount = 0;

  let [oldMin, oldSec] = oldTime.split(":").map((x) => +x);
  let [newMin, newSec] = newTime.split(":").map((x) => +x);

  shiftCount += Math.min(
    Math.abs(oldMin - newMin),
    24 - Math.abs(oldMin - newMin)
  );
  shiftCount += Math.min(
    Math.abs(oldSec - newSec),
    60 - Math.abs(oldSec - newSec)
  );

  return shiftCount;
}

console.log(minScrollToSet("7:00", "8:31"), 30);
console.log(minScrollToSet("7:30", "8:00"), 31);
console.log(minScrollToSet("7:00", "6:25"), 26);
