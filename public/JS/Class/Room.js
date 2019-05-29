class Room {
    constructor(src,name,posX,posY,width,height,nbrComputer = 0,nbrServer = 0,nbrPrinter = 0){
        this.image = new Image();
        this.image.src = src;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name
        this.state = true;
        this.meet = {
            list: [],
            free: true,
            nbr: 2
        };
    }

    reset(){
        this.meet = {list: [],
            free: true,
            nbr: 2
        };
    }

    use(){
        this.meet.free = false;
    }

    reserve(){
        if(this.state && this.meet.nbr > 0){
            this.use();
            this.meet.nbr--;
            this.meet.list.push()
        }
    }

    release(){
        this.meet.list.shift();
        this.meet.free = true;
    }

    close(){
        this.state = false;
    }

    open(){
        this.state = true;
    }
}