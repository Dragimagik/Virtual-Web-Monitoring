class Meeting{
    constructor(begin,room){
        this.room = room;
        this.begin = begin;
        this.end = begin + Math.trunc(Math.random() * 9000);
        this.addEvent()
    }

    addEvent(){
        clock.object.listEvent.push(new Event(this.begin,this.room.use));
        clock.object.listEvent.push(new Event(this.end,this.room.release));
    }
}