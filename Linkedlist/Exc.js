//Reversing linked list

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; //reference or pointer
        this.length = 1;
    }
    append(input) {
      const obj = {
        value: input,
        next: null
      }
      //const newNode = new Node(input);
      this.tail.next = obj;
      this.tail = obj;
      this.length++;
      return this;
    }
  
    prepend(input) {
        const newNode = {
            value: input,
            next: null
            //next: this.head
          } 
        newNode.next = this.head; //pointer
        this.head = newNode;
        this.length++;
        return this;
    }
  
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode);
            currentNode = currentNode.next;
        }
        return array;
    }
  
    insert(index, value) {
      if(index >= index.length) { 
        //check we wanna insert on 200 index
        this.append(value);
        return this.printList();
      }
      const newNode = {
        value: value,
        next: null
      };
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList()
    }
    traverseToIndex(index) {
      //add check params first
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index) {
    //check we wanna insert on 200 index    
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList()
    }

    reverse() {
        if(!this.head.next) { 
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }
        this.head.next = null;
        this.head = first;
        //return this.printList();
        return this;
      }
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  //myLinkedList.printList();
  //myLinkedList.insert(2, 99);
  //myLinkedList.printList();
  //console.log(myLinkedList);
  //myLinkedList.remove(2);
  myLinkedList.reverse();