class Horloge {
    constructor(val = 0, speed = 10) {
        this.clock = val;
        this.state = false;
        this.speed = speed;
        this.listEvent = [];
    }

    ticTac() {
        this.clock += this.speed;
        this.event(this.clock);
    }

    time() {
        return Math.trunc(((this.clock / 60) / 60) % 24) + ":" + Math.trunc((this.clock / 60) % 60) + ":" + (this.clock % 60)
    }

    event(val) {
        for (let i = 0; i < this.listEvent.length; i++) {
            if (val >= this.listEvent[i].val && this.listEvent[i].state) {
                this.listEvent[i].fun();
                this.listEvent[i].state = false
            }
        }
        this.eventMeeting();
    }

    eventMeeting(){
        for (let i = 0; i < listRoom[6].meet.list.length; i++) {
            if (val >= listRoom[6].meet.list[i].begin.val && this.listEvent[i].state) {
                listRoom[6].meet.list[i].begin.fun();
                listRoom[6].meet.list[i].begin.state = false
            }
            if (val >= listRoom[6].meet.list[i].end.val && this.listEvent[i].state) {
                listRoom[6].meet.list[i].end.fun();
                listRoom[6].meet.list[i].end.state = false
            }
        }
    }

    reset() {
        this.clock = 0;
    }

    // plus tard
    date() { }
}