function combinations(arr, r) {
  if (r === 0) return [[]];
  if (r > arr.length || arr.length === 0) return [];

  const [first, ...rest] = arr;
  
  const withoutFirst = combinations(rest, r);
  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}


console.log(combinations(['a','b','c','d','e'], 2));