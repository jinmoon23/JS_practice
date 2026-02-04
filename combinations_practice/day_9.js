// 함수의 목적 : 배열과 뽑으려는 수에 맞는 조합 반환
// @params arr(arr), r(int)
function combinations(arr, r) {
  if (r === 0) return [[]];

  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);
  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 3));