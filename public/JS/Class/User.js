let dev = {
    save(){
        listComputer[Math.round(Math.random() * listComputer.length)].template.object.store("projet.js", 1024)
    },
    print(){
        listComputer[Math.round(Math.random() * listComputer.length)].template.object.send("test.txt", 25540)
    }
}

let senior = {
    meet(){ 
        if(listRoom[6].meet.free){
            new Meeting(clock.object.clock)
        } else {
            new Meeting(listRoom[6].meet.list[0].end.val)
        }
    },
    print(){
        listComputer[Math.round(Math.random() * listComputer.length)].template.object.send("test.txt", 10240)
    }
}

let secret = {
    print(){
        listComputer[Math.round(Math.random() * listComputer.length)].template.object.send("test.txt", 5120)
    } 
}