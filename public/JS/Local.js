// restauration

function saveLocalNetwork(val) {

    localStorage.setItem("network", JSON.stringify([val]));
}

function saveLocalComputer() {
    let temp = Array();
    for (let i = 0; i < listComputer.length; i++) {
        temp.push(listComputer[i]._state);
    }
    localStorage.setItem("listComputer", JSON.stringify(temp));
}

function saveLocalServer(val) {
    localStorage.setItem("server", JSON.stringify([val]));
}

function saveLocalMap(val) {
    localStorage.setItem("map", JSON.stringify([val]));
}

function initLocal() {
    if (localStorage.getItem("listComputer") && localStorage.getItem("map") /*&& localStorage.getItem("listPrinter")*/ && localStorage.getItem("network") && localStorage.getItem("server")) {
        launch();
        if(document.getElementById("content").childElementCount > 0){
            moveAdd();
        }
    } else {
        saveLocalComputer();
        saveLocalMap(false);
        saveLocalNetwork(false);
        saveLocalServer(false);
    }
}

function launch() {
    launchComputer(JSON.parse(localStorage.getItem('listComputer')));
    launchServer();
    launchMap();
    launchNetwork();
}

function launchComputer(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]) {
            listComputer[i].display();
        }
    }
}

function launchServer() {
    if (JSON.parse(localStorage.getItem('server'))[0]) {
        server.display();
    }
}

function launchNetwork() {
    if (JSON.parse(localStorage.getItem('network'))[0]) {
        network.display();
    }
}

function launchMap() {
    if (JSON.parse(localStorage.getItem('map'))[0]) {
        map.display();
    }
}