class Info {
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get name() {
        return this._name;
    }

    constructor(name, state) {
        this._name = name;
        this._state = state;
    }
}