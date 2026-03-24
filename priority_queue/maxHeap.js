class MaxHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp()
  }

  pop() {
    const max = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return max;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] >= this.items[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let biggerChild = leftChild;
      if (rightChild < this.size() && this.items[rightChild] > this.items[leftChild]) biggerChild = rightChild;
      if (this.items[index] >= this.items[biggerChild]) break;
      this.swap(biggerChild, index);
      index = biggerChild;
    }
  }
}

const heap = new MaxHeap();

for (const i of [5,3,10,1]) {
  heap.push(i);
}

console.log(heap);