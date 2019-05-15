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
            let widget = document.getElementById("content").appendChild(document.createElement("div"));
            let base = this.content();
            widget.appendChild(this.option());
            widget.appendChild(base);
            widget.className = "widget";
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

    option(){
        let menu = document.createElement("div");
        menu.className = "option";
        menu.appendChild(this.closeButton());
        return menu
    }

    content(){
        let contentWidget = document.createElement("div");
        contentWidget.className = "content";
        return contentWidget
    }

    getThis() {
        return this;
    }

    hide(node) {
        if (this.state) {
            this.template.hide(node);
            this.state = false;
        }
    }
}


