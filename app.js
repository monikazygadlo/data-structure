import {Node} from "./src/bst/node";
import {Bst} from "./src/bst/bst";

const bst = new Bst();

bst.add(6);
bst.add(7);
bst.add(3);
bst.add(1);
bst.add(2);
bst.add(4);
bst.add(8);
bst.add(10);
bst.add(9);
bst.remove(2);
console.log(bst);
