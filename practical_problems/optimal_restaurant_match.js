/*
Define a *chain* of a list *L* as a sequence of elements from *L*, not necessarily contiguous, that are arranged in ascending order in *L*. For instance, chains in the list **`[1, 3, 2, 4]`**, include **`[1]`**, **`[1, 3]`**, **`[1, 3, 4]`**, **`[1, 2, 4]`**, and **`[1, 4]`**.

Given an input list, compute the length of its longest chain. List elements are guaranteed to be unique. Examples:
getLengthOfLongestChain([1, 2, 3, 4])              -> 4  // [1, 2, 3, 4]
getLengthOfLongestChain([4, 3, 2, 1])              -> 1  // [1], [2], [3], or [4]
getLengthOfLongestChain([1, 3, 2, 4])              -> 3  // [1, 3, 4] or [1, 2, 4]
getLengthOfLongestChain([1, 3, 2, 4, 5, 8, 6, 7])  -> 6  // [1, 2, 4, 5, 6, 7]
getLengthOfLongestChain([10, 2, 7, 3, 6, 1, 4, 5]) -> 4  // [2, 3, 4, 5]
*/

/*
'''
❓ PROMPT
Ned and Mary want to choose a restaurant to bring their kids to for the evening, and they both have a list of their favorite places, represented by strings and sorted by preference. The place they each prefer the most is at the beginning of the list, and their least preferred at the end.

You need to help them find the optimal match to dine at based on their combined preferences score. They will often have to compromise, so their ideal option is a place they both have on their list, and it has the highest combined preference score.

To calculate the highest combined preference score, get the restaurant with the minimum index sum when adding the indices of the restaurant on both of their lists together. If multiple restaurants have the same highest score, output all of them.

Example(s)
Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: They both have "Shogun" on their preferred list and it has the highest preference score with an index sum of 1 (0+1). They both listed "KFC" but it has a lower preference score because the index sum is 3 (0+3). Likewise, "Burger King" has a preference score of 4 (2+2).

Input:
nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
Output: ["Guppy House", "In-n-Out"]
Explanation: They both have "Guppy House" and "In-n-Out" on their preferred list and both restaurants have the same highest total preference score with an index sum of 1 (0+1 and 1+0). They both listed "Dairy Queen" but the preference score is 4 (2+2).
 

🔎 EXPLORE
List your assumptions & discoveries:
 INPUT: 2 arrays representing lists of favorite restaurants
 - 0 index being the most preferred
 - last index being the least preferred

 OUTPUT: array of string/s representing the most optimal place to dine based on two peoples fav. lists

 - Will the input arrays be the same lengths? no
 - will there be any duplicates in the individual input arrays? no
 - Will each input array have a length x > 0 ? yes
 - will the same restaurants be in both arrays with varying order?
  * No, restauraunts may be in one or the other, or both arrays
 - what should the return be if there is no optimal location? []
 - will formating of each restaurant be the same? ie: capitalization, special characters, etc? assume yes



Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?


Algorithm 1:
 if we loop over the first input array and create a dictionary with the restaurant as the key and the index position as the value. Then we can loop over the second input array, checking against the dictionary. if the restaurant is in the dictionary, calculate the index sum and compare it to the lowest index sum. if it is smaller, replace the output array, if it is equal to, add the restaurant to the list.

Time: O(n) n being the length of the largest array
Space: O(m) m being the number of optimal restaurants
 
Algorithm 2:


📆 PLAN
Outline of algorithm #: 
  - initialize a dictionary {}
  - initialize a leastIndexSum integer: Infinity
  - initialize an output array: []
  - loop over first array to populate dictionary
    - key = restaurant
    - value = index positioning
  - loop over second array
    - if restaurant is in dictionary
      - get the sum of the value in dictionary and the current index of second loop
      - if smaller than leastIndexSum, replace output array == [new_restaurant]
      - if equal to leastIndexSum, push into output array
  return output array


🛠️ IMPLEMENT
function findCompatibleRestaurantsBetween(ned, mary) {
def findCompatibleRestaurantsBetween(ned: list[str], mary: list[str]) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findCompatibleRestaurantsBetween(ned, mary) {
  const dictionary = {};
  let lowestIndexSum = Infinity;
  let output = [];

  for (let i = 0; i < ned.length; i++) dictionary[ned[i]] = i;
  
  for (let i = 0; i < mary.length; i++) {
    if (Object.hasOwn(dictionary, mary[i])) {
      let sum = dictionary[mary[i]] + i;

      if (sum < lowestIndexSum) {
        lowestIndexSum = sum;
        output = [mary[i]];
      } else if (sum === lowestIndexSum) {
        output.push(mary[i]);
      }
    }
  }
  // console.log(output)
  return output;
}

let nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
let marysChoices = [
  "Piatti",
  "The Grill at Torrey Pines",
  "Hungry Hunter Steakhouse",
  "Shogun",
];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Shogun"])
);

nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
marysChoices = ["KFC", "Shogun", "Burger King"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Shogun"])
);

nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"];
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices).sort()
  ) === JSON.stringify(["Guppy House", "In-n-Out"].sort())
);

nedsChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"];
marysChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Olive Garden"])
);

nedsChoices = ["Hometown Buffet", "Olive Garden", "Red Lobster"];
marysChoices = ["Panda Express", "Denny's", "Red Lobster"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Red Lobster"])
);

nedsChoices = ["Costco Food Court"];
marysChoices = ["Costco Food Court"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Costco Food Court"])
);

nedsChoices = ["Costco Food Court", "Saigon Deli", "Med Mix"];
marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices).sort()
  ) === JSON.stringify(["Saigon Deli", "Costco Food Court", "Med Mix"].sort())
);

nedsChoices = ["Costco Food Court"];
marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"];
console.log(
  JSON.stringify(
    findCompatibleRestaurantsBetween(nedsChoices, marysChoices)
  ) === JSON.stringify(["Costco Food Court"])
);


// robs solution
function choiceList(choices1, choices2) {
  const sum = (arr) => arr.reduce((a, b) => a + +b, 0);

  const counts = [
    ...Object.entries(choices1),
    ...Object.entries(choices2),
  ].reduce((p, [i, e]) => ({ ...p, [e]: p[e] ? [...p[e], i] : [i] }), {});

  let lowest = [" "];
  let lowSum = Infinity;

  let choiceFreq;
  let choiceSum;

  for (let choice in counts) {
    choiceFreq = counts[choice].length; // either 1 or 2
    choiceSum = sum(counts[choice]);

    if (choiceSum === lowSum && choiceFreq === 2) {
      lowest.push(choice);
    } else if (choiceFreq === 2 && choiceSum < lowSum) {
      lowest = [choice];
      lowSum = choiceSum;
    }
  }

  return lowest;
}