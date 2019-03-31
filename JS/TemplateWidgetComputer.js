class TemplateWidgetComputer {
    constructor(object) {
        this.object = object;
    }

    generate(base) {
        let block;
        let listDisplay = [this.object.name, this.object.ip, this.object.cpu, this.object.ram];
        let listWord = ["cpu: ", "ram: "];
        for (let i = 0; i < 2; i++) {
            block = document.createElement("span");
            block.appendChild(document.createTextNode(listDisplay[i]));
            base.appendChild(block);
        }
        for (let i = 0; i < 2; i++) {
            block = document.createElement("div");
            block.appendChild(document.createTextNode(listWord[i] + listDisplay[i + 2]));
            base.appendChild(block);
            base.id = this.object.name.slice(8);
        }
        this.closeChooser();
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    refresh(node) {
        let listWord = ["cpu: ", "ram: "];
        let listDisplay = [this.object.cpu = Math.floor(Math.random() * Math.floor(7)) , this.object.ram = Math.floor(Math.random() * Math.floor(7))];
        listWord.forEach(function (element, index) {
            node.children[index + 3].textContent = element + listDisplay[index];
        })
    }

    more() {

    }

    minus() {

    }

    hide(node) {
        node.parentElement.remove();
    }
}


