/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length += 1;
      return
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length += 1;
      return
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) {
      throw new Error("list is empty");
    }
    this.length -= 1;
    const popVal = this.tail.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return popVal;
    }
    let currNode = this.head;
    let newTail = null;
    while(currNode.next) {
      if (currNode.next === this.tail){
        newTail = currNode;
        break;
      }
      currNode = currNode.next;
    }
    this.tail = newTail;
    return popVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.tail === null) {
      throw new Error("list is empty");
    }
    this.length -= 1;
    const shiftVal = this.head.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return shiftVal;
    }
    this.head = this.head.next;
    return shiftVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    let currNode = this.head;
    let currIndex = 0;
    while(currNode.next) {
      if (currIndex === idx){
        return currNode.val
      }
      currNode = currNode.next;
      currIndex += 1;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    let currNode = this.head;
    let currIndex = 0;
    while(currNode.next) {
      if (currIndex === idx){
        currNode.val = val;
        return 
      }
      currNode = currNode.next;
      currIndex += 1;
    }
    currNode.val = val;
    return 
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("invalid index");
    }
    const newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      if (this.length === 1) {
        this.tail = newNode;
      }
      return
    }
    
    if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return
    }
    let currNode = this.head;
    let currIndex = 0;
    while(currNode.next) {
      if (currIndex + 1 === idx){
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length += 1;
        return 
      }
      currNode = currNode.next;
      currIndex += 1;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length += 1;
    return 
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    let removeVal = null;
    let currNode = this.head;
    if (idx === 0) {
      removeVal = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if  (this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return removeVal
    }
    if (idx === this.length - 1) {
      while(currNode.next){
        this.tail = currNode;
        currNode = currNode.next;
        removeVal = currNode.val;
      }
      this.length -= 1;
      return removeVal
    }
    let currIndex = 0;
    while(currNode.next) {
      if (currIndex + 1 === idx){
        removeVal = currNode.next;
        currNode.next = currNode.next.next;
        this.length -= 1;
        return removeVal
      }
      currNode = currNode.next;
      currIndex += 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0){
      return 0
    }
    let sum = 0;
    let currNode = this.head;
    for (let i = 0; i < this.length; i++){
      sum += currNode.val;
      currNode = currNode.next;
    }
    return sum/this.length
  }
}

module.exports = LinkedList;
