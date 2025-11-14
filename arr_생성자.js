const arr1 = new Array(6);
const arr2 = [...new Array(6)].map((_, i) => i + 1);
console.log(arr1);
console.log(arr2);

// Array.fill();

const arr = new Array(6).fill(0);

console.log(arr);

// 2차원 배열 선언
const matrix = [...new Array(3)].map((_, i) => new Array(4).fill(i));
console.log(matrix);

// 더 간단한 배열 선언
const rows = 3;
const cols = 4;
const matrixForm = Array.from({ length: rows }, () => new Array(cols).fill(0));
const matrixForm2 = Array.from({ length:3 }, (_, i) => new Array(4).fill(i));
console.log(matrixForm);
console.log(matrixForm2);