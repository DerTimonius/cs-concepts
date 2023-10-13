class ListNode {
  value: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(value) {
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
  setNextNode(node: ListNode | null) {
    this.next = node;
  }
  setPrevNode(node: ListNode | null) {
    this.prev = node;
  }
}

export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(value: number) {
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
  addToTail(value: number) {
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
      return 'Empty list';
    }
    const newHead = currentHead.getNextNode();
    if (!newHead) {
      console.log('Nothing in this list number more');
    }
    this.head = newHead;
    newHead?.setPrevNode(null);
    currentHead.setNextNode(null);

    return currentHead.value;
  }
  deleteTail() {
    const currentTail = this.tail;
    if (!currentTail) {
      return 'Empty list';
    }
    const newTail = currentTail.getPrevNode();
    if (!newTail) {
      console.log('Nothing in this list number more');
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
    const values: number[] = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.getNextNode();
    }
    return values;
  }
}
