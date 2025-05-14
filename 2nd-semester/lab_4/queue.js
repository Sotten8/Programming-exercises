export default class Queue {
  constructor() {
    this.queue = [];
  }

  getInfo() {
    return this.queue;
  }

  enqueue(item, priority) {
    const obj = {
      item,
      priority,
    };
    this.queue.push(obj);
  }

  dequeue(choice) {
    if (this.queue.length === 0) return 'Nothing to dequeue';

    let acc;
    let index;
    let el;
    switch (choice) {
      case 'highest':
        acc = this.queue.reduce(
          (obj, current) => (obj.priority > current.priority ? obj : current),
          0
        );

        index = this.queue.indexOf(acc);
        el = this.queue.splice(index, 1);
        return el;
      case 'lowest':
        acc = this.queue.reduce(
          (obj, current) => (obj.priority < current.priority ? obj : current),
          0
        );

        index = this.queue.indexOf(acc);
        el = this.queue.splice(index, 1);
        return el;
      case 'oldest':
        el = this.queue.shift();
        return el;
      case 'newest':
        el = this.queue.pop();
        return el;
      default:
        throw new Error('The choice is incorrect');
    }
  }

  peek(choice) {
    if (this.queue.length === 0) return 'Nothing to peek';

    let el;
    switch (choice) {
      case 'highest':
        el = this.queue.reduce(
          (obj, current) => (obj.priority > current.priority ? obj : current),
          0
        );
        return el;
      case 'lowest':
        el = this.queue.reduce(
          (obj, current) => (obj.priority < current.priority ? obj : current),
          0
        );
        return el;
      case 'oldest':
        el = this.queue[0];
        return el;
      case 'newest':
        el = this.queue[this.queue.length - 1];
        return el;
      default:
        throw new Error('The choice is incorrect');
    }
  }
}
