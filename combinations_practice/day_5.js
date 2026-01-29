// 함수의 목적: 배열(arr)과 뽑으려는 수(r)를 인자로 받아 배열의 원소를 r개 조합해 배열로 반환
// @params arr, r
function combinations(arr, r) {
  // 1. r이 0이면 "빈 조합" 반환, 즉 1가지의 경우의 수를 나타냄
  if (r === 0) return [[]];
  // 2. arr.length가 0이거나 r보다 작다면 만들 수 있는 조합이 없음을 나타내는 [] 반환, 즉 0가지의 경우의 수를 나타냄
  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest, r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a', 'b', 'c', 'd', 'e'], 2));