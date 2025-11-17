function solution(str) {
  // 1. 스택 정의
  // 2. ( 인 경우 푸시
  // 3. ) 인 경우  3-1. 비어있는지 확인 3-2. 비어있지 않다면 pop
  // 4. str 순회를 다 하고도 스택에 값이 남아있다면 false 반환

  const stack = [];

  for (const s of str) {
    if (s === '(') {
      stack.push(s);
    } else {
      if (stack.length !== 0) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

console.log(solution('(())()'));
console.log(solution('((()()'));
console.log(solution(')))(()()'));