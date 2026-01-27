class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, val) {
  // 1. root가 null인 경우 -> 최초의 루트 생성
  if (root === null) return new Node(val);
  // 2. 이후에 들어온 값이 root보다 작거나 크면 각 레벨마다 재귀 동작
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }
  // 여기가 중요
  return root;
}

function search(root, val) {
  // 1. root가 null이면 찾지 못한 것. false 반환
  if (root === null) return false;
  // 2. val이 root.val과 같으면 찾은 것. true 반환
  if (val === root.val) return true;
  // 3. val이 root.val보다 크거나 캍으면 각 레벨마다 재귀 동작
  if (val < root.val) return search(root.left, val);
  return search(root.right, val);
}

function solutions(lst, searchList) {
  let root = null;
  // 1. BST 생성
  for (const val of lst) {
    root = insert(root, val)
  }
  return searchList.map((num) => search(root, num));
}

console.log([5,3,6,4,2,1,7,10], [1,2,5,6]);