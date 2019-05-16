class TemplateChooser {
    generate(base) {
        moveAdd();
        let node = document.createElement("select");
        node.appendChild(this.addComputer());
        node.appendChild(this.addPrinter());
        node.appendChild(this.addMap());
        node.appendChild(this.addNetwork())
        node.className = "custom-select"
        base.appendChild(node);
        base.parentElement.id = "choice";
        this.disableButton();
    }

    //a modifié
    addMap() {
        let group = document.createElement("optgroup");
        group.label = "Map";
        let option = document.createElement("option");
        option.appendChild(document.createTextNode("map"));
        this.disableOption(map, option);
        option.addEventListener('click', function () {
            map.display();
        });
        group.appendChild(option);
        return group;
    }

    addComputer() {
        let option;
        let group = document.createElement("optgroup");
        group.label = "Computer";
        let self = this.getThis();
        listComputer.forEach(function (element, index) {
            option = document.createElement("option");
            option.appendChild(document.createTextNode(element.template.object.name));
            self.disableOption(element, option);
            option.addEventListener('click', function () {
                listComputer[index].display();
            });
            group.appendChild(option);
        });
        return group;
    }

    addPrinter() {
        let option;
        let group = document.createElement("optgroup");
        group.label = "Printer";
        let self = this.getThis();
        listPrinter.forEach(function (element, index) {
            option = document.createElement("option");
            option.appendChild(document.createTextNode(element.template.object.name));
            self.disableOption(element, option);
            option.addEventListener('click', function () {
                listPrinter[index].display();
            });
            group.appendChild(option);
        });
        return group;
    }

    // a modifié
    addNetwork() {
        let group = document.createElement("optgroup");
        group.label = "Network";
        let option = document.createElement("option");
        option.appendChild(document.createTextNode("network"));
        this.disableOption(listNetwork, option);
        option.addEventListener('click', function () {
            listNetwork.display();
        });
        group.appendChild(option);
        return group;
    }

    getThis() {
        return this;
    }

    disableOption(element, option) {
        if (element.state) {
            option.disabled = true;
        }
    }

    disableButton() {
        document.querySelector("button").disabled = true;
    }

    enableButton() {
        document.querySelector("button").disabled = false;
    }

    hide(node) {
        document.getElementById("choice").remove();
        this.enableButton();
    }
}

function moveAdd() {
    let add = document.getElementById("add");
    add.style.top = "93%";
    add.style.left = "93%";
}
