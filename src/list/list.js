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
   * @param node
   */
  //find (value){}

  /**
   * Removes node from the list
   * @param node
   */
  // remove (node);

  /**
   * Creates an array based on the data
   */
  // toArray (){
  //     Array.from('')
  // }

  /**
   * Stringify data
   */
  //toString ();
}

