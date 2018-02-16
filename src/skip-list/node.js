export class Node {
  constructor (value,level) {
    this._value = value;
    this._next = new Array(level).fill(null);
  }

   get value () {
   return this._value;
   }

  get next () {
    return this._next;
  }

  set next (value) {
    this._next = value;
  }
}