class TemplateNetwork {
    constructor(object,src) {
        this.object = object;
        this.base = null;
        this.reload = null;
        this.chart = null;
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
        this.chart = new Chart(document.getElementById('chart').getContext('2d'), {
            type: 'line',
            data: data,
            options: design,
        });
        this.reload = setInterval(this.refresh,1000,this.base,this.getThis());
    }

    basic() {
        let listWord = ["name", "ip","mask",];
        let listDisplay = [this.object.name,this.object.ip,this.object.mask];
        let block = document.createElement("div")
        block.className = "Base"
        for (let i = 0; i < listWord.length; i++) {
            this.addContent(listWord[i], listDisplay[i], block)
        }
        this.base.appendChild(block)
    }

    minus() {
        let listDisplay = [this.object.nbrDevice,this.object.traffic];
        let listWord = ["nbrDevice","load"];
        let block = document.createElement("div")
        block.className = "Data"
        this.addChart(listWord[1],block);
        this.addContent(listWord[0], listDisplay[0], block)
        this.base.appendChild(block)
    }

    addContent(text, data, node) {
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(data));
        node.appendChild(block);
    }

    addChart(text,node){
        let block = document.createElement("div");
        block.appendChild(document.createElement("span")).appendChild(document.createTextNode(text + " : "));
        let parent = document.createElement("div");
        parent.style.width = "100%";
        let canvas = document.createElement("canvas");
        canvas.id = "chart";
        block.appendChild(parent).appendChild(canvas);
        node.appendChild(block);
    }

    pourcentage(val){
        return val.stock/val.max;
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    refresh(node,self) {
        if(clock.object.state){
            if (self.object.state) {
                node.childNodes[1].childNodes[1].childNodes[1].innerHTML = self.object.nbrDevice;
                data.datasets[0].data.unshift(self.pourcentage(self.object.bandWidth))
                data.datasets[0].data.pop()
                self.chart.update()
                self.object.bandWidth.stock = 0;
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