class MinHeap {
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  // 배열의 가장 뒤에 삽입한 후 거슬러 올라감
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  // 배열의 가장 앞 값을 빼낸 뒤 우선순위 큐를 다시 정렬함
  pop() {
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    // parentIndex * 2 + 1 or 2 = childIndex
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let smallerChild = leftChild;
      if (rightChild < this.size() && this.items[rightChild] < this.items[leftChild]) smallerChild = rightChild;
      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

const heap = new MinHeap();
for (const i of [5,3,10,1]) {
  heap.push(i);
}

console.log(heap);
console.log(heap.pop());
console.log(heap.pop());