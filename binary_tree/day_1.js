class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, val) {
  // 1. root에 값이 없는 경우(최초 1번)
  if (root === null) return new Node(val);
  // 2. root 보다 값이 크거나 작은 경우 트리를 타며 삽입
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }
  
  return root;
}

function search(root, val) {
  if (root === null) return false;
  if (root.val === val) return true;
  if (val < root.val) return search(root.left, val);
  return search(root.right, val);
}

function solutions(arr, searchArr) {
  let root = null;
  for (const val of arr) {
    root = insert(root, val);
  }
  return searchArr.map((num) => search(root, num));
}

console.log(solutions([5,3,8,4,2,1,7,10], [1,2,5,6]));
console.log(solutions([1,3,5,7,9], [2,4,6,8,10]));