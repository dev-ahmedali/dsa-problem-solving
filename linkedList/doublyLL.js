function createNode(value) {
  return {
    value: value,
    next: null,
    prev: null,
  };
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.prev?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }
}

const doublyList = new DoublyLinkedList();

doublyList.insert(7)
doublyList.insert(8)
doublyList.insert(9)
doublyList.print()
