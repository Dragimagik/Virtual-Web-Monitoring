const express = require("express");
const app = express();
const fs = require("fs");
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
  

io.on('connection', function (socket) {
    socket.on("log",function(data){
        fs.appendFile("log.txt","name : " + data.name + ",date : " + data.date + ",message : " + data.message + "\n", function(err){
            if(err) throw err;
        })
    })
});

server.listen(8080);


