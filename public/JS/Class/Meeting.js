class Meeting{
    constructor(begin){
        this.begin = new Event(begin,listRoom[6].use);
        this.end = new Event(begin + Math.trunc(Math.random() * 9000),listRoom[6].release)
        this.addMeet();
    }

    addMeet(){
        listRoom[6].meet.list.push(this)
    }
}