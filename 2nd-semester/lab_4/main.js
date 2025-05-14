import Queue from './queue.js';

const queue = new Queue();

queue.enqueue('Smth', 1);
queue.enqueue('Smth 2', 3);
queue.enqueue('Smth 1', 2);
console.log(queue.getInfo());

console.log(queue.peek('highest'));
console.log(queue.peek('lowest'));
console.log(queue.peek('oldest'));
console.log(queue.peek('newest'));
console.log(queue.getInfo());

console.log(queue.dequeue('highest'));
console.log(queue.dequeue('lowest'));
console.log(queue.getInfo());
console.log(queue.dequeue('oldest'));
console.log(queue.dequeue('newest'));
