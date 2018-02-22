import { Node } from './node';

export class Stack{
    constructor() {
        this.head = null;
    }
    push(value){
        let node = (value instanceof Node) ? value:new Node(value);
        node._value = value;
        if (this.head === null) { //empty list
            this.head = node;     //node become head
        } else {
            node._previous = this.head; //new value became new head of stack and previuos to old head
            this.head = node;
        }
    }
    pop(){
        let current = this.head;
        let temp = current._previous;
        this.head = current._previous;    //previuos value become head
        current._previous = temp._previous;
    }
    top(){
        return this.head;
    }
}