import {Node} from "./src/bst/node";
import {Bst} from "./src/bst/bst";

const bst = new Bst();

bst.add(90);
bst.add(50);
bst.add(150);
bst.add(95);
bst.add(175);
bst.add(75);
bst.add(20);
bst.add(5);
bst.add(25);
bst.add(66);
bst.add(80);
bst.add(92);
bst.add(111);
bst.add(166);
bst.add(200);
bst.remove(new Node(150));
bst.remove(175);
console.log(bst);
