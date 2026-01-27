// list를 첫 번째 인자로 받아 이진 탐색 트리를 생성하고
// 두 번째 인자인 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여
// 불리언값을 반환

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, val) {
  // 반복문의 최초 -> 루트노드 설정
  if (root === null) return new Node(val);
  // 값이 루트보다 작은 경우 좌측으로 삽입
  if (val < root.val) {
    root.left = insert(root.left, val);
  // 값이 루트보다 큰 경우 우측으로 삽입
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }
  return root;
}

function search(root, val) {
  // 순회 결과 값이 없을 때
  if (root === null) return false;
  // 순회 결과 값이 있을 때
  if (root.val === val) return true;
  if (val < root.val) return search(root.left, val);
  return search(root.right, val);
}

function solutions(lst, searchList) {
  let root = null;
  for (const val of lst) {
    root = insert(root, val);
  }
  return searchList.map((num) => search(root, num));
}

console.log(solutions([5,3,8,4,2,1,7,10], [1,2,5,6]));
console.log(solutions([1,3,5,7,9], [2,4,6,8,10]));
