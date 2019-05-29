class TemplateMap {
    constructor(listRoom) {
        this.surface = {canvas: null,x:null,y:null};
        this.ctx;
        this.listObject = listRoom;
        this.clic = {
            clic: false,
            index: null
        }
        this.point = {
            index : null,
            last : null
        }
        this.reload = null; 
    }

    initClick() {
        let self = this.getThis();
        this.surface.canvas.addEventListener("click", function (e) {
            console.log("click")
            self.choose(e, (!self.clic.clic) ? null : self.clic.index);
            if (self.clic.clic && self.clic.index != null) {
                self.showAshenOne();
            }
        });
        this.surface.canvas.onmousemove = function (e) {
            self.hover(e);
        };        
    }

    initCanvas(base){
        this.surface.canvas = document.createElement("canvas");
        this.surface.canvas.width = 360;
        this.surface.canvas.height = 240;
        base.appendChild(this.surface.canvas);
        this.surface.x = this.surface.canvas.getBoundingClientRect().x;
        this.surface.y = this.surface.canvas.getBoundingClientRect().y;
        this.ctx = this.surface.canvas.getContext("2d");
    }

    generate(base){
        this.initCanvas(base);
        this.drawAllRect();
        this.initClick();
        this.reload = setInterval(this.refresh,1000,this.getThis());
        this.closeChooser();
    }

    refresh(self){
        if(!self.clic.clic){
            self.drawAllRect();
        }
    }

    drawAllRect() {
        for (let i = 0; i < image.src.length; i++) {
            this.drawImage(i,this.listObject[i].posX,this.listObject[i].posY);
            if(!this.listObject[i].meet.free && this.listObject[i].state){
                this.drawHover(i,"rgb(255,0,0,0.2)",this.listObject[i].posX,this.listObject[i].posY);
            } else if (!this.listObject[i].state || this.point.index == i) {
                this.drawHover(i,"rgb(0,0,0,0.3)",this.listObject[i].posX,this.listObject[i].posY);
            }
        }
    }

    drawImage(i,x=0,y=0,size=3) {
        this.ctx.drawImage(this.listObject[i].image,x*size,y * size, this.listObject[i].width * size, this.listObject[i].height * size);
        if(!this.listObject[i].meet.free && this.listObject[i].state){
            this.drawHover(i,"rgb(255,0,0,0.2)",x,y,size);
        }else if(!this.listObject[i].state){
            this.drawHover(i,"rgb(0,0,0,0.3)",x,y,size);
        }
    }

    drawHover(i,color,x=0,y=0,size=3) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * 3, y* 3, this.listObject[i].width * size, this.listObject[i].height * size);
    }

    hover(e) {
        if (!this.clic.clic) {
            this.hoverRoom(e);
        }
    }

    hoverRoom(e) {
        for (let i = 0; i < image.size[0].length; i++) {
            this.ctx.beginPath();
            this.ctx.rect( this.listObject[i].posX * 3, this.listObject[i].posY* 3, this.listObject[i].width * 3, this.listObject[i].height * 3);
            if (this.ctx.isPointInPath(e.clientX - this.surface.x, e.clientY - this.surface.y) && this.listObject[i].state && this.point.index != i ) {
                this.point.last = this.point.index
                this.point.index = i;
                this.drawImage(i, this.listObject[i].posX, this.listObject[i].posY);
                this.drawHover(i,(this.listObject[i].meet.free) ?"rgb(0,0,0,0.3)": "rgb(255,0,0,0.2)",this.listObject[i].posX, this.listObject[i].posY);
                if(this.point.last != null){
                    this.drawImage(this.point.last,this.listObject[this.point.last].posX,this.listObject[this.point.last].posY)
                }
            }
        }
    }

    choose(e) {
        if (!this.clic.clic) {
            this.selectRoom(e);
        } else {
            this.unselectRoom(e);
        }
    }

    selectRoom(e) {
        for (let i = 0; i < image.size[0].length; i++) {
            this.ctx.beginPath();
            this.ctx.rect(this.listObject[i].posX * 3,this.listObject[i].posY* 3, this.listObject[i].width * 3, this.listObject[i].height * 3);
            if (this.ctx.isPointInPath(e.clientX - this.surface.x, e.clientY - this.surface.y)) {
                this.clic.clic = true;
                this.clic.index = i;
            }
        }
    }

    unselectRoom(e) {
        this.ctx.beginPath();
        let size = this.getSize(this.listObject[this.clic.index].width,this.listObject[this.clic.index].height);
        this.ctx.rect(0, 0, this.listObject[this.clic.index].width * size, this.listObject[this.clic.index].height * size);
        if (this.ctx.isPointInPath(e.clientX - this.surface.x, e.clientY - this.surface.y)) {
            this.clic.clic = false;
            this.clic.index = null;
            this.drawAllRect();
        }
    }

    showAshenOne() {
        this.ctx.clearRect(0, 0, this.surface.canvas.width, this.surface.canvas.height);
        this.drawImage(this.clic.index,0,0,this.getSize(this.listObject[this.clic.index].width,this.listObject[this.clic.index].height));
    }

    getSize(sizeX, sizeY) {
        let ratio = 0;
        let test = [this.surface.canvas.width / sizeX, this.surface.canvas.height / sizeY];
        for (let i = 0; i < test.length; i++) {
            if ((sizeX * test[i]) <= this.surface.canvas.width && (sizeY * test[i]) <= this.surface.canvas.height && ratio <= test[i]) {
                ratio = test[i];
            }
        }
        return ratio;
    }

    getThis() {
        return this;
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    hide(node){
        clearInterval(this.reload);
        this.reload = null;
        node.parentElement.parentElement.parentElement.remove();
    }
}




