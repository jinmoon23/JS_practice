// JavaScript 테스트 환경에 오신 것을 환영합니다!
// 이 파일에서 JavaScript 코드를 작성하고 테스트할 수 있습니다.

console.log('Hello, JavaScript!');

// 예제: 간단한 함수
function add(a, b) {
  return a + b;
}

console.log('2 + 3 =', add(2, 3));

// 예제: 배열 메서드
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('배열 두 배:', doubled);

// 예제: 비동기 함수
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('데이터 로드 완료!');
    }, 1000);
  });
}

fetchData().then(data => console.log(data));
