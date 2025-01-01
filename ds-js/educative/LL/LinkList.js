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

  // Search in a Singly Linked List
  search(value) {
    if (this.head === null) {
      return false;
    }

    let pointer = this.head;

    // Loop till Last
    while (pointer.nextElement !== null) {
      if (pointer.data === value) {
        return true;
      }

      pointer = pointer.nextElement;
    }

    // Check if Tail contains the value
    if (pointer.nextElement === null && pointer.data === value) {
      return true;
    }

    // Replace this placeholder return statement with your code
    return false;
  }

  // Search in a single linked list Recursive approach

  searchRecursive(node, value) {
    // base case
    if (node === null) {
      return false;
    }

    if (node.data === value) {
      return true;
    }

    return searchRecursive(node.nextElement, value);
  }

  deleteVal(head, value) {
    if (head === null) {
      return false;
    }

    // if data is present in head
    if (head.data === value) {
      head = head.nextElement;
      return true;
    }

    let pointer = head;

    while (pointer.nextElement !== null) {
      // pointer.nextElement.data = 4
      if (pointer.nextElement.data === value) {
        pointer.nextElement = pointer?.nextElement?.nextElement
          ? pointer?.nextElement?.nextElement
          : null;

        return true;
      }

      pointer = pointer.nextElement;
    }

    return false;
  }

  // n1 n2 n3 n4
  getLength(head) {
    // Replace this placeholder return statement with your code

    if (head && head.nextElement === null) {
      return 1;
    }

    let pointer = head;

    let length = 0;

    while (pointer) {
      length++; // 4
      pointer = pointer.nextElement;
    }

    return length;
  }

  reverseList(head) {
    if (head && head.next === null) {
      return head;
    }

    let pointer = head;

    let temp;
    let prev;

    while (pointer) {
      temp = pointer;

      pointer = pointer.next;

      temp.next = prev;

      prev = temp;

      if (pointer === null) {
        head = temp;
      }
    }

    // Replace this placeholder return statement with your code
    return head;
  }
}
