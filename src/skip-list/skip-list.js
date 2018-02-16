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
    for (let i = this.maxHeight - 1; i > 0; i--) {
      while (current._next[i]._value < search._value) {
        current = current._next[i];
      }
      if (current._value === search._value) {
        return current._value;
      }
      else {
        return 'node did not find';
      }
    }
  }

  add (value) {
    let history = new Array(this.maxHeight).fill(null);
    let current = this.head;
    let nodeLevel = SkipList.randomHeight(this.maxHeight);
    let node = new Node(value, nodeLevel);
    /*
     Zaczynamy od MaxLevel i przemieszczamy wskaznik tak
     dlugo jak value > current._next._value.
     Jeśli value < current._next._value
     */
    for (let i = this.maxHeight - 1; i >= 0; i--) {
      while (current._next[i] !== null &&
      current._next[i]._value < value) {
        current = current._next[i];
      }
      history[i] = current; //zapamietanie ekstrema;
    }

    if (current === null || current._value !== node._value) {
      for (let i = 0; i <= nodeLevel; i++) {
        node._next[i] = history[i]._next[i];
        history[i]._next[i] = node;
      }
    }
  }
}