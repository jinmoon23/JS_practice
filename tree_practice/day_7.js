// 함수 설명: 트리를 전위, 중위, 후위 순회하여 그 순서를 반환
// @params nodes(arr), idx(int), result(arr)
function preorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  result.push(nodes[idx]);
  preorder(nodes, idx * 2 + 1, result);
  preorder(nodes, idx * 2 + 2, result);

  return result;
}

function inorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  inorder(nodes, idx * 2 + 1, result);
  result.push(nodes[idx]);
  inorder(nodes, idx * 2 + 2, result);

  return result;
}

function postorder(nodes, idx = 0, result = []) {
  if (idx >= nodes.length) return result;

  postorder(nodes, idx * 2 + 1, result);
  postorder(nodes, idx * 2 + 2, result);
  result.push(nodes[idx]);

  return result;
}

console.log(preorder([1,2,3,4,5,6,7,8,9,10]));
console.log(inorder([1,2,3,4,5,6,7,8,9,10]));
console.log(postorder([1,2,3,4,5,6,7,8,9,10]));