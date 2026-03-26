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
      const leftChild = index * 2 + 1, rightChild = index * 2 + 2;
      let smallerChild = leftChild;
      if (rightChild < this.size() && this.items[rightChild] < this.items[leftChild]) {
        smallerChild = rightChild;
      }
      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(smallerChild, index);
      index = smallerChild;
    }
  }
}

function solutions(graph, start) {
  // 1. 거리를 담은 객체 초기화
  const distances = {};
  // 2. graph의 키를 키로 가지고 값을 Infinity로 가지도록 초기화
  for (const node in graph) {
    distances[node] = Infinity;
  }
  // 3. start 노드의 길이는 0으로 초기화
  distances[start] = 0;
  // 4. 최단경로를 담을 객체 초기화
  const paths = { [start] : [start] }; 

  // 5. minHeap으로 구현된 우선순위 큐 선언
  const q = new MinHeap();
  // 6. q 초기값 푸시
  q.push([distances[start], start]);

  while (q.size() > 0) {
    // 7. 현재 거리와 현재 노드 pop
    const [currentDistance, currentNode] = q.pop();
    // 8. 현재 노드의 distances 상 거리가 뽑은 거리보다 작으면 이미 최단 거리이므로 연산 종료
    if (distances[currentNode] < currentDistance) continue;
    // 9. 현재 노드와 인접 노드들 거리 비교
    const neighbors = graph[currentNode];
    for (const node in neighbors) {
      const weight = neighbors[node];
      const distance = weight + currentDistance;
      // 10. 현재 계산한 거리가 기존 거리보다 작으면 업데이트
      if (distance < distances[node]) {
        distances[node] = distance;
        paths[node] = [...paths[currentNode], node];
        // 11. 최소 경로가 갱신된 거리와 함께 큐에 푸시
        q.push([distance, node]);
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
