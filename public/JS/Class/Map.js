class Map {
    constructor(listImage) {
        this.listImage = listImage;
        this.open = true;
    }
}

function createImage(){
    let listImagePath = ["corridor", "diningRoom", "executiveManagementOffice", "executiveOffice", "meetingRoom", "networkRoom", "openSpace", "secretarialOffice"];
    let listImage = [];
    listImagePath.forEach(function (element) {
        listImage.push(new Image("Images/" + element + ".png"))
    });
     map = new widget(new TemplateWidgetMap(new Map(listImage)));
}
let map;
createImage();
