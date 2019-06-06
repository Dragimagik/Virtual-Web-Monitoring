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
        this.running = ["OS"];
        this.storage = {
            max: 100,
            stock: 23,
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
        log(this.name,"envoi du fichier(" + file +")");
        if(this.state && clock.object.state){
            network.template.object.send(file,size,ip);
        }
    }

    //stockage d'un fichier
    store(file,size){
        if(this.state){
            let temp = this.storage.stock + size / 1000000
            if(temp < this.storage.max){
                this.storage.stock = temp;
                this.storage.modify = true;
                log(this.name,"sauvegarde du fichier (" + file +")");
            } else {
                log(this.name,"fichier trop lourd");
            }
        }
    }

    //sauvegarde de fichier
    receive(file, size) {
        if(this.state && clock.object.state){
            this.store(file,size);
        }
        log(this.name,"reception du fichier(" + file +")");
    }
}
