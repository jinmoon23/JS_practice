// N명의 사람이 원 형태로 서있습니다. 각 사람은 1부터 N까지 번호가 매겨져 있습니다. 
// 그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
// 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
// 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다. 
// N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution 함수를 구현하세요

function solution(N, K) {
  const queue = [];
  // 1. 순서대로 번호를 넣은 큐 생성
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  // 2. 큐에 하나만 남을때까지 동작하는 루프 생성
  while (queue.length != 1) {
    // 3. 항상 시작점이 기준점이 되도록 i = 1 설정
    // 제거되상이 되는 K 이전의 번호는 shift 후 push하여 제거하지 않고 건너뛰기 구현
    // for문 동작 이후 queue의 front는 제거되어야 하는 K번째 번호가 됨
    for (let i = 1; i < K; i++) {
      queue.push(queue.shift());
    }
    // 4. 제거되어야 하는 K번째 번호 제거
    queue.shift();
  }
  // 5. 마지막에 남은 번호 pop 하고 반환
  return queue.pop();
} 

console.log(solution(5, 2));