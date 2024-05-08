/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/*
INPUT: array of sorted linked lists.
OUTPUT: a single merged linked list in ascending order

CONSTRAINTS:
K >= 0 && K K < 1000
lists[i] >= 0 && lists[i] <= 500
lists[i] is sorted in ascending order
the total length of all lists[i] < 1000

EXPLORE:
* how would we solve this problem if there were only 2 linked lists to merge?
  - would this solution apply to this problem?
  - is there a more optimal solution that merges all linked lists at the same time?
  */
var mergeKLists = function (lists) {
  if (lists.length == 1) return lists[0];
  if (!lists.length) return null;

  while (lists.length > 1) {
    const temp = [];

    for (let i = 0; i < lists.length; i += 2) {
      let listA = lists[i];
      let listB = lists[i + 1];

      temp.push(merge(listA, listB));
    }
    
    lists = temp;
  }

  function merge(list1, list2) {
    // return sentinel.next to reference the head of our mergedList
    const sentinel = new ListNode();
    let mergedList = sentinel;

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        mergedList.next = list1;
        list1 = list1.next;
      } else {
        mergedList.next = list2;
        list2 = list2.next;
      }
      mergedList = mergedList.next;
    }
    if (list1) mergedList.next = list1;
    if (list2) mergedList.next = list2;

    return sentinel.next;
  }

  return lists[0];
};
