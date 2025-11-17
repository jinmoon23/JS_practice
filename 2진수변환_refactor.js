function solution(dec) {
  if (dec === 0) return '0';
  let answer = '';
  while (dec > 0) {
    answer = (dec % 2) + answer;  // MSB부터 추가
    dec = parseInt(dec / 2);
  }
  return answer;
}

console.log(solution(10));