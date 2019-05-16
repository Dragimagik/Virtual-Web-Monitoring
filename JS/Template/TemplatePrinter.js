class TemplatePrinter {
    constructor(object) {
        this.object = object;
    }

    generate(base) {
        let block;
        let listWord = ["name", "ip", "stock"];
        let listDisplay = [this.object.name,this.object.ip,this.object.stock];
        for (let i = 0; i < 3; i++) {
            block = document.createElement("div");
            block.appendChild(document.createTextNode(listWord[i] + " : " + listDisplay[i]));
            base.appendChild(block);
        }
        this.closeChooser();
    }

    // afficher la couleur de chaque cartouche
    color(){

    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    getThis() {
        return this;
    }

    hide(node) {
        node.parentElement.parentElement.remove();
    }
}