import { Node } from './node';

export class List {
  constructor (head) {
    this.head = null;
  }

  /**
   * Adds new node to the list
   * @param value
   */
  add (value) {
    let node = new Node(value);
    let current = this.head;
    if (this.head === null) { //gdy nie ma nic na liscie
      this.head = node;
    } else {                    //gdy mamy juz cos na liscie
      if (this.head._value > node._value) {     //head wiekszy od nowej wartosci
        node._next = this.head;        //head zostaje kolejnym nodem a nowa wartosc nowym headem
        this.head = node;
        return node;
      } else {
        while (true) {
          if (current._next) {    //za currentem cos jest
            if ((current._value < node._value) &&
              (node._value <= current._next._value)) {     //current mniejszy od node i node jest mniejszy-rowny od current nexta
              node._next = current._next;        //skoro tak to wstawiamy node
              current._next = node;
              return node;
            } else if (current._value < node._value) {                  //node wiekszy od current nexta wiec trzeba leciec dalej po liscie
              current = current._next; //ustawienie current na kolejnego noda

            }
          } else {              //za currentem nic nie ma
            node._next = current._next; //wstawiamy node
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
      if (search._value === current._value) {
        return search;
      } else if (current._next == null) {
        return null;
      } else {
        current = current._next;
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
    if (current._value !== remove._value) {
      while (true) {
        if (remove._value === current._next._value) {
          current._next = current._next._next;
          return remove;
        } else {
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
    return this.toArray().join("->");
  }
}
