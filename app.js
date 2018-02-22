import { Stack, Node} from './src/homework-02';

const lista = new Stack();

lista.push(new Node(6));
lista.push(1);
lista.push(5);
lista.push(2);
lista.push(3);
lista.push(4);
console.log(lista.top());
lista.pop();
lista.pop();
console.log(lista.top());