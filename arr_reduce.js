// reduce : 배열의 각 요소를 순회하며 누적 계산을 수행해 단일 값을 반환
// 합계, 최대값, 객체 변환 등에 자주 사용됨

// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// accumulator: 이전 콜백의 반환값 (누적 결과)
// currentValue: 현재 처리 중인 배열 요소
// initialValue (선택): 초기 누적값. 생략 시 배열의 첫 번째 요소가 초기값이 되고, 순회는 두 번째부터 시작
const arr = [1, 2, 3];

const sum1 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

const sum2 = arr.reduce((acc, curr) => acc + curr, 100);
console.log(sum2);

const multiple = arr.reduce((acc, curr) => acc * curr, 2);
console.log(multiple);

// 최대/최소값 찾기
const numbers = [5, 1, 8, 3];
const maxNum = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(maxNum, max, min);

// 배열 평탄화
const nested = [[1, 2], [3, 4]];
const flatted = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatted);

// 객체 배열 합산
const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);