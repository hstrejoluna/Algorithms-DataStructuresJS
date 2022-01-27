function DoubleLinkedList(node){
  this.node = node;
  this.node.isHead ? this.head = this.node.value : this.head = "nil";
  this.node.isTail ? this.tail = this.node.value : this.tail = "nil";
}



function NodeDouble(value, next, prev, isHead, isTail ) {
  this.value = value;
  this.next = next;
  this.prev = prev;
  this.isTail = isTail;
  (this.prev == "nil") ? this.isHead = true : this.isHead = false; 
  (this.isTail);
  (this.next == "nil") ? this.isTail = true : this.isTail = false;
}

let nodet = new DoubleLinkedList( new NodeDouble(2, 20, "nil"))




console.log(nodet)