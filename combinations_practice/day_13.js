// 함수의 목적 : 조합 반환
// @params arr(arr), r(int)
function combinations(arr, r) {
  // 1. r === 0이면 공집합(아무것도 선택하지 않는 경우의수) 반환
  if (r === 0) return [[]];
  // 2. 불가능한 경우
  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 3));