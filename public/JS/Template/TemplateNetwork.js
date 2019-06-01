class TemplateNetwork {
    constructor(object,src) {
        this.object = object;
        this.base = null;
        this.reload = null;
        this.src = src;
    }

    generate(base) {
        let block;
        let listWord = ["name", "ip", "mask", "nbrDevice","load"];
        let listDisplay = [this.object.name,this.object.ip,this.object.mask,this.object.nbrDevice,this.object.traffic];
        for (let i = 0; i < listWord.length; i++) {
            block = document.createElement("div");
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listWord[i] + " : "));
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listDisplay[i]));
            base.appendChild(block);
        }
        this.closeChooser();
        this.base = base;
        this.reload = setInterval(this.refresh,1000,this.base,this.getThis());
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    refresh(node,self) {
        if(clock.object.state){
            for (let i = 3; i < 5; i++) {
                //node.childNodes[i].childNodes[1].innerText;
                console.log("mise a jour");
            } 
        }
    }

    enable(){
        this.base.className = "card-body";
        this.object.power();
        this.reload = setInterval(this.refresh,1000,this.base,this.getThis());
    }

    disable(){
        this.base.className += " disable";
        this.object.shutDown();
        clearInterval(this.reload);
        this.reload = null;
    }

    getThis() {
        return this;
    }

    hide(node) {
        clearInterval(this.reload);
        this.reload = null;
        node.parentElement.parentElement.parentElement.remove();
    }
}