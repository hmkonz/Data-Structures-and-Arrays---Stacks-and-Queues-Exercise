/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue and increase length of queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // if queue is empty, throw an error
    if (!this.first) throw new Error("Queue is empty");

    // if queue has only 1 node in it, assign this.last to null
    if (this.first == this.last) {
      this.last = null;
    }
    // otherwise,
    // assign nodeToRemove to the first node in the queue before it's removed
    let nodeToRemove = this.first;
    //  re-assign this.first to the 2nd node since first node is being removed
    this.first = this.first.next;
    // decrement the queue size by 1 since the first node was removed
    this.size--;
    // return the value of the node removed
    return nodeToRemove.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.size) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
