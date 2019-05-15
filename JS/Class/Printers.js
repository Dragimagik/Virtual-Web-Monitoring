class Printers extends Info {
    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    set ip(value) {
        this._ip = value;
    }
    constructor(name, state, stock, ip, src = null) {
        super(name, state, src);
        this.stock = stock;
        this._ip = ip;
    }

    // ajout de la queue d'attente
    receive(file, size) {
        this.print(file, size);
    }

    print(file, size) {
        do {
            this.stock--;
            size -= 1024;
        } while (size > 1024);
    }
}