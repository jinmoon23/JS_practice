function solutions(graph, start) {
  const mapped = {};
  for (const [s, e] of graph) {
    if (!(s in mapped)) mapped[s] = [];
    mapped[s].push(e);
  }
  
  function dfs(node) {
    visited.add(node);
    result.push(node);

    const connected = mapped[node] ?? [];
    for (const nextNode of connected) {
      if (!visited.has(nextNode)) {
        dfs(nextNode);
      }
    }
  }

  const visited = new Set();
  const result = [];

  dfs(start);

  return result;
}


console.log(solutions([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solutions([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));