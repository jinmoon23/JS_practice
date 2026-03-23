class MinHeap{
  constructor() {
    this.items = [];
  }
  
  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop()
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while(index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    // 왼쪽 자식 존재 확인
    while(index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      // 더 작은 자식 찾기
      let smallerChild = 
        // 오른쪽 자식이 인덱스 범위 넘어가지 않는지 체크
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild;

      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

const heap = new MinHeap();
heap.push(5);
heap.push(3);
heap.push(10);
heap.push(1);

console.log(heap);

console.log(heap.pop());