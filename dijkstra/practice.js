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
      if (this.items[parentIndex] <= this.items[index]) break
      this.swap(parentIndex, index);
      index = parentIndex;      
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      const leftChild = index * 2 + 1, rightChild = index * 2 + 2;
      let smallerChild = leftChild;
      if (rightChild < this.size() && this.items[leftChild] > this.items[rightChild]) {
        smallerChild = rightChild;
      } 
      if (this.items[index] <= this.items[smallerChild]) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

}
function solutions(graph, start) {
  // 1. distances 초기화
  const distances = {}; 
  for (const node in graph) {
    distances[node] = Infinity;
  }
  // 2. 시작 노드 distance 0으로 초기화
  distances[start] = 0;
  // 3. 우선순위 큐 설정
  const q = new MinHeap();
  // 시작 노드를 큐에 삽입
  q.push([distances[start], start]); // 거리, 노드
  // 4. 시작 노드 경로 초기화
  const paths = { [start] : [start] };
  
  while(q.size() > 0) {
    // 5. 현재 가장 거리 값이 작은 노드를 가져옴
    const [currentDistance, currentNode] = q.pop();
    // 6. 만약 현재 노드의 거리가 큐에서 가져온 거리보다 크면
    // 이미 처리된 것이므로 continue
    if (distances[currentNode] < currentDistance) continue;
    // 7. 현재 노드와 인접한 노드들의 거리 비교
    const neighborNodes = graph[currentNode];
    for (const neigborNode in neighborNodes) {
      const weight = neighborNodes[neigborNode];
      const distance = weight + currentDistance;
      // 8. 현재 계산한 거리가 기존 거리보다 작으면 최소 비용 및 최단 경로 업데이트
      if (distance < distances[neigborNode]) {
        distances[neigborNode] = distance;
        paths[neigborNode] = [...paths[currentNode], neigborNode]
        // 9. 최소 경로가 갱신된 거리와 함께 큐에 푸시
        q.push([distance, neigborNode]);
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