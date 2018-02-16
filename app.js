import { SkipList, Node} from './src/skip-list';

const lista = new SkipList(4);

lista.add(4);
lista.add(new Node(2));
lista.add(1);
lista.add(5);
lista.add(3);
lista.add(6);
lista.add(6);
lista.add(6);

lista.find(3);
console.log(lista.find(6));

