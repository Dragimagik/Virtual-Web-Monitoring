class TemplateChooser {

    generate(base) {
        let node = document.createElement("select");
        let option;
        listWidget.forEach(function (element, index) {
            option = document.createElement("option");
            option.appendChild(document.createTextNode(element.template.object.name));
            node.appendChild(option);
        });
        node.addEventListener('click', function () {
            listWidget[node.options.selectedIndex].display();
        });
        base.appendChild(node);
        base.id = "choice";
        this.disableButton();
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
