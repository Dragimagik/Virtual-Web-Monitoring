class Printers extends Info {
    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    set ip(value) {
        this._ip = value;
    }

    constructor(name, state, ip) {
        super(name, state);
        this._ip = ip;
        this.printing = {
            val: false,
            file: null,
            size: null,
            reload: null
        };
        this.listFile = [];
        this.paper = {
            stock: 500,
            max: 500
        };
        this.ink = {
            stock: 5000,
            max: 5000
        };
    }

    shutDown() {
        this.state = false;
    }

    power() {
        this.state = true;
    }

    errorPaper() {
        //log
        if (this.paper.stock <= 0) {
            console.log("error paper", this.paper);
            return false;
        } else {
            return true;
        }
    }

    errorInk() {
        //log
        if (this.ink.stock <= 0) {
            console.log("error ink", this.ink);
            return false;
        } else {
            return true;
        }
    }

    reloadPaper() {
        //log
        this.paper.stock = 500;
        receive(listFile[0].name, listFile[0].size);
    }

    reloadInk() {
        //log
        this.ink.stock = 5000;
        receive(listFile[0].name, listFile[0].size);
    }

    // ajout de la queue d'attente
    receive(file, size) {
        //log
        if (this.printing.val) {
            this.listFile.push({ name: file, size: size })
        } else if (this.state) {
            this.printing.val = true;
            this.printing.file = file;
            this.printing.size = size;
            this.printing.reload = setInterval(this.print, (1000/clock.object.state), this)
        }
    }

    print(self) {
        if (clock.object.state) {
            if (self.printing.size > 0 && self.state && self.errorPaper() && self.errorInk()) {
                self.paper.stock--;
                self.printing.size -= 1024;
                self.ink.stock--;
            } else if (self.state && self.errorPaper() && self.errorInk() && self.listFile.length > 0) {
                self.printing.name = self.listFile[0].name;
                self.printing.size = self.listFile[0].size;
                self.listFile.shift();
            } else {
                clearInterval(self.printing.reload);
                self.printing.reload = null;
                self.printing.val = false;
            }
        }
    }
}