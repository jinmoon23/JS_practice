function solution(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i,j);
      arr.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));