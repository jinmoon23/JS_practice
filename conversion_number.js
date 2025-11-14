const str = '123.45'

console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.45
console.log(Number('abc')); // NaN(변환 실패)