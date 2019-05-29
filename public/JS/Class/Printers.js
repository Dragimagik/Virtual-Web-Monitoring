class Printers extends Info {
    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    set ip(value) {
        this._ip = value;
    }

    constructor(name, state, ip, src = null) {
        super(name, state, src);
        this._ip = ip;
        this.printing = false;
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

    shutDown(){
        this.state = false;
    }

    power(){
        this.state = true;
    }

    errorPaper(){
        //log
        if(this.paper.stock <= 0){
            console.log("error paper", this.paper);
            return false;
        }else {
            return true;
        }
    }

    errorInk(){
        //log
        if(this.ink.stock <= 0){
            console.log("error ink", this.ink);
            return false;
        } else {
            return true;
        }
    }

    reloadPaper(){
        //log
        this.paper.stock = 500;
        receive(listFile[0].name,listFile[0].size);
    }

    reloadInk(){
        //log
        this.ink.stock = 5000;
        receive(listFile[0].name,listFile[0].size);
    }

    // ajout de la queue d'attente
    receive(file, size) {
        //log
        if(this.printing){
            this.listFile.push({name: file,size: size})
        } else if(this.state){
            this.print(file, size);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // finir impression
    async print(file, size) {
        this.printing = true
        while (size > 1024 && self.errorPaper() && self.errorInk() && self.state){
            self.paper.stock--;
            size -= 1024;
            self.ink.stock--;
            await this.sleep(6000/clock.object.speed);
        }
        //log
        this.printing = false;
        if(this.listFile.length > 0 && this.errorPaper() && this.errorInk() && this.state){
            name = this.listFile[0].name;
            size = this.listFile[0].size;
            this.listFile.shift();
            this.print(name,size);
        }
    }
}