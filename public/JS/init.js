function main() {

    chooser = new widget(new TemplateChooser(),0);
    network = new widget(new TemplateNetwork(new Network("supNetwork", true),"wifi.png"));
    initImage();
    map = new widget(new TemplateMap(listRoom,"map.png"),5)
    createComputeur();
    createPrinter();
    createClock();
    createServer();
    initEvent();
}

function initImage() {
let image = {
    src: ["diningRoom", "executiveManagementOffice", "executiveOffice", "secretarialOffice", "corridor", "openSpace", "meetingRoom", "networkRoom"],
    size: [[50, 25, 25, 20, 70, 50, 35, 35], [40, 30, 30, 30, 20, 40, 30, 30]],
    pos: [[0, 50, 75, 100, 50, 0, 50, 85], [0, 0, 0, 0, 30, 40, 50, 50]]
};
    for (let i = 0; i < image.src.length; i++) {
        listRoom.push(new Room("Images/" + image.src[i] + ".png",image.src[i], image.pos[0][i], image.pos[1][i], image.size[0][i], image.size[1][i]))
    }
}

function initEvent(){
    let baseEvent = {
        val: [27900,27900 + Math.trunc(Math.random() * 15),59400,59400 + Math.trunc(Math.random() * 15),59400],
        fun: [startComputer,openDoor,shutComputer,closeDoor,server.template.object.backupAll]
    }
    for (let i = 0; i < baseEvent.val.length; i++) {
        clock.object.listEvent.push(new Event(baseEvent.val[i],baseEvent.fun[i]))        
    }
}

function createClock(){
    clock = new TemplateClock(new Horloge(0),document.getElementById("clock"));
    clock.generate();
}

function createComputeur() {
    for (let i = 0; i < 20; i++) {
        network.template.object.listInfo.push(new Computer(false,network.template.object.giveIP(), 0, 0, ("Computer" + i)));
        listComputer.push(new widget(new TemplateComputer(network.template.object.listInfo[network.template.object.listInfo.length - 1],"computer.png")));
    }
}

function createPrinter() {
    for (let i = 0; i < 2; i++) {
        network.template.object.listInfo.push(new Printers(("Printer" + i), true,  network.template.object.giveIP(),));
        listPrinter.push(new widget(new TemplatePrinter(network.template.object.listInfo[network.template.object.listInfo.length - 1],"printer.png")));
    }
}

function createServer() {
    network.template.object.listInfo.push(new Server("Server", true,  network.template.object.giveIP(),{val:0,max:64},{name:"Xeon 4214",val: 0}));
    server = new widget(new TemplateServer(network.template.object.listInfo[network.template.object.listInfo.length - 1],"server.png"));
}

let chooser;
let clock;
let network;
let server;
let map;
let listRoom = [];
let listComputer = [];
let listPrinter = [];
main();

// base function

function closeDoor(){
    for (let i = 0; i < listRoom.length; i++) {
        listRoom[i].close();
    }
}

function openDoor(){
    for (let i = 0; i < listRoom.length; i++) {
        listRoom[i].open();
    }
}

function startAll(){

}

function startComputer(){
    for(let i = 0; i < listComputer.length; i++){
        listComputer[i].template.object.power()
    }    
}

function startPrinter(){
    for(let i = 0; i < listPrinter.length; i++){
        listPrinter[i].template.object.power()
    }    
}

function shutComputer(){
    for(let i = 0; i < listComputer.length; i++){
        listComputer[i].template.object.shutDown();
    }    
}

function shutPrinter(){
    for(let i = 0; i < listPrinter.length; i++){
        listPrinter[i].template.object.shutDown();
    }   
}

function shutServer(){

}

function shutAll(){

}