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

    send(file, size, ip) {
        network(file,size,ip);
    }

    backup(computer){
        console.log(computer.template.object.name);
    }

    backupAll(){
        self = this.getThis();
        listComputer.forEach(function(element) {
            self.backup(element);
        });
    }

    store(size){
        this.storage.modify = true;
        this.storage.stock -= Math.round(size/1000000);
    }

    getThis() {
        return this;
    }
}