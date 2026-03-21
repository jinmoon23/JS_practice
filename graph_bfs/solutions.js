function solutions(graph, start) {
  const connections = {};
  for (const [curr, next] of graph) {
    if (!(curr in connections)) connections[curr] = [];
    connections[curr].push(next);
  }
  function bfs(node) {
    const q = [];
    q.push(node);
    visited.add(node);
    result.push(node);

    while(q.length > 0) {
      const current = q.shift();
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

  bfs(start, visited, result);

  return result;
}


console.log(solutions([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solutions([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));