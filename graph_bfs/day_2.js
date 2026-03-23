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
    return this.rear === this.front;
  }
}

function solutions(graph, start) {
  const mapped = {};
  for (const [s, e] of graph) {
    if (!(s in mapped)) mapped[s] = [];
    mapped[s].push(e);
  }

  function bfs(node) {
    const q = new Queue();
    q.push(node);
    visited.add(node);
    result.push(node);

    while(!q.isEmpty()) {
      const poped = q.pop();
      const connected = mapped[poped] ?? [];
      
      for (const nextNode of connected) {
        if (!visited.has(nextNode)) {
          q.push(nextNode);
          visited.add(nextNode);
          result.push(nextNode);
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