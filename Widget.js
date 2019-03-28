class widget {
    get object() {
        return this._object;
    }
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get name() {
        return this._name;
    }

    constructor(template, object, posX = 0, posY = 0, width = 2, heigth = 2) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.heigth = heigth;
        this.extensible = false;
        this._state = false;
        this.template = template;
        this._name = "Widget" + object.name;
        this._object = object;

    }

    display() {
        this._state = true;
        this.template.gen(this.object);
        closeChooser();
    }


    /*hide(){
        array[1][document.querySelector("select").options.selectedIndex] = false;
        node.parentNode.remove();
    }*/

    //document.querySelector("select").options[document.querySelector("select").options.selectedIndex].disabled = true

}

//let test = new widget(new templateComputer());
let listWidget = [];


// get id of select : $("select option:selected").val()

function openChooser() {
    document.querySelector("button").disabled = true;
    generate();
}

function closeChooser() {
    document.getElementById("choice").remove();
    document.querySelector("button").disabled = false;
}

/*
disable body
$("body").attr("id","Dont");
 */

//<div><b>Appended text</b> <button onclick='
//$("div").parent().remove()
