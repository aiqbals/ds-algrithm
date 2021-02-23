//Doubly linked list - from singly linked list
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head; //reference or pointer
        this.length = 1;
    }
  
    append(input) {
      const newNode = {
        value: input,
        next: null,
        prev: null
      }
      //const newNode = new Node(input);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(input) {
        const newNode = {
            value: input,
            next: null,
            prev: null     
        } 
        newNode.next = this.head;
        this.head.prev = newNode;
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
        next: null,
        prev: null
      };
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
      console.log(this);
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
      unwantedNode.prev = leader;
      this.length--;
      return this.printList()
    }
  }
  
  const myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  //myLinkedList.printList();
  myLinkedList.insert(2, 99);
  //myLinkedList.printList();
  //console.log(myLinkedList);
  //myLinkedList.remove(2);