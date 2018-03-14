import {Node} from "./src/bst/node";
import {Bst} from "./src/bst/bst";

const bst = new Bst();

bst.add(90);
bst.add(50);
bst.add(150);
bst.add(95);
bst.add(175);
bst.add(75);
bst.add(new Node(25));
bst.add(125);
bst.add(180);
bst.add(15);
bst.add(85);
bst.remove(new Node(150));
bst.remove(175);
console.log(bst.find(125));
console.log(bst.find(1));
bst.toString();
console.log(bst.toArray());
console.log(bst.toString());
