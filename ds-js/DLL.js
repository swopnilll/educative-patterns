export class DoubleLinkList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head === null;
	}

	insertAtHead(node) {
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;

			return;
		}

		// First, update the current head's previous pointer
		this.head.previous = node;

		// Set the new node's next pointer to the current head
		node.next = this.head;

		// Update the head pointer to point to the new node
		this.head = node;
	}

	insertAtTail(node) {
		if (this.isEmpty()) {
			console.log("List is Empty. First install at Head");
			return;
		}

		let lastNode = this.tail;

		// Update the last node's next pointer to point to the new node
		lastNode.next = node;

		// Set the new node's previous pointer to point to the last node
		node.previous = lastNode;

		// Update the tail pointer to point to the new node
		this.tail = node;
	}

	// List Length = 4
	//  insertAtNthPosition(node, 4)
	insertAtNthPosition(node, position) {
		if (this.isEmpty()) {
			console.log("List is empty, please use insertAtHead() method");

			return;
		}

		if (position < 1) {
			console.log("Position should be greater than one");

            return;
		}

		let pointer = this.head;

		let currentPosition = 1;

		while (pointer.nextElement !== null && currentPosition < position) {
			pointer = pointer.nextElement; // 4th Node
			currentPosition++; // 4
		}

		// If the attempted insertion is at tail.
		if (position === currentPosition && pointer === this.tail) {
			console.log("Please use insertAtTail() method");
			return;
		}

        // Out of Bound Error
		if (pointer === this.tail && position > currentPosition) {
			console.log("The position is out of bound of linklist");
			return;
		}

		// If the insertion is not at taill
		if (pointer.nextElement !== null && currentPosition === position) {
			node.previous = pointer;
			node.next = pointer.nextElement;
			pointer.nextElement = node;

			return;
		}
	}


}
