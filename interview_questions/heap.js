/*
'''
A priority queue is a data structure that allows inserting and removing data elements one at a time, keeps that data organized, and the removals are prioritized by some criteria: either the smallest current value first (as in a min heap), the largest (a max heap), or some other method of comparing and ordering the removals.

A heap is a specific way of implementing a priority queue. The key idea is to use an array, organized as a complete tree. Recall that a complete tree is one where every level except the last is full, and the last incomplete level has all of the nodes pushed to the left.

Being a complete tree, this can be implemented as an array:
- The root of the tree is at index zero.
- Given an index:
  - The left child is at (index * 2) + 1
  - The right child is at (index * 2) + 2
  - These can be reversed to compute a parent index

For this problem, start out building a Min Heap, that is, a heap where the smallest values bubble to the top and are removed first. As a follow on, you can modify this code to take a comparator function as a parameter to the constructor, allowing it to be a min or max heap.
 
maxHeap
0    1   2   3   4   5 6  7  8 9 <-- index
[20  19  17  13  15  8 5 11  9 10] <-- maxHeap vals
[6   7   12  15  10  17]           <-- minHeap vals

minHeap
        6
    7       12
15  10    17



maxHeap
             19 
         16       17
      13    15  8  5
    11  9 10   


6 7 12  15  10  17  
Explore:
 - We'll need an insertion, removing, and peek function for the heap  
  - peek should be O(1) ---> check index 0 of the array
  - to insert, place value at end, and then swap it with its parent as much as needed for heap to be sorted correctly
  - to remove, swap root with last value, delete last value, then swap root with children as needed for heap to be sorted correctly

EXAMPLE(S)
const h = new Heap(10);
h.peek() => undefined
h.add(3);
h.peek() => 3
h.add(2);
h.peek() => 2
h.remove() => 2
h.peek() => 3
h.add(4);
h.add(1);
h.add(5);
h.remove() => 1
 

FUNCTION SIGNATURE
class Heap {
  defaultComparator = (a, b) => a > b;
  constructor(capacity, comparator)
  add(value)
  remove()
  peek()
  // length should be available as the number of elements currently in the heap
}

'''
*/


class Heap {
  constructor(capacity, comparator = (a, b) => a > b) {
    this.capacity = capacity
    this.comparator = comparator
    this.values = []
  }
  // - Given an index:
  // - The left child is at (index * 2) + 1
  // - The right child is at (index * 2) + 2
  /*
  minHeap
        6
    7       12
 15  10    17
 
 0    1   2   3   4   5   6 <-- index
 [6   7   12  15  10  17       ] <-- vals
 [6   7   12  15  10  17 11]
  */
  add(value) {
    this.values.push(value);
    let current = this.size() - 1; //6

    while (current > 0) {
      let parentIdx = Math.floor((current - 1)/ 2) //2

      if (comparator(this.values[current], this.values[parentIdx])) {
        [this.values[current], this.values[parentIdx]] = [this.values[parentIdx], this.values[current]];
      } else {
        break;
      }
      
      current = parentIdx
    }
    
  }

  remove() {
    // swap 0 index with last index
    // remove last index
    // set current to 0 and move value to correct position (opposite of add)
      // find children indices and compare

  }

  peek() {
    
  }

  size() {
    return this.values.length
  }
  
  // length should be available as the number of elements currently in the heap
}

/*
Formation solution:
class Heap {

    // Min heap by default - comparator returns true if the first
    // parameter should be LOWER in the heap and false otherwise.
    defaultComparator = (a, b) => a > b;
    
    constructor(capacity, comparator = undefined) {
      this.data = Array(capacity).fill(undefined);
      this.length = 0;
      this.comparator = comparator || this.defaultComparator; 
    }
    
    add(val) {
      // Make more space in the array if needed.
      if (this.length === this.data.length) {
        this.data.push(undefined);
      }
      
      // the location where the new element will be stored
      let curr = this.length;
  
      this.data[curr] = val;
  
      // the heap now has one more element
      this.length++;
  
      // push the new value UP if needed
      while (curr > 0) {
        const p = this.parent(curr);
        const pval = this.data[p];
        const cval = this.data[curr];
        
        if (this.comparator(pval, cval)) {
          this.data[p] = cval;
          this.data[curr] = pval;
          curr = p;
        } else {
          break;
        }
      }
    }
  
    remove() {
      // return undefined if nothing in the heap
      if (this.length === 0) {
        return undefined;
      }
  
      // Grab the value at the top of the heap to be returned.
      const val = this.peek();
  
      this.length--;
      // Grab the value at the END and place it at the root
      this.data[0] = this.data[this.length];
      this.data[this.length] = undefined;
  
      // Now push that value DOWN to a new correct position.
      let curr = 0;
      while (curr < this.length - 1) {
        const cval = this.data[curr];
  
        const left = this.left(curr);
        const right = this.right(curr);
        const lval = this.data[left];
        const rval = this.data[right];
        
        const swapLeft = right >= this.length || this.comparator(rval, lval);
        const go = swapLeft ? left : right;
        const val = swapLeft ? lval : rval;
        
        if (this.comparator(cval, val)) {
          this.data[curr] = val;
          this.data[go] = cval;
          curr = go;
        } else {
          break;
        }
      }
      
      return val;
    }
    
    peek() {
      // Returns undefined if nothing in the heap.
      return this.data[0];
    }
    
    // compute the index of the parent of the given index
    parent(index) {
      const sub = index % 2 == 0 ? 2 : 1;
      return (index - sub) / 2;
    }
  
    // compute the index of the left child of the given parent
    left(index) {
      return index * 2 + 1;
    }
  
    // compute the index of the right child of the given parent
    right(index) {
      return index * 2 + 2;
    }
  }





// Alternative solution - modularized
class Heap {
    constructor(comparator = (a, b) => a > b) { //this function returns true if a should be higher than b; this makes sure the smallest element is always the root
        this.data = [];
        this.comparator = comparator;
    }

    add(value) {
        this.data.push(value); //add to the end of the array
        this.heapifyUp();
    }

    remove() {
        if (this.isEmpty()) {
            return undefined;
        }

        const value = this.peek();
        const lastValue = this.data.pop();

        if (this.size() > 0) {
            this.data[0] = lastValue;
            this.heapifyDown();
        }

        return value;
    }

    peek() {
        return this.isEmpty() ? undefined : this.data[0];
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    heapifyUp() { //moves it to the correct place in the tree
        // Start from the last element added at the end of the array
        let currentIndex = this.size() - 1;

        // Continue moving up until we reach the root of the heap (index 0)
        while (currentIndex > 0) {
            const parentIndex = this.parentIndex(currentIndex);

            // Check if the current node is in the correct position relative to its parent
            // The comparator should return true if the parent's order is correct
            if (this.comparator(this.data[parentIndex], this.data[currentIndex])) {
                break;  // If the order is correct, stop the sifting up process
            }

            // If the order is not correct, swap the current node with its parent
            this.swap(currentIndex, parentIndex);

            // Move up to the parent's index to continue sifting up if necessary
            currentIndex = parentIndex;
        }
    }

    heapifyDown() { //adjusts the heap after the root node has been removed
        let currentIndex = 0;  // Start from the root of the heap

        // Continue sifting down until reaching a node without children
        while (this.leftChildIndex(currentIndex) < this.size()) {
            let smallestChildIndex = this.leftChildIndex(currentIndex);

            // Check if there's a right child and if it's smaller than the left child
            if (this.rightChildIndex(currentIndex) < this.size() &&
                this.comparator(this.data[this.rightChildIndex(currentIndex)], this.data[smallestChildIndex])) {
                smallestChildIndex = this.rightChildIndex(currentIndex);
            }

            // Check if current node is smaller than the smallest child; if so, stop sifting down
            if (!this.comparator(this.data[currentIndex], this.data[smallestChildIndex])) {
                break;
            }

            // Swap the current node with its smallest child
            this.swap(currentIndex, smallestChildIndex);

            // Move the current index to the smallest child's index
            currentIndex = smallestChildIndex;
        }
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
}

function build(data, comp = undefined) {
  const h =  new Heap(data.length, comp);
  for (let i = 0; i < data.length; i++) {
    h.add(data[i]);
  }
  return h;
}

function testMin(size) {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(Math.floor((Math.random() * size * 3)));
  }

  const h = build(data);

  let prev = h.remove();
  while (h.length > 0) {
    if (prev > h.peek()) {
      console.log(data);
      console.log(h.data);
      return ["FAIL min:", next, sorted[i], i].join(' ');
    }
    h.remove();
  }
  return "PASS min";
}

function testMax(size) {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push(Math.floor((Math.random() * size * 3)));
  }

  const h = build(data, (a, b) => a < b);

  let prev = h.remove();
  while (h.length > 0) {
    if (prev < h.peek()) {
      console.log(data);
      console.log(h.data);
      return ["FAIL max:", next, sorted[i], i].join(' ');
    }
    h.remove();
  }
  return "PASS max";
}

console.log(testMin(100000));
console.log(testMax(100000));

// test expanding the capacity
const heap = new Heap(1);
heap.add(1);
heap.add(2);
console.log(heap.remove(), 1);
console.log(heap.remove(), 2);

python
class Heap:
    def __init__(self, capacity, comparator=None):
        self.data = [None] * capacity
        self.length = 0
        self.comparator = comparator or (lambda a, b: a > b)

    def add(self, val):
        if self.length == len(self.data):
            self.data.append(None)
        curr = self.length
        self.data[curr] = val
        self.length += 1
        while curr > 0:
            p = self.parent(curr)
            pval, cval = self.data[p], self.data[curr]
            if self.comparator(pval, cval):
                self.data[p], self.data[curr] = cval, pval
                curr = p
            else:
                break

    def remove(self):
        if self.length == 0:
            return None
        val = self.peek()
        self.length -= 1
        self.data[0], self.data[self.length] = self.data[self.length], None
        curr = 0
        while curr < self.length - 1:
            cval = self.data[curr]
            left, right = self.left(curr), self.right(curr)
            lval, rval = self.data[left], self.data[right]
            swapLeft = right >= self.length or self.comparator(rval, lval)
            go, val = (left, lval) if swapLeft else (right, rval)
            if self.comparator(cval, val):
                self.data[curr], self.data[go] = val, cval
                curr = go
            else:
                break
        return val

    def peek(self):
        return self.data[0] if self.length > 0 else None

    def parent(self, index):
        sub = 2 if index % 2 == 0 else 1
        return (index - sub) // 2

    def left(self, index):
        return index * 2 + 1

    def right(self, index):
        return index * 2 + 2

        import random

def build(data, comp=None):
    h = Heap(len(data), comp)
    for i in range(len(data)):
        h.add(data[i])
    return h

<space />

def test_min(size):
    data = [random.randint(0, size * 3) for _ in range(size)]
    h = build(data)

    prev = h.remove()
    while h.length > 0:
        if prev > h.peek():
            return f"FAIL min: {prev} > {h.peek()}"
        prev = h.remove()
    return "PASS min"

<space />

def test_max(size):
    data = [random.randint(0, size * 3) for _ in range(size)]
    h = build(data, lambda a, b: a < b)

    prev = h.remove()
    while h.length > 0:
        if prev < h.peek():
            return f"FAIL max: {prev} < {h.peek()}"
        prev = h.remove()
    return "PASS max"

<space />

print(test_min(100000))
print(test_max(100000))

# test expanding the capacity
heap = Heap(1)
heap.add(1)
heap.add(2)
print(heap.remove())  # 1
print(heap.remove())  # 2
*/