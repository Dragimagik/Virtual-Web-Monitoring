class TemplateWidgetComputer {
    constructor(object) {
        this.object = object;
    }

    generate(base) {
        let block;
        let listDisplay = [this.object.name, this.object._ip, this.object._cpu, this.object._ram];
        let listWord = ["cpu: ", "ram: "];
        for (let i = 0; i < 2; i++) {
            block = document.createElement("span");
            block.appendChild(document.createTextNode(listDisplay[i]));
            base.appendChild(block);
        }
        for (let i = 0; i < 2; i++) {
            block = document.createElement("div");
            block.appendChild(document.createTextNode(listWord[i] + listDisplay[i + 2]));
            base.appendChild(block)
        }
        this.closeChooser();
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    hide(node) {
        node.parentElement.remove();
    }

    more() {

    }

    minus() {

    }

}


