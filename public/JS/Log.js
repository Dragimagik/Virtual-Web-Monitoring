const socket = io.connect('http://127.0.0.1:8080');

function log(name,message){
    displayLog(name,message,clock.object.time())
    removeLog();
    socket.emit("log",{name:name,date:clock.object.time(),message:message});
}

function displayLog(name,message,date){
    let block = document.createElement("li");
    block.appendChild(document.createTextNode("name: " + name + " date: " + date + " message: " + message ));
    block.className = "list-group-item";
    logBase.childNodes[1].childNodes[3].childNodes[1].prepend(block);
}

function removeLog(){
    let length = logBase.childNodes[1].childNodes[3].childNodes[1].childNodes.length;
    if(length >= 12){
        logBase.childNodes[1].childNodes[3].childNodes[1].childNodes[length-1].remove();
    }
}