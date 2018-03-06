import {Node} from "./node";

/**
 * class keeping methods for bst
 */
export class Bst {
    constructor() {
        this._root = null;
    }

    /**
     * Method checks the instance of input node.
     * Makes object if input is value, else just pass is.
     * @param node
     * @returns {Node}
     */
    static checkInstance(node) {
        if (node instanceof Node) {
            return node;
        }
        else {
            return new Node(node);
        }
    }

    /**
     * Method search the node in tree
     * @param node
     * @returns {*}
     */
    find(node) {
        node = Bst.checkInstance(node);
        let current = this._root;
        while (current !== null) {
            if (current.value === node.value) {
                return current;
            }
            if (current.value > node.value) { //searched value is smaller than current node, we need to go left
                if (current.left !== null) {
                    current = current.left;
                } else {
                    return null;
                }
            }
            if (current.value < node.value) { //searched value is bigger than current node, we need to go right
                if (current.right !== null) {
                    current = current.right;
                } else {
                    return null;
                }
            }
        }
        return current;
    }

    /**
     * Method searches for the place for new value and then adds it.
     * @param node
     */
    add(node) {
        node = Bst.checkInstance(node);
        let current = this._root;
        //if tree is empty
        if (current === null) {
            this._root = node;
        } else {
            while (true) {
                if (node.value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        node.older = current;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (node.value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        node.older = current;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    }

    /**
     * Method searches for replacement for node which is going to be delete
     * @param node
     * @returns {*}
     */
    static findReplacement(node) {

        node = Bst.checkInstance(node);

        if (node === null) {
            return null;
        }

        if (node.right === null) {
            let replacement = node.older;

            while (replacement !== null && node === replacement.right) {
                node = replacement;
                replacement = replacement.older;
            }

            return replacement;

        } else {
            let child = node.right;
            //in this while we are going deeper to the left side till we will find minimum
            while (child.left !== null) {
                child = child.left;
            }

            return child;

        }
    }

    /**
     * in remove method we need to include 3 cases: 1. no children 2. two children 3. one child
     * @param node
     */

    remove(node) {

        node = Bst.checkInstance(node);

        let removedNode = this.find(node);

        // if there is no node to delete return null
        if (removedNode === null) {
            return null;
        }

        //Case 1. node to delete has no children
        //Case 1.1 node to delete is root -> set root on null
        //Case 1.2 node to delete is not a root -> check if node to delete is left or right child

        if (removedNode.left === null && removedNode.right === null) {

            //Case 1.1
            if (removedNode === this._root) {
                this._root = null;

            } //Case 1.2
            else {
                if (removedNode.older.left === removedNode && removedNode.parent !== null) {
                    removedNode.older.left = null;

                } else if (removedNode.older.right === removedNode) {
                    removedNode.older.right = null;

                }
            }
        }

        //Case 2. node to delete has two children
        //First we need to find replacement for our node to delete. To do it we use findReplacement() method which
        //give us variable replacement. Then we delete node and put replacement on his place


        else if (removedNode.left !== null && removedNode.right !== null) {

            let replacement = Bst.findReplacement(removedNode);

            removedNode.value = replacement.value;

            let previousNode = replacement.older;
            if (replacement.older === removedNode) { //replacement is child of node to delete
                if (removedNode.right === replacement) {
                    removedNode.right = replacement.right;
                    if (replacement.right !== null) {
                        replacement.right.older = removedNode;
                    }
                }
            } else if (previousNode !== null) { //replacement is not a child of node to delete

                if (previousNode.left === replacement && replacement.left !== null) {
                    previousNode.left = replacement.left;
                    replacement.left.older = previousNode;
                }
                else if (previousNode.left === replacement && replacement.right !== null) {
                    previousNode.left = replacement.right;
                    replacement.right.older = previousNode;
                }
                else if (previousNode.left === replacement) {
                    previousNode.left = null;
                }
                else if (previousNode.right === replacement && replacement.right !== null) {
                    previousNode.right = replacement.right;
                    previousNode.right.older = replacement;
                }
                else if (previousNode.right === replacement && replacement.left !== null) {
                    previousNode.right = replacement.left;
                    previousNode.right.older = replacement;
                }
                else if (previousNode.right === replacement) {
                    previousNode.right = null;
                }
            }
            return this;
        }

        //Case 3. node to delete has one child and we have to find a parent
        //First we check if node to delete has right or left child.
        // Then we check if node to delete is right or left child of his parent.

        else {

            let child = (removedNode.left) ? removedNode.left : removedNode.right;
            let previousNode = removedNode.older;
            removedNode.older = null;
            if (previousNode !== null && previousNode !== undefined) {  //node to delete isn't a root
                if (previousNode.left === removedNode && removedNode.left !== null) {
                    previousNode.left = removedNode.left;
                    removedNode.left.older = previousNode;
                }
                else if (previousNode.left === removedNode && removedNode.right !== null) {
                    previousNode.left = removedNode.right;
                    removedNode.right.older = previousNode;
                }
                else if (previousNode.right === removedNode && removedNode.right !== null) {
                    previousNode.right = removedNode.right;
                    removedNode.right.older = previousNode;
                }
                else if (previousNode.right === removedNode && removedNode.left !== null) {
                    previousNode.right = removedNode.left;
                    removedNode.left.older = previousNode;
                }
            } else { //node to delete is a root
                child.older = null;
                this._root = child;
            }

            removedNode.left = null;
            removedNode.right = null;
        }
    }


    toArray() {
    }

    toString() {
    }


}