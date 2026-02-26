function combinations(arr, r) {
  const result = [];
  const path = [];
  
  function backtrack(start) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1);
      path.pop();
    }
  }
  
  backtrack(0);
  return result;
}

console.log(combinations(['a','b','c','d','e'], 2));