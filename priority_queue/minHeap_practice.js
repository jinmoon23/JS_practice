class MinHeap{
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  // 배열의 끝에 추가한 뒤, 부모보다 작으면 계속 위로 올림(최소힙 조건 준수)
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  // 최소값은 항상 루트에 있으니 저장해두고 마지막 원소를 루트에 올린 뒤 최소힙 조건에 따라 아래로 내림
  pop() {
    // 가장 앞의 값을 반환하기 위해 저장해두고
    const min = this.items[0];
    // 가장 마지막 값을 가장 앞으로 가져옴(임시적) -> 배열의 가장 앞 값과 가장 뒤 값이 같은 값으로 할당된다.
    this.items[0] = this.items[this.size() - 1];
    // 가장 마지막 값을 빼냄
    this.items.pop();
    this.bubbleDown();
    return min;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  bubbleUp() {
    let index = this.size() - 1;

    while(index > 0) {
      // 부모 인덱스가 p일 때 왼쪽 자식: 2p + 1, 오른쪽 자식: 2p + 2이기 때문에 p를 구하려면 역으로 계산하면 됨 
      const parentIndex = Math.floor((index - 1) / 2);
      // 이미 부모 인덱스가 더 작은 상태라면 더 이상 올라가지 않아도 됨
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    // 내려갈 왼쪽 자식이 있는지 체크
    while(index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const smallerChild = 
        rightChild < this.size() && this.items[rightChild] > this.items[leftChild] ? leftChild : rightChild;
      
      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

const heap = new MinHeap();
heap.push(3);
heap.push(5);
heap.push(10);
heap.push(1);
console.log(heap);
console.log(heap.pop());
console.log(heap.pop());
