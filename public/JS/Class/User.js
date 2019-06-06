let dev = {
    save() {
        listComputer[Math.round(Math.random() * listComputer.length)].template.object.store("projet.js", 1024)
    },
    print() {
        listComputer[Math.round(Math.random() * (listComputer.length - 1))].template.object.send("test.txt", 25600000, [10, 0, 0, 21])
    }
}

let senior = {
    meet() {
        if (listRoom[6].state && listRoom[6].meet.list.length < 2) {
            if (listRoom[6].meet.free) {
                listRoom[6].meet.free = false;
                new Meeting(clock.object.clock)
            } else {
                new Meeting(listRoom[6].meet.list[0].end.val)
            }
        }
    },
    print() {
        listComputer[Math.round(Math.random() * (listComputer.length - 1))].template.object.send("test.txt", 51200000, [10, 0, 0, 22])
    }
}

let secret = {
    print() {
        listComputer[19].template.object.send("test.txt", 1024000, [10, 0, 0, 22])
    }
}