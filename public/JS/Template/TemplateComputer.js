class TemplateComputer {
    constructor(object) {
        this.object = object;
        this.base = null;
        this.reload = null;
    }

    generate(base) {
        let block;
        let listDisplay = [this.object.name, this.object.ip, this.object.cpu, this.object.ram];
        let listWord = ["name", "ip", "cpu", "ram"];
        for (let i = 0; i < 4; i++) {
            block = document.createElement("div");
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listWord[i] + " : "));
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listDisplay[i]));
            base.appendChild(block);
            //base.id = this.object.name.slice(8);
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
            for (let i = 2; i < 4; i++) {
                node.childNodes[i].childNodes[1].innerText = self.object.running.length * 5 + 2;
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


