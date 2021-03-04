// e.g., waiting queue - FIFO
// Lot of use e.g, online ticket counter, resturant reserv or order food, lift, printer etc. 
// lookpu O(n), enqueue O(1), dequeue O(1), peek O(1)
// Build with Array or Linkedlist O(1) - But Array not a good idea (index shifting)

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
            return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
      if(!this.first) {
        return null
      }
      if(this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }
  
  const myQueue = new Queue();
  
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  myQueue.peek();
  myQueue.dequeue();