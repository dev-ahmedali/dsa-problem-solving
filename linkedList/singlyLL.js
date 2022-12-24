class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
  }

  travers() {
    let ptr = this.head;
    while(ptr != null) {
        ptr = ptr.next 
    }
  }
}

let list = new LinkedList(10)

list.travers()
console.log(list);

