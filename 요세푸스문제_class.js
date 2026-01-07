class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  shift() {
    return this.items[this.front++];
  }
  size() {
    return this.rear - this.front;
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  
  while (queue.size > 1) {
    for (let i = 1; i < K; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  console.log(queue);
  return queue.shift();
}

console.log(solution(5,2));