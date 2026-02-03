class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 함수의 목적 : bst 생성을 위한 노드 삽입
// @params : root(Node), val(int)
function insert(root, val) {
  if (root === null) return new Node(val);
  if (val < root.val) {
    root.left = insert(root.left, val);
  }
  else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  return root;
}

// 함수의 목적 : bst에서 num을 찾아 불리언값 반환
function search(root, val) {
  if (root === null) return false;
  if (val === root.val) return true;
  
  if (val < root.val) {
    return search(root.left, val);
  } else if (val > root.val) {
    return search(root.right, val);
  }
}

// 함수의 목적: 배열1과 배열2를 받아 배열1로 bst를 생성하고 배열2의 값이 bst에 존재하는지 여부 반환
// @params : lst(arr), searchList(arr)
function solutions(lst, searchList) {
  let root = null;

  for (const val of lst) {
    root = insert(root, val);  
  }

  return searchList.map((num) => search(root, num));
}

console.log(solutions([5,3,8,4,2,1,7,10], [1,2,5,6]));