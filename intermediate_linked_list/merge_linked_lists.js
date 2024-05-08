/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    /*
    we need to traverse both input lists and compare the current nodes in each list with each other and determine which is smaller. The smaller one will be added to the new list we initialized. the stop condition of the traversal will be when either list node is null. The next step is linking the remaining nodes in the longer list with the new list we created. return the new list.

- initialize a new linked list
- initialize 2 current variables, one for each list input
- create a while loop
    - stop: curr1 || curr2
    - compare the curr node values to each other
        - the smaller one gets added to the new list
            - if values are the same, pick one or the other.
        - that curr is set to the next node in that curr's list
    - after the while loop, get the list that is not empty
        - if (curr1)... and if (curr2) ...
            - link the rest of the input list to the new list
- return new list

    */
    // treat the first node as a sentinel
    let sentinel = new ListNode(null, null);
    let mergedList = sentinel;
    let curr1 = list1;
    let curr2 = list2;

    while(curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            mergedList.next = curr1;
            curr1 = curr1.next
        } else {
            mergedList.next = curr2;
            curr2 = curr2.next
        }
            mergedList = mergedList.next
    }

    if (curr1) mergedList.next = curr1;
    if (curr2) mergedList.next = curr2;

    return sentinel.next
};