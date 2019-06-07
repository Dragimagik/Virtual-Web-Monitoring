class TemplateProjector {
    constructor(object, src) {
        this.object = object;
        this.base = null;
        this.reload = null;
        this.src = src;
    }

    generate(base) {
        this.base = base;
        this.closeChooser();
        this.basic();
        if (!this.object.state) {
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

    addContent(text, data, node) {
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

    refresh(node, self) {
        if (clock.object.state) {
            if (self.object.state) {
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


