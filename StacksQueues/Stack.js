// Most programming lang are modeled with Sacks architectur in mind - LIFO O(n)
//e.g., wen fn gets called, usually they follow LIFO O(1)
// e.g., browser history back and forth, undo-redo O(1)
// lookup, pop, push, peek O(1)
// Build with Array(faster access in memory cuz they are next to each oter) / static and dynamic
// or LinkedList (scattered all over memroy, use extram memory But more dynamic)

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
    }
    push(value){
    }
    pop(){
    }
    //isEmpty
  }
  
  const myStack = new Stack();