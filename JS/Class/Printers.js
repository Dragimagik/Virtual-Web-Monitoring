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
        this.ink = {
            black: 1,
            yellow: 1,
            cyan: 1,
            magenta: 1
        }
    }

    // ajout de la queue d'attente
    receive(file, size) {
        this.print(file, size);
    }

    print(file, size, color) {
        do {
            this.stock--;
            size -= 1024;
        } while (size > 1024);
        if(color){
            for(let color in this.ink){
                this.ink -= 0.05
            }
        } else {
            this.ink.black -= 0.1
        }
    }
}