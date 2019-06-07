function main() {
    logBase = document.getElementById("log");
    chooser = new widget(new TemplateChooser(), 0);
    network = new widget(new TemplateNetwork(new Network("supNetwork", true), "wifi.png"), 5);
    initImage();
    map = new widget(new TemplateMap(listRoom, "map.png"), 0)
    projector = new widget(new TemplateProjector(new Projector("projector",false,network.template.object.giveIP()),"projector.png"))
    createComputeur();
    createPrinter();
    createClock();
    createServer();
    initEvent();
    initLocal();
    initEventPeople();
}

function initImage() {
    let image = {
        src: ["diningRoom", "executiveManagementOffice", "executiveOffice", "secretarialOffice", "corridor", "openSpace", "meetingRoom", "networkRoom"],
        size: [[50, 25, 25, 20, 70, 50, 35, 35], [40, 30, 30, 30, 20, 40, 30, 30]],
        pos: [[0, 50, 75, 100, 50, 0, 50, 85], [0, 0, 0, 0, 30, 40, 50, 50]]
    };
    for (let i = 0; i < image.src.length; i++) {
        if (i != 6) {
            listRoom.push(new Room("Images/" + image.src[i] + ".png", image.src[i], image.pos[0][i], image.pos[1][i], image.size[0][i], image.size[1][i]))
        } else {
            listRoom.push(new MeetingRoom("Images/" + image.src[i] + ".png", image.src[i], image.pos[0][i], image.pos[1][i], image.size[0][i], image.size[1][i]))
        }
    }
}

function initEvent() {
    let baseEvent = {
        val: [27900, 27900 + Math.trunc(Math.random() * 15), 59400 + Math.trunc(Math.random() * 15), 59400],
        fun: [startComputer, openDoor,  closeDoor, backupAll]
    }
    for (let i = 0; i < baseEvent.val.length; i++) {
        clock.object.listEvent.push(new Event(baseEvent.val[i], baseEvent.fun[i]))
    }
}

function createClock() {
    clock = new TemplateClock(new Horloge(0), document.getElementById("clock"));
    clock.generate();
}

function createComputeur() {
    for (let i = 0; i < 20; i++) {
        network.template.object.listInfo.push(new Computer(false, network.template.object.giveIP(), 0, 0, ("Computer" + i)));
        listComputer.push(new widget(new TemplateComputer(network.template.object.listInfo[network.template.object.listInfo.length - 1], "computer.png")));
    }
}

function createPrinter() {
    for (let i = 0; i < 2; i++) {
        network.template.object.listInfo.push(new Printers(("Printer" + i), true, network.template.object.giveIP()));
        listPrinter.push(new widget(new TemplatePrinter(network.template.object.listInfo[network.template.object.listInfo.length - 1], "printer.png")));
    }
}

function createServer() {
    network.template.object.listInfo.push(new Server("Server", true, network.template.object.giveIP(), { val: 0, max: 64 }, { name: "Xeon 4214", val: 0 }));
    server = new widget(new TemplateServer(network.template.object.listInfo[network.template.object.listInfo.length - 1], "server.png"));
}

let logBase;
let chooser;
let clock;
let network;
let server;
let projector;
let map;
let listPeople = [];
let listRoom = [];
let listComputer = [];
let listPrinter = [];
main();

// base function

function closeDoor() {
    for (let i = 0; i < listRoom.length; i++) {
        listRoom[i].close();
    }
    log("Horloge","Ferture des portes");
}

function openDoor() {
    for (let i = 0; i < listRoom.length; i++) {
        listRoom[i].open();
    }
    log("Horloge","Ouverture des portes");
}

function startAll() {
    startComputer();
    startNetwork();
    startPrinter();
    startServer();
}

function startComputer() {
    for (let i = 0; i < listComputer.length; i++) {
        listComputer[i].template.object.power()
    }
    log("Horloge","Allumages des ordinateurs");
}

function startPrinter() {
    for (let i = 0; i < listPrinter.length; i++) {
        listPrinter[i].template.object.power()
    }
    log("Horloge","Allumages des imprimantes");
}

function startServer() {
    server.template.object.power();
    log("Horloge","Allumages des serveur");
}

function startNetwork() {
    network.template.object.power();
    log("Horloge","Allumages réseau");
}

function shutComputer() {
    for (let i = 0; i < listComputer.length; i++) {
        listComputer[i].template.object.shutDown();
    }
    log("Horloge","Extenctions des ordinateurs");
}

function shutPrinter() {
    for (let i = 0; i < listPrinter.length; i++) {
        listPrinter[i].template.object.shutDown();
    }
}

function shutServer() {
    server.template.object.shutDown()
    log("Horloge","Extenctions des serveur");
}

function shutNetwork() {
    network.template.object.shutDown();
    log("Horloge","Extinction réseau");
}

function shutAll() {
    shutComputer();
    shutNetwork();
    shutPrinter();
    shutServer();
}

function backupAll() {
    for (let i = 0; i < listComputer.length; i++) {
        server.template.object.backup(listComputer[i])
    }
    log("Serveur","Backup des ordinateurs");
    shutComputer();
}

//

function initEventPeople(){
    initPrint();
    //initMeeting();
}

function initMeeting(){
    for (let i = 0; i < 2; i++) {
        new Meeting(Math.trunc(Math.random() * 10800) + 28800);
    }
}

function initPrint(){
    for(let i = 0; i < 50; i++){
        clock.object.listEvent.push(new Event(Math.trunc(Math.random()*28000)+ 28800,dev.print));
    }
    for(let i = 0; i < 25; i++){
        clock.object.listEvent.push(new Event(Math.trunc(Math.random()*28000) + 28800,senior.print));
    }
    for(let i = 0; i < 100; i++){
        clock.object.listEvent.push(new Event(Math.trunc(Math.random()*28000)+ 28800,secret.print));
    }
}

function initSave(){

}