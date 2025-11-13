// array.filter(callback(element[, index[, array]])[, thisArg])
// callback은 반드시 true 또는 false를 반환해야 함.

const arr = [1, 2, 3, 4, 5, 6];

const evens = arr.filter(x => x % 2 === 0);

console.log(evens);

// 인덱스 기반 필터링
const strArr = ['a', 'b', 'c'];
const later = strArr.filter((_, index) => index > 0);
console.log(later)

// 객체 배열 처리
const users = [{name: '김철수', age: 25}, {name: '이영희', age: 30}];
const adults = users.filter(user => user.age >= 30);
console.log(adults)

// 문자열 배열 필터링
const words = ['cat', 'dog', 'elephant', 'rat'];
const longwords = words.filter(word => word.length >= 4);
console.log(longwords);

// 검색 기능 구현
const userNames = ['김철수', '이영희', '김민수'];
const searchTerm = '김';
const matches = userNames.filter(name => name.includes(searchTerm));
console.log(matches);

// 금융 데이터 처리
const accounts = [
  {id: 1, balance: 1000, active: true},
  {id: 2, balance: 500, active: false},
  {id: 3, balance: 2000, active: true}
];
const activeAccounts = accounts.filter(acc => acc.active);
console.log(activeAccounts); 

// 다중 조건 필터링
const people = [
  {name: '김철수', age: 25, city: '서울'},
  {name: '이영희', age: 30, city: '부산'},
  {name: '박민수', age: 28, city: '서울'}
];
const filtered = people.filter(p => p.age >= 26 && p.city === '서울');
console.log(filtered); 