class Map {
    constructor() {
        this.listImage = ["corridor", "dinningRoom", "executiveManagementOffice", "executiveOffice", "meetingRoom", "networkRoom", "openSpace", "secretarialOffice"];
        this.open = true;
    }
}

map = new widget(new TemplateWidgetMap(new Map()));