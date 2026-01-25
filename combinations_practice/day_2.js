function combinations(arr, r) {
  // 1. 뽑고자 하는 개수 r이 0인 경우
  if (r === 0) return [[]];
  // 2. arr.length가 0이거나 r보다 작은 경우
  if (arr.length === 0 || r > arr.length) return [];

  // 3. first와 rest를 arr에서 분리
  const [first, ...rest] = arr;

  // 4. first를 포함하지 않는 재귀
  const withoutFirst = combinations(rest, r);
  // 5. first를 포함하는 재귀
  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 4));