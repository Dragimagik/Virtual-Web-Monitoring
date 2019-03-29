class TemplateWidgetMap {
    constructor(object) {
        this.object = object;
    }

    generate(base) {
        let image;
        this.object.listImage.forEach(function (element) {
            image = document.createElement("img");
            image.src = "Images/" + element + ".png";
            image.width = image.width / 10;
            image.height = image.height / 10;

            base.appendChild(image);
        });
        this.closeChooser();
    }



    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    hide(node) {
        node.parentElement.remove();
    }
}