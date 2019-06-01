class TemplatePrinter {
    constructor(object,src) {
        this.object = object;
        this.base = null;
        this.reload = null;
        this.src = src;
        this.first = false;
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
        for(let i = 0; i < listWord.length; i ++){
            this.addContent(listWord[i],listDisplay[i],block)
        }
        this.base.appendChild(block)
    }

// bar pour l'affichage
    minus(){
        let listDisplay = [this.object.paper.stock,this.object.ink.stock,this.object.listFile];
        let listWord = ["stock",  "ink" ,"queue"];
        let block = document.createElement("div")
        block.className = "Data"
        for(let i = 0; i < listWord.length-1; i ++){
            this.addContent(listWord[i],listDisplay[i],block)
        }
        this.base.appendChild(block)
    }

    addContent(text,data,node){
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(data));
        node.appendChild(block);
    }

    addPrinting(){
        let block = document.createElement("div");
        block.className ="progress";
        let progress = document.createElement("div");
        progress.className = "progress-bar progress-bar-striped progress-bar-animated"
        progress.style.width = "100%"
        block.appendChild(progress);
        this.base.appendChild(block);
    }

    refresh(node,self){
        if (clock.object.state){
            if(self.object.state){
                let listDisplay = [self.object.paper.stock,self.object.ink.stock,self.object.listFile];
                for (let i = 0; i < 2; i++) {
                    node.childNodes[1].childNodes[i].childNodes[1].innerText = listDisplay[i];
                }
                if(self.object.printing.val && !self.first){
                    self.first = true
                    self.addPrinting();
                } else if(!self.object.printing.val && document.getElementsByClassName("progress")[0]) {
                    self.first = false
                    document.getElementsByClassName("progress")[0].remove();
                }
                self.enable();
            } else {
                self.disable();
            }
        }
    }

    pourcentage(val){
        return (val.stock/val.max)*100;
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
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