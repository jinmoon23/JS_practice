// 특정 노드 x의 루트 노드를 찾아 반환
function find(parents, x) {
  // 자기 자신이 루트 노드인 경우 루트 노드를 찾았으니 자기 자신을 반환
  if (parents[x] === x) return x;
  // 자기 자신이 루트 노드가 아닌 경우 경로 압축
  // parents[x]는 x의 부모 노드
  // 즉, 부모 노드를 find 함수에 넣고 재귀적으로 루트 노드 탐색
  parents[x] = find(parents, parents[x]);
  
  return parents[x];
}

function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);
  // 기준 없이 단순히 root2를 root1에 합침
  parents[root2] = root1;
}

function solutions(k, operations) {
  // 초기에는 0,1,2 노드의 부모노드는 자기 자신인 0,1,2
  const parents = Array.from({ length : k }, (_, i) => i);

  for (const op of operations) {
    if (op[0] === 'u') {
      union(parents, op[1], op[2]);
    } else if (op[0] === 'f') {
      find(parents, op[1]);
    }
  }
  // 연산이 종료된 후 parents 배열을 순회하며 find 연산으로 루트를 찾고 최종 집합의 개수를 반환
  const roots = [];
  for (let i = 0; i < k; i++) {
    const root = find(parents, i);
    roots.push(root);
  }
  // 루트가 같으면 같은 집합에 속하는 것이니 Set로 중복 제거
  const rootSet = new Set(roots);
  return rootSet.size;
}

console.log(solutions(3,[['u',0,1], ['u',1,2],['f',2]]));
console.log(solutions(4,[['u',0,1], ['u',2,3],['f',0]]));

