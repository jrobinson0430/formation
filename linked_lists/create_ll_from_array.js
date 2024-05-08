class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayify(head) { // for testing purposes only
  let ptr = head;
  var array = [];
  while (ptr != null) {
    array.push(ptr.value);
    ptr = ptr.next;
  }
  return array;
}

function createLinkedList(array) {
  let list = new ListNode(null);
  let current = null;

  for (let val of array) {
    const node = new ListNode(val);

    if (!current) {
      list.value = val;
      current = list;
    } else {
      current.next = node;
      current = current.next;
    }
  }
  return list;
}

const array1 = [1, 2];
const array2 = [1, 2, 3, 4, 5];
console.log(createLinkedList(array1));
console.log(arrayify(createLinkedList(array1)));
