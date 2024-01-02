/*
'''
❓ PROMPT
You are designing an iPhone carousel widget that displays a list of apps in a vertical scrolling carousel. The apps array contains the names of the apps in the carousel from bottom to the top (index 0 for the bottom). The commands array contains the list of commands to navigate the vertical carousel, in all lowercase: "scroll up", "scroll down", and "tap".

The carousel works as follows:
* Initially, the first app in the apps array is selected.
* If the user taps on an app, it opens the app.
* If the user scrolls up, the carousel moves one app up. If the user scrolls down, the carousel moves one app down.
* If the user scrolls past the top of the carousel, the carousel wraps around to the bottom, and vice versa.
* Your task is to simulate the behavior of the carousel and return an array of strings representing the names of the opened apps.

Assume with every subsequent command, the user is already back on the home page, scrolling through the carousel again.

Example(s)
let apps = ["Maps", "Music", "Photos", "Messages", "Settings"]
let commands = ["tap", "scroll down", "scroll up", "scroll up", "scroll down", "scroll down", "tap"]

In this example, we first tap on "Maps" in the carousel (Index 0)
Scrolling down takes you to "Settings" (Index 4)
Scrolling up takes you back to "Maps" (Index 0)
Scrolling up takes you to "Music" (Index 1)
Scrolling down takes you to "Maps" (index 0)
Scrolling down again takes you to "Settings" (index 4)
Tap to open "Settings" (index 4)

Output: ["Maps", "Settings"]
 

🔎 EXPLORE
List your assumptions & discoveries:
INPUT:
  - apps: array containing the names of the apps in the carousel
    - index 0: bottom
    - last index: top
  - commands: array containing the list of commands for navigation of the carousel
    - 'scroll up'
      - increases index by 1 (+1)
    - 'scroll down'
      - decreases index by 1 (-1)
    - 'tap'
      - opens the selected app

OUTPUT:
  - array containing the application names that were opened. (tap command)

- if the user scrolls past the top of the bottom the carousel should wrap around.
  - scroll past top, goes to bottom
  - scroll past bottom, goes to top

- the commands 'scroll up' and 'scroll down' will modify the index position in the names array.
  - we do not care about the actual name until we reach a 'tap' command.

* when you tap and return to the home screen, are you at the previous location or does it reset to the bottom of the app names array?

Insightful & revealing test cases:
- can have empty command arrays: return empty [];
- assume valid apps input with length of 1 or greater.
  - might need to account for apps length of 1

 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
 - initialize a counter to represent the current location within the apps array
 - initialize an output array

 - iterate over command array
  scroll up command: increment counter variable, check if it goes beyond the top
  scroll down command: decrement counter variable, check if it goes below the bottom
  tap: add the value at apps[counter] location

Time: O(N) n being the number of commands in the commands array
Space: O(N) n being the length of the output array
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function simulateCarousel(apps, commands){} // returns list of str
def simulate_carousel(apps: list[str], commands: list[str]) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function simulateCarousel(apps, commands){
//   let index = 0;
//   let output = [];
å;
//   for (let command of commands) {
//     if (command === 'scroll up') {
//       index++
//       if (index === apps.length) index = 0;

//     } else if (command === 'scroll down') {
//       index--
//       if (index === -1) index = apps.length - 1;
//     } else {
//       output.push(apps[index])
//     }
//   }

//   return output;
// }
function simulateCarousel(apps, commands) {
  let index = 0;
  let output = [];
  const appCount = apps.length;

  for (let command of commands) {
    if (command === "scroll up") {
      // prevents index from going beyond the length of the apps arr
      index = (index + 1) % appCount;
    } else if (command === "scroll down") {
      // We need to add num_apps to ensure that the result is positive and within the bounds of the list.
      index = (index - 1 + appCount) % appCount;
    } else {
      output.push(apps[index]);
    }
  }
  return output;
}

// Test Case 1: No commands
const apps1 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands1 = [];
console.log(simulateCarousel(apps1, commands1).toString() === [].toString());

// Test Case 2: Single "tap" command
const apps2 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands2 = ["tap"];
console.log(
  simulateCarousel(apps2, commands2).toString() === ["Maps"].toString()
);

// Test Case 3: Single "scroll up" command
const apps3 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands3 = ["scroll up", "tap"];
console.log(
  simulateCarousel(apps3, commands3).toString() === ["Music"].toString()
);

// Test Case 4: Single "scroll down" command
const apps4 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands4 = ["scroll down", "tap"];
console.log(
  simulateCarousel(apps4, commands4).toString() === ["Settings"].toString()
);

// Test Case 5: Multiple "scroll up" and "scroll down" commands
const apps5 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands5 = [
  "scroll down",
  "scroll up",
  "scroll up",
  "scroll up",
  "scroll up",
  "tap",
];
console.log(
  simulateCarousel(apps5, commands5).toString() === ["Messages"].toString()
);

// Test Case 6: Mix of "tap", "scroll up", and "scroll down" commands
const apps6 = ["Maps", "Music", "Photos", "Messages", "Settings"];
const commands6 = [
  "tap",
  "scroll up",
  "tap",
  "scroll down",
  "tap",
  "scroll down",
  "tap",
];
console.log(
  simulateCarousel(apps6, commands6).toString() ===
    ["Maps", "Music", "Maps", "Settings"].toString()
);

// Test Case 7: Carousel with only one app
const apps7 = ["Maps"];
const commands7 = ["tap", "scroll up", "scroll down", "tap"];
console.log(
  simulateCarousel(apps7, commands7).toString() === ["Maps", "Maps"].toString()
);

// Test Case 8: Carousel with only one app & scroll spam
const apps8 = ["Maps"];
const commands8 = [
  "scroll up",
  "scroll up",
  "tap",
  "scroll up",
  "scroll up",
  "scroll up",
  "scroll up",
  "tap",
];
console.log(
  simulateCarousel(apps8, commands8).toString() === ["Maps", "Maps"].toString()
);
