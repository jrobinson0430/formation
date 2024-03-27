/*
'''
You are tasked with building a screen that shows the top games being played on a classic board game app. To prevent the games from jumping around on the screen, you must write a function with the following constraints:

Given two arrays, 'oldIDs' and 'newIDs', return an array that meets the following criteria:
- result contains all values from newIDs
- all new ids that currently exist in oldIDs are in the same index as they were in oldIDs
 

EXAMPLE(S)
oldIDs: [1, 2, 3] --> oldSet  --> {1,2,3}
newIDs: [2, 3, 4]  --> newSet --> { 2, 3, 4}
differenceSet=new-Old= {4} or [4]
result: [4, 2, 3]

oldIDs: [1, 2, 3, 4]
newIDs: [4, 3, 2, 1]
result: [1, 2, 3, 4]

oldIDs: [1, 2, 3]
newIDs: [3, 4, 5]
result: [4, 5, 3] or [5, 4, 3]
 
questions:
- old ids and new ids array will be the same length? yes
- will the values in each array be unique? yes
- can return either result if there are multiple answer


iterate oldIDs and store the value and it's index to hashmap
create a length of answer array that's same length as newIDs

having array of non filled index in sorted order
[_,_,x,_,_,x ]

iterate range 0 to len(newIDs) and if index is not taken:
append to index array


iterate newIDs and check if value is in oldID hashmap, then we put that into the answer array index
else: you can store that in separate array and then process those after 

return the answer results

[None for range(len(newIDs))]


approach two:
- iterate through new array
- if value is in old id, record its position in a hashmap
- have a pointer at the front position

approach three:
- iterate over the oldIds array and create a set.
- iterate over newIds array and create a set.
- if value is not in old set, add it to a difference array

- iterate over oldIds array. 
  - if element exists in newSet, do nothing
  - if it doesn't, replace with value from differenceSet/differenceArray

FUNCTION SIGNATURE
function preserveIndices(oldIDs: [string], newIDs: [string]) => result: [string]

def preserveIndices(oldIDs, newIDs):
    old_set, new_set = set(oldIDs), set(newIDs)
    
    difference_arr = []
    for n in newIDs:
        if n not in old_set:
            difference_arr.append(n)
    
    i = 0         
    for j in range(len(oldIDs)):
        num = oldIDs[j]
        if num not in new_set:
            oldIDs[j] = difference_arr[i]
            i+=1
    
    return oldIDs

'''
*/

function preserveIndices(oldIDs, newIDs) {
  const oldSet = new Set([...oldIDs])
  const newSet = new Set()
  const diffArr = []

  // create a set from newIDs and building an array of values we need to replace
  for (const num of newIDs) {
    if (!oldSet.has(num)) {
      diffArr.push(num)
    }
    newSet.add(num)
  }
  console.log('diffArr', diffArr)
  // iterate through oldIDs array and replace nums that don't exist in newSet
  for (let i = 0; i < oldIDs.length; i++) {
    const num = oldIDs[i]
    if (!newSet.has(num)) {
      const replaceNum = diffArr.pop()
      oldIDs[i] = replaceNum
    }
  }

  return oldIDs
}


console.log(preserveIndices([1, 2, 3], [2, 3, 4])) // => [4, 2, 3]

console.log(preserveIndices([1, 2, 3, 4], [4, 3, 2, 1])) // => [1, 2, 3, 4]

console.log(preserveIndices([1, 2, 3], [3, 4, 5])) // => [4, 5, 3] or [5, 4, 3]

console.log(preserveIndices([11, 12, 14, 16], [12, 21, 16, 11])) // => [11, 12, 21, 16]


function preserveIndices(oldIDs, newIDs) {
  const oldSet = new Set(oldIDs);
  const newSet = new Set(newIDs);
  const onlyNewIds = newIDs.filter(id => !oldSet.has(id));
  const result = [];
  
  oldIDs.forEach(oldID => {
    if (newSet.has(oldID)) {
      // keep this in the same spot
      result.push(oldID);
    } else {
      // pull from the stack of brand new IDs
      result.push(onlyNewIds.pop());
    }
  });
  
  return result;
}