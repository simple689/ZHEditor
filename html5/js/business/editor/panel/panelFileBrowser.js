function PanelFileBrowserController() {
    this._widgetSearchController = new WidgetSearchController();
}

PanelFileBrowserController.prototype.init = function () {
    this._menuLeftCreate = WidgetMenuController.createMenu(document.body, "../../editor/menu/menuFileBrowserCreate.html");

    var createBtn = document.getElementById("createBtn");
    createBtn._panelFileBrowserController = this;
    $(createBtn).on("click", PanelFileBrowserController.create);

    this._widgetSearchController.createSearch(this, createBtn);

    this.initDiv();
}
PanelFileBrowserController.create = function () {
    WidgetMenuController.showMenu(this._panelFileBrowserController._menuLeftCreate, null, this._panelFileBrowserController);
}
PanelFileBrowserController.prototype.initDiv = function () {
    var left = document.getElementById("left");
    var middle = document.getElementById("middle");

    middle.onmousedown = function (e) {
        var x = (e || event).clientX;
        middle.left = middle.offsetLeft;
        document.onmousemove = function (e) {
            var iT = middle.left + ((e || event).clientX - x);
            var maxT = document.body.clientWidth;
            iT < 30 && (iT = 30);
            iT > maxT && (iT = maxT);
            middle.style.left = left.style.width = iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            middle.releaseCapture && middle.releaseCapture()
        };
        middle.setCapture && middle.setCapture();
        return false
    };
};
