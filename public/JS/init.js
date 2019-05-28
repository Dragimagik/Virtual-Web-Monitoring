function main() {

    chooser = new widget(new TemplateChooser(),0);
    network = new widget(new TemplateNetwork(new Network("supNetwork", true)));
    createComputeur();
    createPrinter();
    createClock();
}

function createClock(){
    clock = new TemplateClock(new Horloge(0),document.getElementById("clock"));
    clock.generate();
}

function createComputeur() {
    for (let i = 0; i < 20; i++) {
        network.template.object.listInfo.push(new Computer(true,network.template.object.giveIP(), 5, 5, ("Computer" + i)));
        listComputer.push(new widget(new TemplateComputer(network.template.object.listInfo[network.template.object.listInfo.length - 1])));
    }
}

function createPrinter() {
    for (let i = 0; i < 2; i++) {
        network.template.object.listInfo.push(new Printers(("Printer" + i), true,  network.template.object.giveIP(),));
        listPrinter.push(new widget(new TemplatePrinter(network.template.object.listInfo[network.template.object.listInfo.length - 1])));
    }
}

let chooser;
let clock;
let network;
let listComputer = [];
let listPrinter = [];
main();

