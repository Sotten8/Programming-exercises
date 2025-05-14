import Queue from './queue.js';

const queue = new Queue();

queue.enqueue('Smth', 1);
queue.enqueue('Smth2', 3);
queue.enqueue('Smth1', 2);
console.log(queue.getInfo());

console.log(queue.pick('highest'));
console.log(queue.pick('lowest'));
console.log(queue.pick('oldest'));
console.log(queue.pick('newest'));
console.log(queue.getInfo());

console.log(queue.dequeue('highest'));
console.log(queue.dequeue('lowest'));
console.log(queue.getInfo());
console.log(queue.dequeue('oldest'));
console.log(queue.dequeue('newest'));
