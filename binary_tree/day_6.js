class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 함수의 목적 : bst 트리에 값 삽입
// @params root(Node), val(int)
function insert(root, val) {
  if (root === null) return new Node(val);
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  return root;
}

// 함수의 목적 : bst 순회하며 값 찾고 불리언 값 반환
// @params root(Node), val(int)
function search(root, val) {
  if (root === null) return false;
  if (val === root.val) return true;

  if (val < root.val) return search(root.left, val);
  return search(root.right, val);
}

// 함수의 목적 : bst에 특정한 값이 있는지 순회하며 확인하고 불리언 값을 반환
// @params lst(arr), searchList(arr)
function solutions(lst, searchList) {
  let root = null;
  for (const val of lst) {
    root = insert(root, val);
  }
  return searchList.map((num) => search(root, num));
}

console.log(solutions([5,3,8,4,2,1,7,10], [1,2,5,6]));