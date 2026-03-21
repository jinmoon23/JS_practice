function solutions(graph, start) {
  const connections = {};
  for (const [prev, next] of graph) {
    if (!connections[prev]) connections[prev] = [next];
    else connections[prev].push(next);
  }
  console.log(connections);

  function dfs(node) {
    visited.add(node);
    result.push(node);
    // 핵심 -> 리프 노드의 경우 인접 노드가 없으므로 connections[node]에서 undefined를 반환하여 에러가 발생한다.
    // 이를 방지하기 위해 || []를 하는것.
    (connections[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    })
  }
  const visited = new Set();
  const result = [];

  dfs(start, visited, result);
  return result;
}

console.log(solutions([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solutions([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));