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

	detectCycle() {
		let pointer = this.head;

		let obj = new Map();

		while (pointer) {
			if (obj.get(pointer)) {
				return true;
			}

			obj.set(pointer, true);
			pointer = pointer.nextElement;
		}

		return false;
	}

	detectCycleTwoPointer(head) {
		if (head === null) {
			return false;
		}

		let p1 = head; // 4
		let p2 = head.nextElement.nextElement; // 2

		while (p1 !== p2) {
			if (p2 === null) {
				return false;
			}

			if (p2.nextElement === null || p2.nextElement.nextElement === null) {
				return false;
			}

			p1 = p1.nextElement; // n5
			p2 = p2.nextElement.nextElement; // n5
		}

		if (p1 === p2) {
			return true;
		}

		// Replace this placeholder return statement with your code
		return false;
	}

	returnMiddleList(head) {
		if (head === null) {
			return null;
		}

		if (head.nextElement === null) {
			return head;
		}

		let length = 0;

		let pointer = head;

		// n1,n2,n3,n4

		//n4
		while (pointer) {
			length++; // 5
			pointer = pointer.nextElement; // null
		}

		pointer = head;

		let middlePosition = Math.floor(length / 2) + 1; // 3

		let index = 1;

		// n3
		while (pointer && index <= middlePosition) {
			if (index === middlePosition) {
				return pointer;
			}

			index++;
			3;
			pointer = pointer.nextElement;
		}
	}

	returnMiddleListTwoPointer(head) {
		if (head === null) {
			return null;
		}

		if (head.next === null) {
			return head;
		}

		let pointer = head;

		let mid = head;
		let fast = head;

		// list = n1 n2 n3 n4 n5 n6

		// fast = n5
		while (fast.next) {
			// mid = n4
			mid = mid.next;

			// fast = null
			fast = fast.next.next;

			if (fast === null) {
				return mid;
			}
		}

		return mid;
	}

	removeDuplicate(head) {
		if (!head) {
			return null;
		}

		//If list only has one node, leave it unchanged
		if (head.next == null) {
			return head;
		}

		let obj = {};

		let pointer = head;

		let prev;

		while (pointer) {
			if (obj[pointer.data]) {
				prev.nextElement = pointer.nextElement;
				pointer = pointer.nextElement;
			} else {
				obj[pointer.data] = true;

				prev = pointer;

				pointer = pointer.nextElement;
			}
		}

		return head;
	}

	static getUnion(ll, ll2) {
    console.log(ll);

    let obj = {};

    let pointer = ll.head;

    let lastPointerOfList1 = null;

    while(pointer){
      if(!obj[pointer.data]){
        obj[pointer.data] = true;
      }
      
      if(pointer.nextElement === null){
        lastPointerOfList1 = pointer;
      }
      
      pointer = pointer.nextElement;
    }

    console.log(obj)

    pointer = ll2.head;
   
    while(pointer){

      console.log("pointer", pointer)

      if(!obj[pointer.data]){

        lastPointerOfList1.nextElement = pointer;

        lastPointerOfList1 = pointer;

        lastPointerOfList1.next = null;
      }

      pointer = pointer.nextElement;

    }

     while(pointer){

      if(!obj[pointer.data]){
        lastPointerOfList1.next = pointer;
        
        lastPointerOfList1 = pointer;
        
        
      }
      
      pointer = pointer.next;
      
    }

    
    pointer = ll.head;

    while(pointer){
      console.log(pointer.data);

      pointer = pointer.nextElement;
    }

	}

	 intersection(head1, head2) {
		let dummyNode = new LinkedListNode(null);
		
		let returningListPointer = dummyNode;
	  
		let obj = {};
		
		let pointer = head1;
		
		while(pointer){
		  if(!obj[pointer.data]){
			obj[pointer.data] = true;  
		  }
		  
		  pointer = pointer.next;
		}
		
		pointer = head2;
		
		// [15,14,21]
		while(pointer){
		  
		  if(obj[pointer.data]){
			returningListPointer.next = pointer;
			
			returningListPointer = pointer;
		  }
		  
		  if(pointer.next === null){
			returningListPointer.next = null;
		  }
		  
		  pointer = pointer.next;
		  
		  
		}
		
		return dummyNode.next;
	}

	returnNthNodeFromEndOfList(n){
		let pointer = this.head;

		let prev = null;

		let temp = null;

		let length = 1;

		while(pointer){		
			// n2
			temp = pointer;

			if(pointer.nextElement === null){
				this.head = pointer;
			}

			//n3
			pointer = pointer.nextElement;	

			//n2.nextElement = n1;
			temp.nextElement = prev;

			// prev n1
			prev = temp;
			
			length++;
		}

		pointer = this.head;


		if(n > length){
			return null;
		}

		let iterator = 1;

		while(iterator < n){
			pointer = pointer.nextElement;

			iterator ++;
		}

		return pointer;
	}


	// n1 n2 n3 n4 n5 
	// n = 3

	returnNthNodeTwoPointer(head, n){

		let slowPointer = head;
		let fastPointer = head;

		let tempIndex = 1;

		// fp = 
		while(fastPointer){
			slowPointer = slowPointer.next;

			while(n > tempIndex){
				fastPointer = fastPointer.next;
				tempIndex++;
			}

			tempIndex = 0;
		}

		return slowPointer.next;
	}
  
}
