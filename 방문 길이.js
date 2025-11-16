function solution(dirs) {
  let x = 0, y = 0;  // 현재 위치
  let prevX = 0, prevY = 0;  // 이전 위치 (초기 시작점)
  const visited = new Set();  // 경로 키 저장용 Set
  let answer = 0;

  for (const dir of dirs) {
    let nx = x, ny = y;  // 새 위치 계산

    if (dir === 'U') nx += 1;
    else if (dir === 'D') nx -= 1;
    else if (dir === 'R') ny += 1;
    else if (dir === 'L') ny -= 1;

    // 범위 체크: -5 ~ 5
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 경로 키 생성: [minX,minY,maxX,maxY] 문자열
    const minX = Math.min(prevX, nx);
    const minY = Math.min(prevY, ny);
    const maxX = Math.max(prevX, nx);
    const maxY = Math.max(prevY, ny);
    const pathKey = `${minX},${minY},${maxX},${maxY}`;

    // 중복 체크
    if (!visited.has(pathKey)) {
      visited.add(pathKey);
      answer += 1;
    }

    // 위치 업데이트
    prevX = x;
    prevY = y;
    x = nx;
    y = ny;
  }

  return answer;
}

// 테스트
console.log(solution('ULURRDLLU'));  // 출력: 7