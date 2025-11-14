function solution(input) {
    const numbers = input.split(' ').map(num => Number(num));
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(solution('1 2 3'));