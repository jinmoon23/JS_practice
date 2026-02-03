// 함수의 목적 : 배열에서 특정 수의 원소를 조합하여 배열로 반환
// @params : arr(arr), r(int)
function combinations(arr, r) {
  // 1. 0개를 뽑는 경우의 수는 아무것도 뽑지 않는 1가지
  if (r === 0) return [[]];
  // 2. 경우의수에 포함되지 않는 경우
  if (arr.length === 0 || r > arr.length) return [];
  
  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations([1,2,3,4,5,6,7], 2))