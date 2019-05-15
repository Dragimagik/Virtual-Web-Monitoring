function main() {
    network = new Network("supNetwork", true);
    chooser = new widget(new TemplateChooser());
    createComputeur();
    createPrinter();
}

function createComputeur() {
    for (let i = 0; i < 20; i++) {
        network.listInfo.push(new Computer(true, [10, 0, 0, i + 1], 5, 5, ("Computer" + i)));
        listWidget.push(new widget(new TemplateComputer(network.listInfo[network.listInfo.length - 1])));
    }
}

function createPrinter() {
    for (let i = 0; i < 2; i++) {
        network.listInfo.push(new Printers(("Printer" + i), true, 10, [10, 0, 0, network.listInfo.length + 1]));
        listWidget.push(new widget(new TemplatePrinter(network.listInfo[network.listInfo.length - 1])));
    }
}

let chooser;
let network;
let listWidget = [];
main();

//let listChildren;
//raffraichissement diagramme
/*listChildren = document.getElementById("content").childNodes;
setInterval(function () {
    if (listChildren.length > 0) {
        listChildren.forEach(function (element) {
            if (typeof listWidget[element.id].template.refresh === "function") {
                listWidget[element.id].template.refresh(element);
            }
        });
    }
}, 100);*/
