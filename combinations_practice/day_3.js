function combinations(arr, r) {
  // 1. r이 0일 경우 함수 종료 -> 0개를 고르는 방법의 개수를 표현
  if (r === 0) return [[]];
  // 2. arr.length가 0일 경우 또는 r보다 작은 경우 함수 종료 -> 이 경우는 아예 조합이 존재할 수 없음
  // 따라서 조합이 하나도 없다는 의미로 []를 반환
  if (arr.length === 0 || r > arr.length) return [];

  // 3. first와 rest를 arr로부터 분리
  const [first, ...rest] = arr;

  // 4. first를 가져가지 않는 조합
  const withoutFirst = combinations(rest, r);

  // 5. fist를 가져가는 조합
  const withFirst = combinations(rest, r - 1).map((comb) => [first, ...comb]);

  return [...withoutFirst, ...withFirst];
}

console.log(combinations(['a','b','c','d','e'], 2))