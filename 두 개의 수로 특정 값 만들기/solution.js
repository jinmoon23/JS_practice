// n개의 양의 정수로 이루어진 리스트 arr과 정수 target
// 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하는 함수 작성

// n은 2 이상 10,000 이하의 자연수
// arr의 각 원소는 1이상 10,000 이하의 자연수
// arr의 원소 중 중복되는 원소는 없음
// target은 1 이상 20,000 이하의 자연수

function solution(arr, target) {
  const dict = {};
  // 1. 인덱스가 arr의 숫자이고 값이 arr 배열에 존재하는지 여부를 판단할 수 있는 해시테이블 생성
  const hashTable = new Array(Math.max(...arr) + 1).fill(0);
  for (const n of arr) {
    hashTable[n] = 1;
  }
  // 2. 중복되는 경우 제거를 위한 divider
  const divider = target % 2 == 0 ? target / 2 - 1 : Math.floor(target / 2) ;
  // 3. arr 원소 중 합해서 target이 되는 수를 키/값으로 저장
  for (const num of arr) {
    if (num <= divider) {
      dict[num] = target - num;
    }
  }
  // 4. dict의 키값을 순회하며 arr 존재 여부 확인
  for (const [key, value] of Object.entries(dict)) {
    if (hashTable[Number(key)] == 1 && hashTable[value] == 1) return true;
  }
  return false;
}

console.log(solution([1,2,3,4,8],6)); // true
console.log(solution([2,3,5,9],10)); // false
console.log(solution([1,10], 11));       // true
console.log(solution([5], 10));          // false
console.log(solution([1,2,3], 7));       // false (3+4 없음)
console.log(solution([1,5,9], 10));      // true (1+9)