class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solutions(graph, start) {
  const connections = {};
  for (const [curr, next] of graph) {
    if (!(curr in connections)) connections[curr] = [];
    connections[curr].push(next);
  }

  function bfs(node) {
    const q = new Queue();
    q.push(node);
    visited.add(node);
    result.push(node);

    while(!q.isEmpty()) {
      const current = q.pop();
      const neighbors = connections[current] ?? [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          q.push(neighbor);
          visited.add(neighbor);
          result.push(neighbor);
        }
      }
    }
  }

  const visited = new Set();
  const result = [];

  bfs(start);

  return result;
}

console.log(solutions([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solutions([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));