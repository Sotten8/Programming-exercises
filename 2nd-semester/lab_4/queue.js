export default class queue {
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
        return `Highest: ${JSON.stringify(el)}`;
      case 'lowest':
        acc = this.queue.reduce(
          (obj, current) => (obj.priority < current.priority ? obj : current),
          0
        );
        index = this.queue.indexOf(acc);
        el = this.queue.splice(index, 1);
        return `Lowest: [${JSON.stringify(el)}]`;
      case 'oldest':
        el = this.queue.shift();
        return `Oldest: [${JSON.stringify(el)}]`;
      case 'newest':
        el = this.queue.pop();
        return `Newest: ${JSON.stringify(el)}`;
      default:
        throw new Error('The choice is incorrect');
    }
  }

  pick(choice) {
    if (this.queue.length === 0) return 'Nothing to peek';

    let el;
    switch (choice) {
      case 'highest':
        el = this.queue.reduce(
          (obj, current) => (obj.priority > current.priority ? obj : current),
          0
        );
        return `Highest: ${JSON.stringify(el)}`;
      case 'lowest':
        el = this.queue.reduce(
          (obj, current) => (obj.priority < current.priority ? obj : current),
          0
        );
        return `Lowest: ${JSON.stringify(el)}`;
      case 'oldest':
        el = this.queue[0];
        return `Oldest: ${JSON.stringify(el)}`;
      case 'newest':
        el = this.queue[this.queue.length - 1];
        return `Newest: ${JSON.stringify(el)}`;
      default:
        throw new Error('The choice is incorrect');
    }
  }
}
