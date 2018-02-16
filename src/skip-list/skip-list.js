import { Node } from './node';

export class SkipList {
  constructor (maxHeight) {
    this.maxHeight = maxHeight;
    this.head = new Node(null, this.maxHeight);
  }

  static randomHeight (maxHeight) {
    const rnd = Math.random() * maxHeight ** 2;
    return Math.floor(maxHeight - Math.sqrt(rnd));
  }

  find (value) {
    let search = new Node(value);
    let current = this.head;
    let history = new Array(this.maxHeight).fill(null);  //array needed to remember extremes

    /*
     Searching for pointer which points to searched value
     */
    for (let i = this.maxHeight - 1; i >= 0; i--) {
      while (current._next[i] !== null &&
      current._next[i]._value < value) {
        current = current._next[i];
      }
      history[i] = current;
    }

    current = current._next[0]; //rewriting current to next value

    /*
      checking if current node value is equal to searched value
     */
    if (current._value === search._value) {
      for(let i=0; i<=this.maxHeight-1; i++){
        if(history[i]._next[i] === current._next[i])
          break;
      }
      while(this.maxHeight>0 && this.head._next[this.maxHeight] === 0){
        level --;
      }
      return search;
    } else {
      return `node did not find`;
    }
  }

  add (value) {
    let history = new Array(this.maxHeight).fill(null); //array needed to remember extremes
    let current = this.head;
    let nodeLevel = SkipList.randomHeight(this.maxHeight);
    let node = (value instanceof Node) ? value:new Node(value, nodeLevel);

    /*
      Searching for the place for new value
     */
    for (let i = this.maxHeight - 1; i >= 0; i--) {
      while (current._next[i] !== null &&
      current._next[i]._value < value) {
        current = current._next[i];
      }
      history[i] = current;
    }
    /*
      Putting new value. Using history to match the pointers.
     */
    if (current._value !== node._value) {
      for (let i = 0; i <= nodeLevel; i++) {
        node._next[i] = history[i]._next[i];
        history[i]._next[i] = node;
      }
    }
  }
}