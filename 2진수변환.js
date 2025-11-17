function solution(dec) {
  // 1. stack 선언
  // 2. dec를 2로 나눠 나머지가 0이 될 때까지 나누기
  // 3. 나눌 때마다 나머지를 stack에 담기
  // 4. 2번 작업이 끝나면 stack을 전부 pop해서 반환
  const stack = [];
  divider(dec,stack);
  let answer = '';
  while (stack.length > 0) {
    answer += stack.pop();
  }
  return answer;

}

function divider(num, stack) {
  if (num === 0) return;
  const mod = num % 2;
  // 중요! 파이썬의 //와 같음
  num = parseInt(num / 2);
  stack.push(mod);
  return divider(num,stack);
}
console.log(solution(12345));