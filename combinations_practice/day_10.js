// 함수의 목적 : 모든 조합 경우의 수를 반환
// @params arr(arr), r(int)
function combinations(arr, r) {
  // 1. r이 0이면 아무것도 뽑지 않는 경우의 수 1가지를 반환
  if (r === 0) return [[]];
  // 2. arr.length가 0이거나 r보다 작다면 불가능한 경우
  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 3));