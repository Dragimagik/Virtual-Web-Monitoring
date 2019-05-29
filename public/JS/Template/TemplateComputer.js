class TemplateComputer {
    constructor(object) {
        this.object = object;
        this.base = null;
        this.reload = null;
    }

    generate(base) {
        this.base = base;
        this.closeChooser();
        this.basic();
        if(this.object.state){
            this.minus();
        } else {
            this.disable();
        }
        this.reload = setInterval(this.refresh,1000,this.base,this.getThis());
    }

    basic(){
        let listDisplay = [this.object.name, this.object.ip];
        let listWord = ["name", "ip"];
        let block = document.createElement("div")
        block.className = "Base"
        for(let i = 0; i < 2; i ++){
            this.addContent(listWord[i],listDisplay[i],block)
        }
        this.base.appendChild(block)
    }

    minus(){
        let listDisplay = [this.object.cpu, this.object.ram];
        let listWord = ["cpu", "ram"];
        let block = document.createElement("div")
        block.className = "Data"
        for(let i = 0; i < 2; i ++){
            this.addContent(listWord[i],listDisplay[i],block)
        }
        this.base.appendChild(block)
    }

    // plus tard
    more(){

    }

    addContent(text,data,node){
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(data));
        node.appendChild(block);
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    refresh(node,self) {
        if(clock.object.state ){
            if(self.object.state){
                for (let i = 0; i < 2; i++) {
                    node.childNodes[1].childNodes[i].childNodes[1].innerText = self.object.running.length * 2 + Math.trunc(Math.random() * 7);
                }
                self.enable()
            } else {
                self.disable();
            }
        }
    }

    enable(){
        this.base.className = "card-body";
    }

    disable(){
        this.base.className = "card-body disable";
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


