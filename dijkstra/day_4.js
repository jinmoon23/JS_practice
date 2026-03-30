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
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]]
  }

  bubbleUp() {
    let idx = this.size() - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.items[parentIdx][1] <= this.items[idx][1]) break;
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;

    while (idx * 2 + 1 < this.size()) {
      const leftChild = idx * 2 + 1, rightChild = idx * 2 + 2;
      let smallerChild = leftChild;
      if (rightChild < this.size() && this.items[rightChild][1] < this.items[leftChild][1]) {
        smallerChild = rightChild;
      }
      if (this.items[idx][1] <= this.items[smallerChild][1]) break;
      this.swap(smallerChild, idx)
      idx = smallerChild;
    }
  }
}


function solutions(graph, start) {
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  const paths = {[start] : [start]};

  const pq = new MinHeap();
  pq.push([start, distances[start]]);

  while (pq.size() > 0) {
    const [currNode, currDist] = pq.pop();
    if (distances[currNode] < currDist) continue;

    const neighborNodes = graph[currNode];

    for (const node in neighborNodes) {
      const weight = neighborNodes[node];
      const distance = weight + currDist;

      if (distance < distances[node]) {
        distances[node] = distance;
        pq.push([node, distance]);
        const newPath = [...paths[currNode], node];
        paths[node] = newPath;
      }
    }
  }
  return [distances, paths];
}

console.log(solutions({'A': {'B': 9, 'C': 3}, 'B': {'A': 5}, 'C': {'B': 1}}, 'A'))
console.log(solutions({
  'A': {'B': 1},
  'B': {'C': 5},
  'C': {'D': 1},
  'D': {}
}, 'A'))