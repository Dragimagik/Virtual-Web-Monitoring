class Network extends Info {
    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    get mask() {
        return this._mask[0] + "." + this._mask[1] + "." + this._mask[2] + "." + this._mask[3];
    }

    constructor(name, state = true, nbrDevice = 0, ip = [10, 0, 0, 0], mask = [255, 255, 255, 0]) {
        super(name, state);
        this.bandWidth = {
            stock: 0,
            max: 800000000
        }
        this.listFile = [];
        this.nbrDevice = nbrDevice;
        this._ip = ip;
        this._mask = mask;
        this.listInfo = [];
    }

    shutDown() {
        //log
        this.state = false;
    }

    power() {
        //log
        this.state = true;
    }

    giveIP() {
        if (this.state) {
            //log
            this.nbrDevice++
            return [this._ip[0], this._ip[1], this._ip[2], this._ip[3] + this.nbrDevice]
        }
    }

    send(file, size, ip) {
        if(clock.object.state){
            if (this.state) {
                //log
                let info = this.search(ip);
                console.log(info);
                if (this.bandWidth.max > size) {
                    this.bandWidth.stock = size;
                    info.receive(file, size);
                } else {
                    let tempSize = size;
                    this.bandWidth.stock = this.bandWidth.max;
                    do {
                        tempSize = tempSize - this.bandWidth.max;
                    } while (tempSize > 0)
                    info.receive(file, size);
                }
            } else {
                //log
                console.log("erreur")
            }
        }
    }

    search(ip) {
        let element;
        for (let i = 0; i < this.listInfo.length; i++) {
            element = this.listInfo[i];
            if (this.compare(ip, element._ip)) {
                return element;
            }
        }
    }

    compare(self, other) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
            if (self[i] == other[i]) {
                count++;
            }
        }
        return (count == 4);
    }

    getThis() {
        return this;
    }
}

