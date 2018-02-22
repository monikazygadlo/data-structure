export class Node {
    constructor (value) {
        this._value = value;
        this._previous = null;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get previous() {
        return this._previous;
    }

    set previous(value) {
        this._previous = value;
    }
}