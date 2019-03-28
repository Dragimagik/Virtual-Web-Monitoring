class templateComputer {
    gen(object) {
        let node = document.createElement("div");
        let block;
        let listDisplay = [object.name, object.getIp(), object._cpu, object._ram];
        let listWord = ["cpu: ", "ram: "];
        for (let i = 0; i < 2; i++) {
            block = document.createElement("span");
            block.appendChild(document.createTextNode(listDisplay[i]));
            node.appendChild(block);
        }
        for (let i = 0; i < 2; i++) {
            block = document.createElement("div");
            block.appendChild(document.createTextNode(listWord[i] + listDisplay[i + 2]));
            node.appendChild(block)
        }
        document.querySelector("body").appendChild(node).className += "widget";
    }

    more() {

    }

    minus() {

    }

}


