class Horloge{
    constructor(val = 0, speed = 10){
        this.clock = val;
        this.state = false;
        this.speed = speed;
        this.listEvent = [];
    }

    ticTac(){
        this.clock += this.speed;
        this.event(this.clock); 
    }
    
    time(){
        return Math.trunc(((this.clock/60)/60)%24) +":"+Math.trunc((this.clock/60)%60)+":"+(this.clock%60)
    }

    event(val){
        //console.log(val);
    }

    reset(){
        this.clock = 0;
    }

    // plus tard
    date(){}
}