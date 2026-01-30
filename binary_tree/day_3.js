class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// 함수의 목적: root 인스턴스와 val(int) 값을 받아 bst 생성
// @params root(instance), val(int)
function insert(root, val) {
  if (root === null) return new Node(val);
  
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  return root;
}
// 함수의 목적: root 인스턴스와 val(int) 값을 받아 값 찾기
// @params root(instance), val(int)
function search(root, val) {
  if (root === null) return false;
  if (val === root.val) return true;

  if (val < root.val) {
    return search(root.left, val);
  } return search(root.right, val);
}

// 함수의 목적: bst를 만들고자 하는 arr와 찾고자 하는 값을 담은 배열을 받아 삽입 및 조회 후 불리언 값을 반환
// @params lst(arr), searchList(arr)
function solutions(lst, searchList) {
  let root = null;
  for (const val of lst) {
    root = insert(root, val);
  }
  return searchList.map((num) => search(root, num));
}

console.log(solutions([5,3,8,4,2,1,7,10], [1,2,5,6]));
console.log(solutions([1,3,5,7,9], [2,4,6,8,10]));