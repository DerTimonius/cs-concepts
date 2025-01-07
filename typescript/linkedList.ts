class ListNode<T> {
	value: T;
	next: ListNode<T> | null;
	prev: ListNode<T> | null;
	constructor(value: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
	getNextNode() {
		return this.next;
	}
	getPrevNode() {
		return this.prev;
	}
	setNextNode(node: ListNode<T> | null) {
		this.next = node;
	}
	setPrevNode(node: ListNode<T> | null) {
		this.prev = node;
	}
}

// doubly linked list
export class LinkedList<T> {
	head: ListNode<T> | null;
	tail: ListNode<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(value: T) {
		const newHead = new ListNode(value);
		const currentHead = this.head;
		this.head = newHead;
		if (currentHead) {
			newHead.setNextNode(currentHead);
			currentHead.setPrevNode(newHead);
		} else {
			this.tail = newHead;
		}
		return newHead.value;
	}
	addToTail(value: T) {
		const newTail = new ListNode(value);
		const currentTail = this.tail;
		this.tail = newTail;
		if (currentTail) {
			newTail.setPrevNode(currentTail);
			currentTail.setNextNode(newTail);
		} else {
			this.head = newTail;
		}
		return newTail.value;
	}
	getHeadValue() {
		return this.head?.value;
	}
	getTailValue() {
		return this.tail?.value;
	}
	deleteHead() {
		const currentHead = this.head;
		if (!currentHead) {
			return "Empty list";
		}
		const newHead = currentHead.getNextNode();
		if (!newHead) {
			console.log("Nothing in this list number more");
		}
		this.head = newHead;
		newHead?.setPrevNode(null);
		currentHead.setNextNode(null);

		return currentHead.value;
	}
	deleteTail() {
		const currentTail = this.tail;
		if (!currentTail) {
			return "Empty list";
		}
		const newTail = currentTail.getPrevNode();
		if (!newTail) {
			console.log("Nothing in this list number more");
		}
		this.tail = newTail;
		newTail?.setNextNode(null);
		currentTail.setPrevNode(null);

		return currentTail.value;
	}
	getValueByIndex(idx: number) {
		let i = 0;
		let currentNode = this.head;
		while (currentNode) {
			if (i === idx) {
				return currentNode.value;
			}
			currentNode = currentNode.getNextNode();
			i++;
		}
		return null;
	}
	getAllValues() {
		const values: T[] = [];
		let currentNode = this.head;
		while (currentNode) {
			values.push(currentNode.value);
			currentNode = currentNode.getNextNode();
		}
		return values;
	}
}
