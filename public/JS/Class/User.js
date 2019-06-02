class User{
    constructor(grade,computer){
        this.grade = grade;
        this.computer = computer;
    }
}

class Dev extends User{
    constructor(grade,computer){
        super(grade,computer)
    }

    save(){
        //definir parametre
        this.computer.store("projet.js",1024)
    }

    print(){
        //definir parametre
        this.computer.send();
    }
}

class Senior extends User{
    constructor(grade,computer){
        super(grade,computer)
    }

    meet(){
        new Meeting(clock.object.clock)
    }

    print(){
        //definir parametre
        this.computer.send();
    }
}

class Secret extends User{
    constructor(grade,computer){
        super(grade,computer)
    }

    meet(){
        new Meeting(clock.object.clock)
    }

    print(){
        //definir parametre
        this.computer.send();
    }
}