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
  // 1. 모든 노드의 거리 값을 무한대로 초기화
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }
  // 2. 시작 노드의 거리 값은 0으로 초기화
  distances[start] = 0;
  console.log('distances:', distances);
  // 힙 생성
  const q = new MinHeap();
  // 3. 시작 노드를 큐에 삽입
  q.push([distances[start], start]);
  // 4. 시작 노드의 경로를 초기화
  const paths = { [start] : [start] };
  console.log('paths: ', paths);
  while (q.size() > 0) {
    // 5. 현재 가장 거리 값이 작은 노드를 가져옴
    const [currentDistance, currentNode] = q.pop();
    // 6. 만약 현재 노드의 거리 값이 큐에서 가져온 거리 값보다 크면, 해당 노드는 이미 처리 된 것이므로 무시
    if (distances[currentNode] < currentDistance) continue;
    // 7. 현재 노드와 인접한 노드들의 거리 값을 계산하여 업데이트
    for (const neighborNode in graph[currentNode]) {
      const weight = graph[currentNode][neighborNode];
      const distance = currentDistance + weight;
      // 8. 현재 계산한 거리 값이 기존 거리 값보다 적으면 최소 비용 및 최단 정보 업데이트
      if (distance < distances[neighborNode]) {
        distances[neighborNode] = distance;
        paths[neighborNode] = [...paths[currentNode], neighborNode];
        console.log('paths: ', paths);
        // 9. 최소 경로가 갱신된 비용과 함께 큐에 푸시
        q.push([distance, neighborNode]);
      }
    }
  }
  // 10. paths 배열을 노드 번호에 따라 오름차순 정렬하여 반환
  const sortedPaths = {};
  Object.keys(paths).sort().forEach((node) => {
    sortedPaths[node] = paths[node];
  });

  return [distances, sortedPaths];
}

console.log(solutions({'A': {'B': 9, 'C': 3}, 'B': {'A': 5}, 'C': {'B': 1}}, 'A'))
console.log(solutions({
  'A': {'B': 1},
  'B': {'C': 5},
  'C': {'D': 1},
  'D': {}
}, 'A'))
