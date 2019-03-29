class TemplateWidgetMap {
    constructor(object) {
        this.object = object;
    }

    generate(base) {
        let image;
        let self = this.getThis();
        this.object.listImage.forEach(function (element, index) {
            image = self.addImage(element.path, 10, self.object.listImage[index].display, index);
            base.appendChild(image);
        });
        this.closeChooser();
    }

    closeChooser() {
        if (document.getElementById("choice") != null) {
            chooser.hide();
        }
    }

    addImage(path, size, one, index = 0) {
        let image = document.createElement("img");
        image.src = path;
        image.width = image.width / size;
        image.height = image.height / size;
        this.addListener(this.object.listImage[index].display, image, index);
        return image;
    }

    addListener(one, image, index) {
        let self = this.getThis();
        if (one) {
            image.addEventListener("click", function () {
                self.reset(image);
            });
        } else {
            image.addEventListener("click", function () {
                self.displayOne(this, index);
            });
        }
    }

    displayOne(img, index) {
        let base = img.parentElement;
        this.deleteImages(img);
        console.log(index);
        let image = this.addImage(this.object.listImage[index].path, 1, this.object.listImage[index].display = true);
        base.appendChild(image);
    }

    deleteImages(img) {
        let node = img.parentElement.childNodes;
        let nodeLength = node.length - 1;
        for (let i = 0; i < nodeLength; i++) {
            this.object.listImage[i].display = false;
            node[1].remove();
        }
    }

    reset(img) {
        let base = img.parentElement;
        this.deleteImages(img);
        this.generate(base);
    }

    getThis() {
        return this;
    }

    hide(node) {
        node.parentElement.remove();
    }
}