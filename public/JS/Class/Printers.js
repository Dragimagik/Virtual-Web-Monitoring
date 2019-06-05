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
        if (this.paper.stock <= 0) {
            log(this.name,"manque papier");
            return false;
        } else {
            return true;
        }
    }

    errorInk() {
        //log
        if (this.ink.stock <= 0) {
            log(this.name,"manque encre");
            return false;
        } else {
            return true;
        }
    }

    reloadPaper() {
        this.paper.stock = 500;
        receive(listFile[0].name, listFile[0].size);
        log(this.name,"rechargement papier");
    }

    reloadInk() {
        this.ink.stock = 5000;
        receive(listFile[0].name, listFile[0].size);
        log(this.name,"rechargement encre");
    }

    // ajout de la queue d'attente
    receive(file, size) {
        if (this.printing.val) {
            this.listFile.push({ name: file, size: size })
            log(this.name,"ajout a la queue d'impression");
        } else if (this.state) {
            this.printing.val = true;
            this.printing.file = file;
            this.printing.size = size;
            this.printing.reload = setInterval(this.print, (1000/clock.object.state), this)
            log(this.name,"impression du fichier (" + file + ")");
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