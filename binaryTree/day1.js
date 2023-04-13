class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class binaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    let current = this.root;
    while (true) {
      if (current.value < value) {
        if (!current.right) {
          let newNode = new Node(value);
          current.right = newNode;
          break;
        }
        current = current.right
    }
        else {
            if(!current.left) {
                let newNode = new Node(value)
                current.left = newNode;
                break;
            }
            current = current.left
        }
       
  
    }
  }
}

let tree = new binaryTree(10);

tree.insert(20);
