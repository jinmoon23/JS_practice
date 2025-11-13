// array.map(callback(element[, index[, array]])[, thisArg])
const arr = [1, 2, 3];

const doubleArr = arr.map(x => x * 2);
console.log(doubleArr);

const indexed = arr.map((item, index) => item + index + 10);
console.log(indexed);

// 문자열 배열 포매팅
const words = ['world', 'tour'];

const addedWords1 = words.map(word => '!' + word);
const addedWords2 = words.map(word => word + '!');
console.log(addedWords1);
console.log(addedWords2);

// 객체 배열에서 특정 속성 추출
const stocks = [{symbol: 'AAPL', price: 150}, {symbol: 'GOOGL', price: 2800}];

const prices = stocks.map(stock => stock.price);
const symbols = stocks.map(stock => stock.symbol);
console.log(prices);
console.log(symbols);

// 조건부 변환
const numbers = [1,2,3,4];

const labels = numbers.map(num => num % 2 === 0 ? 'even' : 'odd');
console.log(labels);