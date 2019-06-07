class Projector extends Info{
    get ip() {
        return this._ip[0] + "." + this._ip[1] + "." + this._ip[2] + "." + this._ip[3];
    }

    constructor(name,state,ip){
        super(name,state);
        this._ip = ip;
    }

    shutDown() {
        this.state = false;
        log(this.name,"extinction projecteur");
    }

    power() {
        this.state = true;
        log(this.name,"démarrage projecteur");
    }

}