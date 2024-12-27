export class LinkList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let temp = this.head;

    while (temp !== null) {
      console.log(temp);
      temp = temp.nextElement;
    }
  }

  insertNodeAtHead(node) {
    // No Node Exists in the List
    if (this.head === null) {
      node.nextElement = null;
    } else {
      node.nextElement = this.head;
    }

    this.head = node;
  }

  deleteNodeAtHead() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }

    this.head = this.head.nextElement;
  }

  insertNodeAtTail(node) {
    // No Node Exist
    if (this.isEmpty()) {
      node.nextElement = null;
      this.head = node;

      return;
    }

    let pointer = this.head;

    while (pointer.nextElement !== null) {
      pointer = pointer.nextElement;
    }

    pointer.nextElement = node;
    node.nextElement = null;
  }

  deleteNodeAtTail() {
    if (this.isEmpty()) {
      console.log("List is already empty");
      return;
    }

    if (this.head.nextElement === null) {
      // Special case: If there's only one node, just remove it
      this.head = null;
      return;
    }

    let pointer = this.head;

    while (pointer.nextElement.nextElement !== null) {
      pointer = pointer.nextElement; // 5
    }

    pointer.nextElement = null;
  }

  insertAfterNthNode(node, nth) {
    if (this.isEmpty()) {
      console.log("Node is Empty");
      return;
    }

    if (nth < 1) {
      console.log("nth should have some value");
    }

    let pointer = this.head;

    let traverseIndex = 1;

    // 1 2  3 4 5

    while (pointer.nextElement !== null && traverseIndex !== nth) {
      traverseIndex++; // 2 3 4 5
      pointer = pointer.nextElement; // 2 3 4 5
    }

    if (traverseIndex === nth) {
      node.nextElement = pointer.nextElement;
      pointer.nextElement = node;
      return;
    }

    if (traverseIndex < nth) {
      console.log("nth out of bound error");

      return;
    }
  }
}
