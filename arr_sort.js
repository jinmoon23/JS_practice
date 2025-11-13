const arr = [3, 1, 2];

arr.sort((a,b) => a - b);
console.log(arr);

arr.sort((a,b) => b - a);
console.log(arr);

const arr2 = [[1,2,3], [4,5,6], [7,8,9]];
// arr2.sort((a[0], b[0]) => a[0] - b[0])