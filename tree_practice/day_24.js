function preorder(nodes, idx, result) {
  if (idx >= nodes.length) return result;
  
  result.push(nodes[idx]);
  preorder(nodes, idx * 2 + 1, result);
  preorder(nodes, idx * 2 + 1, result);

  return result;
}

function inorder(nodes, idx, result) {
  if (idx >= nodes.length) return result;

  inorder(nodes, idx * 2 + 1, result);
  result.push(nodes[idx]);
  inorder(nodes, idx * 2 + 2, result);

  return result;
}

function postorder(nodes, idx, result) {
  if (idx >= nodes.length) return result;

  postorder(nodes, idx * 2 + 1, result);
  postorder(nodes, idx * 2 + 2, result);
  result.push(nodes[idx]);

  return result;
}


console.log(preorder([1,2,3,4,5,6,7], 0, []));
console.log(inorder([1,2,3,4,5,6,7], 0, []));
console.log(postorder([1,2,3,4,5,6,7], 0, []));