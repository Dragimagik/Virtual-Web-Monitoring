class Server extends Info{
    get ram() {
        return this._ram.val;
    }

    set ram(value) {
        this._ram.val = value;
    }

    get cpu() {
        return this._cpu.val;
    }

    set cpu(value) {
        this._cpu.val = value;
    }

    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    constructor(name, state, ip, ram, cpu) {
        super(name, state);
        this._ip = ip;
        this._cpu = cpu;
        this._ram = ram;
        this.storage = {
            max: 10000,
            stock: 1640,
            modify: false 
        }
    }

    shutDown(){
        this.state = false;
    }

    power(){
        this.state = true;
    }

    send(file, size, ip) {
        log(this.name,"envoie de fichier");
        network(file,size,ip);
    }

    backup(computer){
        if(this.state){
            let temp = this.storage.stock + computer.template.object.storage.stock
            if(temp < this.storage.max){
                this.storage.stock = temp;
                this.storage.modify = true;
                log(this.name,"backup: " + computer.template.object.name);
            } else {
                log(this.name,"impossible de backup: " + computer.template.object.name);
            }
        }
    }

    store(size){
        this.storage.modify = true;
        this.storage.stock -= Math.round(size/1000000);
        log(this.name,"sauvegarde de fichier");
    }
}