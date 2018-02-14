import { Node } from './node';

export class List {
  constructor (comp) {
    if (comp === undefined) {
      comp = function (first, second) {
        return first < second;
      };
    }
    this.head = null;
    this.comparator = comp;
  }

  /**
   * Adds new node to the list
   * @param value
   */
  add (value) {
    let node = new Node(value);
    let current = this.head;
    if (this.head === null) { //empty list
      this.head = node;     //node become head
    } else {                    //not empty list
      if (this.head._value > node._value) {     //head bigger than node
        node._next = this.head;        //head become node and node become head
        this.head = node;
        return node;
      } else {
        while (true) {
          if (current._next) {    //current is not last
            if ((current._value < node._value) &&
              (node._value <= current._next._value)) {     //checking if current is smaller than node and node is smaller or equal to next
              node._next = current._next;        //if yes implement node
              current._next = node;
              return node;
            } else if (current._value < node._value) { //node is bigger than next, continue checkingnexta wiec trzeba leciec dalej po liscie
              current = current._next; //next become current

            }
          } else {              //current is last
            node._next = current._next; //implement node
            current._next = node;
            return node;
          }
        }
      }
    }
  }
  add (value) {
    let node = new Node(value);
    let current = this.head;
    if (this.head === null) { //empty list
      this.head = node;       //node become head
    } else {                    //not empty list
      if (this.comparator(node._value, this.head._value)) {     //head bigger than node
        node._next = this.head;        //head become node and node become head
        this.head = node;
        return node;
      } else {
        while (true) {
          if (current._next) {    //current is not last
            if ((this.comparator(current._value, node._value)) &&
              (this.comparator(node._value, current._next._value)) &&
              (node._value === current._next._value)) {     //checking if current is smaller than node and node is smaller or equal to next
              node._next = current._next;        //if yes implement node
              current._next = node;
              return node;
            } else if (this.comparator(current._value, node._value)) {   //node is bigger than next, continue checking
              current = current._next; //next become current

            }
          } else {              //current is last
            node._next = current._next; //implement node
            current._next = node;
            return node;
          }
        }
      }
    }
  }

  /**
   * Finds node by it's value
   * @param value
   */
  find (value) {
    let search = new Node(value);
    let current = this.head;
    while (true) {
      if (search._value === current._value) { //searching value equal to current
        return search;
      } else if (current._next == null) {  //list has only least
        return null;
      } else {
        current = current._next;   //next become current
      }
    }
  }

  /**
   * Removes node from the list
   * @param value
   */
  remove (value) {
    let remove = new Node(value);
    let current = this.head;
    if (current._value !== remove._value) {  //removing anything except head
      while (true) {
        if (remove._value === current._next._value) { //when removing value equal to next,
          current._next = current._next._next;        //next next become next
          return remove;
        } else if (current._next._next == null) {     //
          return remove;
        }
        else {      //removing head
          current = current._next;
        }
      }
    } else {
      this.head = this.head._next;
      return remove;
    }
  }

  /**
   * Creates an array based on the data
   */
  toArray () {
    let current = this.head;
    const array = [];
    while (current !== null) {
      array.push(current._value);
      current = current._next;
    }
    return array;
  }

  /**
   * Stringify data
   */
  toString () {
    return this.toArray().join('->');
  }
}
