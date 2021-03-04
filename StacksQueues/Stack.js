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
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top) {
            return null
        }
        if(this.top===this.bottom) {
            this.bottom=null
        }
        const holdingPointer = this.top; 
        // this is no longer referenced and used, will be removed from memory by JS garbage collector
        this.top = this.top.next;
        this.length--;
        //return holdingPointer;
        return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push('google')
  myStack.push('udemy')
  myStack.push('Discord')
  myStack.peek()
  myStack.pop()