/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // assign firstNode to the first node in the queue
      let firstNode = this.first;
      //  re-assign this.first to the 2nd node since first node is being removed
      this.first = newNode;
      newNode.next = firstNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // if stack is empty, throw an error
    if (!this.first) throw new Error("Queue is empty");

    // if stack has only 1 node in it, assign this.last to null
    if (this.first == this.last) {
      this.last = null;
    }
    // otherwise,
    // assign nodeToRemove to the first node in the stack before it's removed
    let nodeToRemove = this.first;
    //  re-assign this.first to the 2nd node in the stack since first node is being removed
    this.first = this.first.next;
    // decrement the stack size by 1 since the first node was removed
    this.size--;
    // return the value of the node removed
    return nodeToRemove.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.size) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
