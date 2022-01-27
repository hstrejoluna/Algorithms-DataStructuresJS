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
}