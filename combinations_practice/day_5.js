function combinations(arr, r) {
  // 1. r이 0인 경우 "아무것도 선택되지 않은 공집합" 반환
  if (r === 0) return [[]];
  // 2. arr.length 가 0이거나 r보다 작은 경우 더 이상 진행하면 안되는 경우
  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 2));