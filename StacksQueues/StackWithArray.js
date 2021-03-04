// Most programming lang are modeled with Sacks architectur in mind - LIFO O(n)
//e.g., wen fn gets called, usually they follow LIFO O(1)
// e.g., browser history back and forth, undo-redo O(1)
// lookup, pop, push, peek O(1)
// Build with Array(faster access in memory cuz they are next to each oter) / static and dynamic
// or LinkedList (scattered all over memroy, use extram memory But more dynamic)

class Node {
    constructor(value){
      this.value = value;
    }
  }
  
  class Stack {
    constructor(){
      this.top = [];
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        //const value = new Node(value)
        this.top.push(value);
        this.length++;
        return this;
    }
    pop(){
        if(!this.top) {
            return null
        }
        this.top.pop();
        this.length--;
        return this;
    }
  }
  
  const myStack = new Stack();
  myStack.push('google')
  myStack.push('udemy')
  myStack.push('Discord')
  myStack.peek()
  myStack.pop()
  myStack.pop()