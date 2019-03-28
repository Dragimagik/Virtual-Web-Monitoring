function generate() {
    let node = document.createElement("select");
    listWidget.forEach(function(element,index) {
        option = document.createElement("option");
        option.appendChild(document.createTextNode(element._object.name));
        node.appendChild(option);
    });
    document.querySelector("body").appendChild(document.createElement("div").appendChild(node)).id = "choice";
    node.addEventListener('click', function () {
        listWidget[node.options.selectedIndex].display();
    });

}

