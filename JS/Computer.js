class Computer {
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get name() {
        return this._name;
    }

    get ram() {
        return this._ram;
    }

    set ram(value) {
        this._ram = value;
    }

    get cpu() {
        return this._cpu;
    }

    set cpu(value) {
        this._cpu = value;
    }

    constructor(state, ip, ram, cpu, name) {
        this._ip = ip;
        this._cpu = cpu;
        this._ram = ram;
        this._name = name;
        this._state = state;
    }

    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }
}

function createComputeur() {
    for (let i = 0; i < 20; i++) {
        listWidget.push(new widget(new TemplateWidgetComputer(new Computer(true, [10, 0, 0, i], 5, 5, ("Computer" + i)))));
    }
}

let listWidget = [];
createComputeur();
