/*
 * Problem 22: Implement Stack
 * Implement a stack data structure in JavaScript with the following methods: `push()`, `pop()`, `top()` and `isEmpty()` 
 * */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }

  top() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.top());
stack.pop();
console.log(stack.top());
console.log(stack.isEmpty());
