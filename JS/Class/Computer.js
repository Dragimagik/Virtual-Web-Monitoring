class Computer extends Info {
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

    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    constructor(state, ip, ram, cpu, name) {
        super(name, state);
        this._ip = ip;
        this._cpu = cpu;
        this._ram = ram;
    }

    send(file, size, ip) {
        network(file,size,ip);
    }
}
