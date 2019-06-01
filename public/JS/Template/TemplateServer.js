class TemplateServer {
    constructor(object,src) {
        this.object = object;
        this.base = null;
        this.reload = null;
        this.src = src;
    }

    generate(base) {
        this.base = base;
        this.closeChooser();
        this.basic();
        if (this.object.state) {
            this.minus();
        } else {
            this.disable();
        }
        this.reload = setInterval(this.refresh, 1000, this.base, this.getThis());
    }

    basic() {
        let listDisplay = [this.object.name, this.object.ip];
        let listWord = ["name", "ip"];
        let block = document.createElement("div")
        block.className = "Base"
        for (let i = 0; i < listWord.length; i++) {
            this.addContent(listWord[i], listDisplay[i], block)
        }
        this.base.appendChild(block)
    }

    minus() {
        let listDisplay = [this.object.cpu, this.object.ram];
        let listWord = ["cpu", "ram", "storage"];
        let block = document.createElement("div")
        block.className = "Data"
        for (let i = 0; i < listWord.length-1; i++) {
            this.addContent(listWord[i], listDisplay[i], block)
        }
        this.addStorage(listWord[2],block);
        this.base.appendChild(block)
    }

    // plus tard
    more() {

    }

    addContent(text, data, node) {
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(data));
        node.appendChild(block);
    }

    addStorage(text,node){
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        let progress = document.createElement("div");
        progress.className ="progress";
        let progressBar = document.createElement("div");
        progressBar.className = "progress-bar"
        progressBar.style.width = this.pourcentage(this.object.storage) + "%"
        progress.appendChild(progressBar);
        block.appendChild(document.createElement("span")).appendChild(progress);
        node.appendChild(block);
    }

    pourcentage(val){
        return (val.stock/val.max)*100;
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    refresh(node, self) {
        if (clock.object.state) {
            if (self.object.state) {
                for (let i = 0; i < 2; i++) {
                    node.childNodes[1].childNodes[i].childNodes[1].innerText = Math.trunc(Math.random() * 7);
                }
                if(self.object.storage.modify){
                    self.object.storage.modify = false;
                    node.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].style.width = self.pourcentage(self.object.storage) + "%"
                }
                self.enable()
            } else {
                self.disable();
            }
        }
    }

    enable() {
        this.base.className = "card-body";
    }

    disable() {
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