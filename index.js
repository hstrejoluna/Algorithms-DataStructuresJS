class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.length = 1;
    this.tail = this.head;

  }

  printList() {
    let array = [];
    let currentList = this.head;
    while (currentList != null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(' <--> '));
    return this;
  }

  // Insert node at the end of the list
  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  }

  // insert a node at the start of the list
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
    this.printList();
  }

  // Insert node at a given index
  insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {
      console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    }

    // if index is 0, prepend
    if(index == 0){
      this.prepend(value);
      return this;
    }

    // if index is equal to this.length, append
    if(index == this.length){
      this.append(value);
      return this;
    }

    // Reach the node at that index
    let newNode = new Node(value);
    let previousNode = this.head;

    for(let k = 0; k < index - 1; k++){
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next

  }
}