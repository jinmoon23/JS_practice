function solutions(graph, start) {
  // 1. graph 배열을 object로 변환
  const connections = {};
  for (const [curr, next] of graph) {
    if (!connections[curr]) connections[curr] = [next];
    connections[curr].push(next);
  }

  function dfs(node, visited, result) {
    visited.add(node); 
    result.push(node);

    const neighbors = connections[node] ?? [];
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    }
  }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  return result;
}


console.log(solutions([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solutions([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));