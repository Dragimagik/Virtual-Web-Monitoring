class TemplateClock {
    constructor(object,base) {
        this.object = object;
        this.base = base;
        this.timer = null;
    }

    generate() {
        this.base.appendChild(document.createTextNode(this.object.time()));
    }

    run(){
        this.object.state = true;
        this.timer = setInterval(this.refresh,1000,this.base,this.getThis())
    }

    stop(){
        clearInterval(this.timer);
        this.object.state = false;
        this.timer = null;
    }

    refresh(node,self) {
        self.object.ticTac();
        node.innerHTML = self.object.time();
    }

    hide(node) {
        node.parentElement.parentElement.parentElement.remove();
    }

    getThis() {
        return this;
    }
}