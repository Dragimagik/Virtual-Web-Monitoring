const socket = io.connect('http://127.0.0.1:8080');

function log(name,message){
    socket.emit("log",{name:name,date:Date(),message:message});
}