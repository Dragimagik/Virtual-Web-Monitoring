class widget {
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    constructor(template, width = 4, heigth = 2) {
        this.width = width;
        this.heigth = heigth;
        this.extensible = false;
        this._state = false;
        this.template = template;
    }

    display() {
        if (!this.state) {
            let col = document.getElementById("content").appendChild(document.createElement("div"));
            col.className = "col-"+ this.width;
            let widget = col.appendChild(document.createElement("div"));
            let base = this.content();
            widget.appendChild(this.option());
            widget.appendChild(base);
            widget.className = "card widget";
            this.template.generate(base);
            this.state = true;
            this.save(true);
        }
    }
    
    save(val){
        if(this.template.object instanceof Computer){
            saveLocalComputer()
        } else if(this.template.object instanceof Server){
            saveLocalServer(val)
        } else if(this.template instanceof TemplateMap){
            saveLocalMap(val)
        } else if(this.template.object instanceof Network){
            saveLocalNetwork(val)
        }
    }

    closeButton() {
        let block = document.createElement("button");
        let self = this.getThis();
        block.addEventListener("click", function () {
            self.hide(this);
        });
        block.className = "btn btn-danger";
        return block
    }

    icon(src){
        let block = document.createElement("img");
        block.src = "Images/Icons/"+ src;
        block.style.width = "1.5em";
        block.className = "icon";
        return block
    }

    option(){
        let menu = document.createElement("div");
        menu.className = "card-header";
        if (this.template.src != null){
            menu.appendChild(this.icon(this.template.src));
        }
        menu.appendChild(this.closeButton());
        return menu
    }

    content(){
        let contentWidget = document.createElement("div");
        contentWidget.className = "card-body";
        return contentWidget
    }

    getThis() {
        return this;
    }

    hide(node) {
        if (this.state) {
            this.template.hide(node);
            this.state = false;
            this.save(false);
        }
    }
}


