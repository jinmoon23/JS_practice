class MinHeap {
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
    
    while(index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while(index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1, rightChild = index * 2 + 2;
      let smallerChild = leftChild;
      if (rightChild < this.size() && this.items[rightChild] < this.items[leftChild]) {
        smallerChild = rightChild;
      }
      if (this.items[smallerChild] <= this.items[index]) break;
      this.swap(smallerChild, index);
      index = smallerChild;
    }
  }

}

function solutions(graph, start) {
  // 1. graph의 키를 활용해 각 노드 길이를 최대값으로 초기화
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }

  // 2. 시작 노드의 길이는 0으로 초기화
  distances[start] = 0;

  // 3. 경로를 담을 paths 객체 초기화
  const paths = { [start] : [start] };

  // 4. 우선순위 큐 초기화
  const q = new MinHeap();
  q.push([start, distances[start]]) // 시작지점 노드와 길이 푸시

  while(q.size() > 0) {
    const [currentNode, currentDistance] = q.pop();
    // 5. distances 배열의 값 길이가 이미 더 작은 경우 추가적인 연산을 진행하지 않아도 됨
    if (distances[currentNode] < currentDistance) continue;
    const neighborNodes = graph[currentNode];
    for (const node in neighborNodes) {
      const weight = neighborNodes[node];
      const distance = weight + currentDistance;
      // 6. 새로 계산한 distance가 더 작은 경우 그 값으로 재할당
      if (distance < distances[node]) {
        distances[node] = distance;
        q.push([node, distance]);
        paths[node] = [...paths[currentNode], node];
      }
    }
  }
  Object.keys(paths).sort();
  return [distances, paths];
}

console.log(solutions({'A': {'B': 9, 'C': 3}, 'B': {'A': 5}, 'C': {'B': 1}}, 'A'))
console.log(solutions({
  'A': {'B': 1},
  'B': {'C': 5},
  'C': {'D': 1},
  'D': {}
}, 'A'))