/*
* 자바스크립트 문법으로 답안 작성
* 함수 인자와 반환 값은 문제에 따라 적절하게 수정하여 제출
*/
// @params total은 가진 금액 총액
function solution(total){
  let minChange = total;
  const best = { '연필': 0,'볼펜': 0,'샤프': 0 };

  for (let sharp = 0; sharp <= Math.floor(total / 900); sharp++) {
    for (let pen = 0; pen <= Math.floor((total - 900 * sharp) / 700); pen++) {
      const remain = total - 900 * sharp - 700 * pen;
      const pencil = Math.floor(remain / 500);
      const change = remain - (500 * pencil);
      if (remain < 0 || change < 0) continue;

      if (change < minChange) {
        minChange = change;
        best.연필 = pencil; best.볼펜 = pen; best.샤프 = sharp;
      }
    }
  }
    
  return `연필 ${best.연필}개, 볼펜 ${best.볼펜}개, 샤프 ${best.샤프}개, 잔돈${minChange}`;
}

    


// 인자 값은 지원자가 적절하게 수정하여 제출
console.log( solution(2400) );
console.log( solution(2900) );
console.log( solution(3000) );