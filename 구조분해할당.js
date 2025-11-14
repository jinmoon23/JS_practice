const arr = ["Hello", "world", "!"];
const [first, second] = arr;
console.log(first, second);

const obj = {name: "이선협", age: 25};
const {name, age} = obj;
console.log(name, age);

// 값 교환하기
let a = 5;
let b = 10; 

[a, b] = [b, a];

console.log(a,b);
