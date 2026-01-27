function combinations(arr, r) {
  // 1. r이 0이면 재귀를 돌기 전에 "아무것도 선택하지 않는 경우"를 반환하면서 해당 함수를 종료
  if (r === 0) return [[]];
  // 2. 아래의 경우는 재귀를 돌다가 만나는 "불가능한 경우"이므로 이전 함수 콜스택으로 돌아감
  if (arr.length === 0 || r > arr.length) return [];

  const [first, ...rest] = arr;

  const withoutFirst = combinations(rest,r);

  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];


}

console.log(combinations(['a','b','c','d','e'], 2));