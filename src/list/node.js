export class Node {
  constructor (value, next) {
    this._value = value;
    this._next = null;
  }

  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
  }

  get next () {
    return this._next;
  }

  set next (value) {
    this._next = value;
  }
}