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
    this.length = 1;
  }
  appned(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head
    this.head = node;
    this.length++;
  }

  print() {
    let data = this.head;
    while (data != null) {
      data = data.next;
    }
  }

  appendAt(value, position) {
    if (position === 1) {
      this.prepend(value);
    } else if (position === this.length + 1) {
      this.appned(value);
    } else {
      let node = new Node(value);
      let prevNode = this.findNode(position - 1);
      node.next = prevNode.next;
      prevNode.next = node;
      this.length++;
      console.log({ prevNode: prevNode.value });
    }
  }
//  remove linked list
  remove(position) {
    let node = this.findNode(position),
      prevNode = this.findNode(position - 1);

    prevNode.next = node.next;
    this.length--;
  }

  findNode(n) {
    let count = 1;
    let data = this.head;
    while (data) {
      if (count == n) break;
      count++;
      data = data.next;
    }
    return data;
  }
}

let list = new LinkedList(100);
list.appned(200);
list.appned(300);
list.appned(400);
list.appned(9000);
list.prepend(50);
list.prepend(5000);

list.appendAt(-5, 1);
list.appendAt(1000, 7);
list.appendAt(70, 3);
list.remove(2);
// list.remove(5);
// list.remove(6);

list.print();
// console.log(list.head);
console.log(list);
