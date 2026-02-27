function combinations(arr, r) {
  const picked = [];
  const result = [];

  function backtrack(start) {
    if (picked.length === r) {
      result.push([...picked]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      picked.push(arr[i]);
      backtrack(i + 1);
      picked.pop();
    }
  }
  backtrack(0);
  return result;
}

console.log(combinations(['a','b','c','d','e'], 2));