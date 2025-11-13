const arr = [1, 2, 3];

const sum1 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

const sum2 = arr.reduce((acc, curr) => acc + curr, 100);
console.log(sum2);

const multiple = arr.reduce((acc, curr) => acc * curr, 2);
console.log(multiple);
