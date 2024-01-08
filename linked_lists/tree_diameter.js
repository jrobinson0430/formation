let test1 = {
  value: 0,
  left: {
    value: 1,
    left: null,
    right: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 5,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
}; // 6
test2 = {
    "value": 1,
    "left": null,
    "right": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 4,
            "left": {
                "value": 6,
                "left": null,
                "right": null
            },
            "right": {
                "value": 5,
                "left": null,
                "right": null
            }
        }
    }
} // 5

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/*
INPUT: binary tree: t

OUTPUT: integer representing the length of the longest path from node to node
* may or may not include the root


EXPLORE:
- what traversal method is most appropriate?
- is backtracking a viable option here?
- how do we determine the solution if the start of the path is a leaf and ends on a leaf?

if we start at the root the only ways to make a node to node connection is :
root-left
root-right
left-root-right

if the node has a left and a right you know it is a valid path with a length of 3
if the node has one child (left or right), you can only increment the path count by 1

so you start on the root node and determine if there is a left or right or both and use a counter to track. once one side of the tree becomes a leaf you stop searching that side/incrementing. once you reach leaves on both sides, that is the length of the path. make a comparision to a global longestPath integer and move on to the next node to repeat the process. *** flawed logic ***

            4
        2       3
    1
    
    root:
    2 - 4
    4 - 3
    2 - 4 - 3

    1 - 2 - 4 - 3
    
    recursive call on the children
    do we need to include this nodes parent node or is it processed on the previous levels check?
        i feel like we would not include it because it should be calculated on the last level.
    first left:
    1 - 2
    
    first right:
    -
    
    Do we need an additional loop to call the dfs helper with each node as its 'root' to cover all possibilities?

PLAN:
- initialize a global longestPath integer
- dfs function
    - local pathlength integer
    - if node has a left child, recursive call on left, increment
    - if node has right child, recursive call on the right, increment 1

 
*/

function solution(t) {
    let longestPath = 0;
    if (!t) return longestPath;
    
    // logically flawed because once you remove the  subtree from the root you can no longer count both children.
    // once the path is split from the 'root' you can only count either the left or the right nodes. see first example, last level
    // need to go back to the drawing board..
    function dfs(node, path = 1) {
        if (node.left) path++;
        if (node.right) path++

        node.left && dfs(node.left, path);
        node.right && dfs(node.right, path);
        
        longestPath = path > longestPath ? path : longestPath
    }

    
    const queue = [t];
    
    
    while(queue.length) {
        const currentRoot = queue.shift();
        
        dfs(currentRoot);
        
        currentRoot.left && queue.push(currentRoot.left);
        currentRoot.right && queue.push(currentRoot.right)        

    }
    console.log(longestPath)
    return longestPath
}
