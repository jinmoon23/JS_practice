function preorder(nodes, idx = 0, result = []) {
  // 1. idx가 nodes.length 이상이면 재귀 종료
  if (idx >= nodes.length) return result;

  // 2. preorder
  result.push(nodes[idx]);
  preorder(nodes, idx * 2 + 1, result);
  preorder(nodes, idx * 2 + 2, result);

  return result;
}

function inorder(nodes, idx = 0, result = []) {
  // 1. idx가 nodes.length 이상이면 재귀 종료
  if (idx >= nodes.length) return result;

  inorder(nodes, idx * 2 + 1, result);
  // 2. inorder
  result.push(nodes[idx]);
  inorder(nodes, idx * 2 + 2, result);

  return result;
}

function postorder(nodes, idx = 0, result = []) {
  // 1. idx nodes.length 이상이면 재귀 종료
  if (idx >= nodes.length) return result;

  postorder(nodes, idx * 2 + 1, result);
  postorder(nodes, idx * 2 + 2, result);
  // 2. postorder
  result.push(nodes[idx]);

  return result;
}


console.log(preorder([1,2,3,4,5,6,7]));
console.log(inorder([1,2,3,4,5,6,7]));
console.log(postorder([1,2,3,4,5,6,7]));