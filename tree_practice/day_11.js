// 함수의 목적 : 트리를 순회하며 그 순회 순서를 반환
// @params nodes(arr), idx(int), result(arr)
function preorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  result.push(nodes[idx]);
  preorder(nodes, idx * 2 + 1, result);
  preorder(nodes, idx * 2 + 1, result);

  return result;
}

function inorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  inorder(nodes, idx * 2 + 1, result);
  result.push(nodes[idx]);
  inorder(nodes, idx * 2 + 1, result);

  return result;
}

function postorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  postorder(nodes, idx * 2 + 1, result);
  postorder(nodes, idx * 2 + 2, result);
  result.push(nodes[idx]);

  return result;
}

console.log(preorder([1,2,3,4,5,6,7]));
console.log(inorder([1,2,3,4,5,6,7]));
console.log(postorder([1,2,3,4,5,6,7]));