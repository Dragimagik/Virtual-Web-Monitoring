class TemplatePrinter {
    constructor(object) {
        this.object = object;
        this.base = null;
        this.reload = null;
    }

    generate(base) {
        let block;
        let listWord = ["name", "ip", "stock", "queue", "ink"];
        let listDisplay = [this.object.name,this.object.ip,this.object.paper.stock,this.object.listFile,this.object.ink];
        for (let i = 0; i < 4; i++) {
            block = document.createElement("div");
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listWord[i] + " : "));
            block.appendChild(document.createElement("span")).appendChild(document.createTextNode(listDisplay[i]));
            base.appendChild(block);
        }
            /*block = document.createElement("div");
            block.appendChild(document.createTextNode(listWord[i] + " : "));
            //block.innerHTML("<div class=\"progress-bar\" role=\"progressbar\" style=\"width: " + this.pourcentage(listDisplay[i]) + "%\"></div>")
            base.appendChild(block);*/
        this.base = base;
        this.closeChooser();
        this.reload = setInterval(this.refresh,1000,this.base,this.getThis());
    }

    refresh(node,self){
        if (clock.object.state){
            console.log("refresh");
            //for(let i = 0; i < node.childNodes.length; i++){
                node.childNodes[2].childNodes[1].innerText = self.object.paper.stock
            //}
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