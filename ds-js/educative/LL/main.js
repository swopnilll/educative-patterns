import { LinkList } from "./LinkList.js";
import { Node } from "./Node.js";

let n1 = new Node(3);
let n2 = new Node(2);

let n3 = new Node(1);
// let n4 = new Node(4);
// let n5 = new Node(5);
// let n6 = new Node(6);

let ll = new LinkList();

ll.insertNodeAtHead(n1);

ll.insertAfterNthNode(n2, 1);
ll.insertAfterNthNode(n3, 2);
// ll.insertAfterNthNode(n4, 3);
// ll.insertAfterNthNode(n5, 4);
// ll.insertAfterNthNode(n6, 5);


// ll.printList();

let node = ll.returnMiddleList(ll.head);

console.log(node);