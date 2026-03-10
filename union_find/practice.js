// u: union 연산 -> 집합을 합치는 연산
// f: find 연산 -> 루트 노드를 찾는 연산
function find(parents, x) {
  // 찾고자 하는 루트가 자기 자신이라면 자신을 반환
  if (x === parents[x]) return x;
  // 찾고자 하는 루트가 자기 자신이 아니라면
  // find 연산을 재귀적으로 적용해 루트를 찾아 반환
  parents[x] = find(parents, parents[x]);

  return parents[x];
}

function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);

  parents[root2] = root1;
}
// k: 노드의 수, operations: 집합에 대한 개별 연산
function solutions(k, operations) {
  // 초기엔 자기 자신이 자신의 parents
  // idx는 자기 자신, value는 부모
  const parents = Array.from( {length : k}, (_, i) => i);
  
  for (const op of operations) {
    if (op[0] === 'u') {
      union(parents, op[1], op[2]);
    } else if (op[0] === 'f') {
      find(parents, op[1]);
    }
  }

  const roots = [];
  for (let i = 0; i < k; i++) {
    const root = find(parents, i);
    roots.push(root);
  }
  const rootSet = new Set(roots);
  return rootSet.size;
}

console.log(solutions(3,[['u',0,1], ['u',1,2],['f',2]]));
console.log(solutions(4,[['u',0,1], ['u',2,3],['f',0]]));