Dev = {
    save: listComputer[Math.round(Math.random() * listComputer.length)].store("projet.js", 1024),
    print: listComputer[Math.round(Math.random() * listComputer.length)].send("test.txt", ‭25600‬)
}

Senior = {
    meet: new Meeting(clock.object.clock),
    print: listComputer[Math.round(Math.random() * listComputer.length)].send("test.txt", ‭10240‬)
}

Secret = {
    meet: new Meeting(clock.object.clock),
    print: listComputer[Math.round(Math.random() * listComputer.length)].send("test.txt", 5120)
}