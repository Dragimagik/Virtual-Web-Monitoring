class widget {
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    constructor(template, posX = 0, posY = 0, width = 2, heigth = 2) {
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
            let base = document.querySelector("body").appendChild(document.createElement("div"));
            base.appendChild(this.closeButton());
            this.template.generate(base);
            this.state = true;
        }
    }

    closeButton() {
        let block = document.createElement("button");
        let self = this;
        block.addEventListener("click", function () {
            self.hide(this);
        });
        block.className = "button";
        return block
    }

    hide(node) {
        if (this.state) {
            this.template.hide(node);
            this.state = false;
        }
    }
}


let listWidget = [];
let chooser = new widget(new TemplateChooser());


// get id of select : $("select option:selected").val()


/*
disable body
$("body").attr("id","Dont");
 */

//<div><b>Appended text</b> <button onclick='
//$("div").parent().remove()
