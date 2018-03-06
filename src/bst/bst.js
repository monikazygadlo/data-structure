import {Node} from "./node";

/**
 * class keeping methods of bst
 */
export class Bst {
    constructor() {
        this._root = null;
    }

    /**
     * Method searches for the place for new value and then adds it.
     * @param value
     */
    add(value) {
        let node = new Node(value);

        //if tree is empty
        if (this._root === null) {
            this._root = node;
        } else {
            let current = this._root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
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
     * Method remove calls function findToRemove which checks
     * if node which is going to be removed has child/children.
     * @param value
     */

    remove(value) {
        /**
         * First stage is to find the value which is going to be removed.
         * Second stage is to check if it has children.
         * @param node
         * @param value
         * @returns {*}
         */
        let findToRemove = function (node, value) {
            if (node === null) {
                return null;
            }
            if (value === node.value) {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                let temp = this.findMin(node.right);
                node.value = temp.value;
                node.right = findToRemove(node.right, temp.value);
                return node;
            } else if (value < node.value) {
                node.left = findToRemove(node.left, value);
                return node;
            } else {
                node.right = findToRemove(node.right, value);
                return node;
            }
        };
        this._root = findToRemove(this._root, value);
    }

    findMin(node) {
        if(!node) {
            node = this._root;
        }
        while(node.left) {
            node = node.left;
        }
        return node.data;
    };


    find(value) {
    }

    toString() {
    }

    toArray() {
    }
}