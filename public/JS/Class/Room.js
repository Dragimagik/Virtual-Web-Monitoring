class Room {
    constructor(src,name,posX,posY,width,height){
        this.image = new Image();
        this.image.src = src;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name
        this.state = false;
    }

    close(){
        this.state = false;
    }

    open(){
        this.state = true;
    }
}

class MeetingRoom extends Room{
    constructor(src,name,posX,posY,width,height){
        super(src,name,posX,posY,width,height);
        this.meet = {
            list: [],
            free: true,
        };
    }

    reset(){
        listRoom[6].meet = {list: [],
            free: true,
        };
    }

    use(){
        if(listRoom[6].state ){
            listRoom[6].meet.free = false;
            log(listRoom[6].name,"utilisation pour une réunion");
        }
    }

    release(){
        listRoom[6].meet.free = true;
        log(listRoom[6].name,"fin de réunion");
    }
}