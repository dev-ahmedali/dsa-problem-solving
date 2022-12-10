class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
  }
  appned(value) {
   let node = new Node(value)
   this.tail.next = node
   this.tail = node
  }
}

let list = new LinkedList(100);
list.appned(200)
list.appned(300)
list.appned(400)
console.log(list);
