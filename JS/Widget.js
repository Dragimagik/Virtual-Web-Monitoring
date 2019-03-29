class widget {
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    constructor(template, width = 2, heigth = 2, posX = 0, posY = 0) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.heigth = heigth;
        this.extensible = false;
        this._state = false;
        this.template = template;
    }

    display() {
        if (!this.state) {
            let base = document.getElementById("content").appendChild(document.createElement("div"));
            base.appendChild(this.closeButton());
            base.className = "widget";
            this.template.generate(base);
            this.state = true;
        }
    }

    closeButton() {
        let block = document.createElement("button");
        let self = this.getThis();
        block.addEventListener("click", function () {
            self.hide(this);
        });
        block.className = "button";
        return block
    }

    getThis(){
        return this;
    }

    hide(node) {
        if (this.state) {
            this.template.hide(node);
            this.state = false;
        }
    }
}



let chooser = new widget(new TemplateChooser());
