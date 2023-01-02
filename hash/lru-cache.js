class LRUCache {
  constructor(capacity) {
    this.map = {};
    this.list = new DoublyLinkedList();
    this.capacity = capacity;
    this.size = 0;
  }

  get(key) {
    if (!this.map[key]) return -1;

    // if key exits
    const node = this.map[key];
    this.list.moveToFront(node);
    return node.value;
  }

  put(key, value) {
    // key exits
    // update the value, move to front
    if (this.map[key]) {
      const node = this.map[key];
      node.value = value;
      this.list.moveToFront(node);
      return;
    }

    if (this.size === this.capacity) {
      const lastNode = this.list.removeLast();
      delete this.map[lastNode.key];
      this.size -= 1;
    }

    const newNode = new ListNode(key, value);
    this.list.add(newNode);
    this.map[key] = newNode;
    this.size += 1;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode();
    this.tail = new ListNode();
    this.connect(this.head, this.tail);
  }
  add() {
    this.connect(node, this.head.next);
    this.connect(this.head.node);
  }

  removeLast() {
    const lastNode = this.tail.prev;
    this.delete(lastNode);
    return lastNode;
  }

  moveToFront(node) {
    this.delete(node);
    this.add(node);
  }

  connect(node1, node2) {
    node1.next = node2;
    node2.prev = node1;
  }

  delete(node) {
    this.connect(node.prev, node.next);
  }
}

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
